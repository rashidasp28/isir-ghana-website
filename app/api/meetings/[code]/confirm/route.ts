import { createHash } from 'crypto'
import { NextResponse } from 'next/server'
import { createSupabaseAdminClient } from '@/lib/supabase/server'
import { isMailConfigured, sendMeetingConfirmationEmails } from '@/lib/email/meetingNotifications'

function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

function formatTime(total: number) {
  const hours = Math.floor(total / 60)
  const minutes = total % 60
  const suffix = hours >= 12 ? 'PM' : 'AM'
  return `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${suffix}`
}

export async function POST(request: Request, { params }: { params: { code: string } }) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const organizerToken = typeof body.organizerToken === 'string' ? body.organizerToken : ''
    const meetingDateId = typeof body.meetingDateId === 'string' ? body.meetingDateId : ''
    const meetingLink = typeof body.meetingLink === 'string' ? body.meetingLink.trim() : ''
    const startMinutes = Number(body.startMinutes)

    if (!organizerToken || !meetingDateId || !Number.isInteger(startMinutes)) {
      return NextResponse.json({ error: 'Invalid confirmation request.' }, { status: 400 })
    }

    if (!/^https?:\/\//i.test(meetingLink) || meetingLink.length > 1000) {
      return NextResponse.json({ error: 'Enter a valid meeting link beginning with http:// or https://.' }, { status: 400 })
    }

    const supabase = createSupabaseAdminClient()
    const code = params.code.toUpperCase()
    const tokenHash = hashToken(organizerToken)

    const { data: meeting } = await supabase
      .from('meetings')
      .select('id, title, status, timezone, slot_duration_minutes, day_start_minutes, day_end_minutes')
      .eq('public_code', code)
      .eq('organizer_token_hash', tokenHash)
      .single()

    if (!meeting) return NextResponse.json({ error: 'Organizer access could not be verified.' }, { status: 403 })
    if (meeting.status === 'closed') return NextResponse.json({ error: 'This meeting is closed.' }, { status: 409 })

    if (startMinutes < meeting.day_start_minutes || startMinutes >= meeting.day_end_minutes) {
      return NextResponse.json({ error: 'Selected time is outside the meeting window.' }, { status: 400 })
    }

    const { data: meetingDate } = await supabase
      .from('meeting_dates')
      .select('id, meeting_date')
      .eq('id', meetingDateId)
      .eq('meeting_id', meeting.id)
      .single()

    if (!meetingDate) return NextResponse.json({ error: 'Selected meeting date is invalid.' }, { status: 400 })

    const endMinutes = startMinutes + meeting.slot_duration_minutes
    if (endMinutes > meeting.day_end_minutes) {
      return NextResponse.json({ error: 'Selected slot extends beyond the meeting window.' }, { status: 400 })
    }

    const { error: slotError } = await supabase
      .from('confirmed_slots')
      .upsert({
        meeting_id: meeting.id,
        meeting_date_id: meetingDateId,
        start_minutes: startMinutes,
        end_minutes: endMinutes,
        meeting_link: meetingLink,
        confirmed_at: new Date().toISOString(),
      }, { onConflict: 'meeting_id' })

    if (slotError) {
      console.error('Failed to save confirmed slot', slotError)
      return NextResponse.json({ error: 'Could not confirm the meeting time.' }, { status: 500 })
    }

    const { error: meetingError } = await supabase.from('meetings').update({ status: 'confirmed' }).eq('id', meeting.id)
    if (meetingError) {
      console.error('Failed to update meeting status', meetingError)
      return NextResponse.json({ error: 'Could not finalize the meeting.' }, { status: 500 })
    }

    await supabase.from('audit_events').insert({
      meeting_id: meeting.id,
      event_type: 'meeting.confirmed',
      metadata_json: { meeting_date_id: meetingDateId, start_minutes: startMinutes, end_minutes: endMinutes, meeting_link: meetingLink },
    })

    let notificationsSent = false
    let notificationWarning: string | null = null

    if (isMailConfigured()) {
      const { data: participants } = await supabase.from('participants').select('email').eq('meeting_id', meeting.id)
      const recipients = Array.from(new Set((participants || []).map((participant) => participant.email).filter((email): email is string => typeof email === 'string' && email.length > 0)))
      try {
        const origin = new URL(request.url).origin
        await sendMeetingConfirmationEmails({
          recipients,
          meetingTitle: meeting.title,
          meetingDate: meetingDate.meeting_date,
          startTime: formatTime(startMinutes),
          endTime: formatTime(endMinutes),
          timezone: meeting.timezone,
          meetingLink,
          calendarUrl: `${origin}/api/meetings/${code}/calendar`,
        })
        notificationsSent = true
      } catch (mailError) {
        console.error('Meeting confirmation email error', mailError)
        notificationWarning = 'The meeting was confirmed, but participant emails could not be sent.'
      }
    } else {
      notificationWarning = 'The meeting was confirmed, but email notifications are not configured yet.'
    }

    return NextResponse.json({ success: true, notificationsSent, notificationWarning })
  } catch (error) {
    console.error('Meeting confirmation error', error)
    return NextResponse.json({ error: 'Unexpected error while confirming the meeting.' }, { status: 500 })
  }
}
