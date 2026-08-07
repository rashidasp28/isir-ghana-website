import { NextResponse } from 'next/server'
import { createHash, randomBytes } from 'crypto'
import { createSupabaseAdminClient } from '@/lib/supabase/server'

const ALLOWED_DURATIONS = new Set([15, 30, 45, 60, 90, 120])
const ALLOWED_TYPES = new Set(['online', 'physical', 'hybrid'])

function minutesFromTime(value: string) {
  const match = /^(\d{2}):(\d{2})$/.exec(value)
  if (!match) return null

  const hours = Number(match[1])
  const minutes = Number(match[2])
  if (hours > 23 || minutes > 59) return null

  return hours * 60 + minutes
}

function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

function makePublicCode() {
  return randomBytes(6).toString('base64url').toUpperCase()
}

function makeOrganizerToken() {
  return randomBytes(32).toString('base64url')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const title = typeof body.title === 'string' ? body.title.trim() : ''
    const description = typeof body.description === 'string' ? body.description.trim() : ''
    const location = typeof body.location === 'string' ? body.location.trim() : ''
    const meetingType = typeof body.meetingType === 'string' ? body.meetingType : ''
    const timezone = typeof body.timezone === 'string' ? body.timezone.trim() : ''
    const slotDuration = Number(body.slotDuration)
    const dayStartMinutes = minutesFromTime(body.dayStart)
    const dayEndMinutes = minutesFromTime(body.dayEnd)
    const dates = Array.isArray(body.dates)
      ? [...new Set(body.dates.filter((date: unknown) => typeof date === 'string'))]
      : []

    if (title.length < 3 || title.length > 120) {
      return NextResponse.json({ error: 'Meeting title must be between 3 and 120 characters.' }, { status: 400 })
    }

    if (!ALLOWED_TYPES.has(meetingType)) {
      return NextResponse.json({ error: 'Choose a valid meeting type.' }, { status: 400 })
    }

    if (!ALLOWED_DURATIONS.has(slotDuration)) {
      return NextResponse.json({ error: 'Choose a valid meeting duration.' }, { status: 400 })
    }

    if (dayStartMinutes === null || dayEndMinutes === null || dayEndMinutes <= dayStartMinutes) {
      return NextResponse.json({ error: 'Choose a valid daily time window.' }, { status: 400 })
    }

    if (!timezone || timezone.length > 100) {
      return NextResponse.json({ error: 'Choose a valid timezone.' }, { status: 400 })
    }

    if (dates.length === 0 || dates.length > 14 || dates.some((date) => !/^\d{4}-\d{2}-\d{2}$/.test(date))) {
      return NextResponse.json({ error: 'Choose between 1 and 14 valid meeting dates.' }, { status: 400 })
    }

    const publicCode = makePublicCode()
    const organizerToken = makeOrganizerToken()
    const organizerTokenHash = hashToken(organizerToken)
    const supabase = createSupabaseAdminClient()

    const { data: meeting, error: meetingError } = await supabase
      .from('meetings')
      .insert({
        public_code: publicCode,
        organizer_token_hash: organizerTokenHash,
        title,
        description: description || null,
        location: location || null,
        meeting_type: meetingType,
        timezone,
        slot_duration_minutes: slotDuration,
        day_start_minutes: dayStartMinutes,
        day_end_minutes: dayEndMinutes,
        status: 'open',
      })
      .select('id, public_code')
      .single()

    if (meetingError || !meeting) {
      console.error('Failed to create meeting', meetingError)
      return NextResponse.json({ error: 'We could not create the meeting. Please try again.' }, { status: 500 })
    }

    const dateRows = dates
      .sort()
      .map((meetingDate, index) => ({
        meeting_id: meeting.id,
        meeting_date: meetingDate,
        display_order: index,
      }))

    const { error: dateError } = await supabase.from('meeting_dates').insert(dateRows)

    if (dateError) {
      await supabase.from('meetings').delete().eq('id', meeting.id)
      console.error('Failed to create meeting dates', dateError)
      return NextResponse.json({ error: 'We could not save the meeting dates. Please try again.' }, { status: 500 })
    }

    await supabase.from('audit_events').insert({
      meeting_id: meeting.id,
      event_type: 'meeting.created',
      metadata_json: { source: 'web' },
    })

    const origin = new URL(request.url).origin

    return NextResponse.json({
      meetingCode: meeting.public_code,
      participantUrl: `${origin}/meet/${meeting.public_code}`,
      organizerUrl: `${origin}/meet/manage/${meeting.public_code}/${organizerToken}`,
    })
  } catch (error) {
    console.error('Meeting creation error', error)
    return NextResponse.json({ error: 'Unexpected error while creating the meeting.' }, { status: 500 })
  }
}
