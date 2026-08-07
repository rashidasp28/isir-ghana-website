import { createHash } from 'crypto'
import { NextResponse } from 'next/server'
import { createSupabaseAdminClient } from '@/lib/supabase/server'

function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

export async function POST(request: Request, { params }: { params: { code: string } }) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const organizerToken = typeof body.organizerToken === 'string' ? body.organizerToken : ''
    const meetingDateId = typeof body.meetingDateId === 'string' ? body.meetingDateId : ''
    const startMinutes = Number(body.startMinutes)

    if (!organizerToken || !meetingDateId || !Number.isInteger(startMinutes)) {
      return NextResponse.json({ error: 'Invalid confirmation request.' }, { status: 400 })
    }

    const supabase = createSupabaseAdminClient()
    const code = params.code.toUpperCase()
    const tokenHash = hashToken(organizerToken)

    const { data: meeting } = await supabase
      .from('meetings')
      .select('id, status, slot_duration_minutes, day_start_minutes, day_end_minutes')
      .eq('public_code', code)
      .eq('organizer_token_hash', tokenHash)
      .single()

    if (!meeting) {
      return NextResponse.json({ error: 'Organizer access could not be verified.' }, { status: 403 })
    }

    if (meeting.status === 'closed') {
      return NextResponse.json({ error: 'This meeting is closed.' }, { status: 409 })
    }

    if (startMinutes < meeting.day_start_minutes || startMinutes >= meeting.day_end_minutes) {
      return NextResponse.json({ error: 'Selected time is outside the meeting window.' }, { status: 400 })
    }

    const { data: meetingDate } = await supabase
      .from('meeting_dates')
      .select('id')
      .eq('id', meetingDateId)
      .eq('meeting_id', meeting.id)
      .single()

    if (!meetingDate) {
      return NextResponse.json({ error: 'Selected meeting date is invalid.' }, { status: 400 })
    }

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
        confirmed_at: new Date().toISOString(),
      }, { onConflict: 'meeting_id' })

    if (slotError) {
      console.error('Failed to save confirmed slot', slotError)
      return NextResponse.json({ error: 'Could not confirm the meeting time.' }, { status: 500 })
    }

    const { error: meetingError } = await supabase
      .from('meetings')
      .update({ status: 'confirmed' })
      .eq('id', meeting.id)

    if (meetingError) {
      console.error('Failed to update meeting status', meetingError)
      return NextResponse.json({ error: 'Could not finalize the meeting.' }, { status: 500 })
    }

    await supabase.from('audit_events').insert({
      meeting_id: meeting.id,
      event_type: 'meeting.confirmed',
      metadata_json: { meeting_date_id: meetingDateId, start_minutes: startMinutes, end_minutes: endMinutes },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Meeting confirmation error', error)
    return NextResponse.json({ error: 'Unexpected error while confirming the meeting.' }, { status: 500 })
  }
}
