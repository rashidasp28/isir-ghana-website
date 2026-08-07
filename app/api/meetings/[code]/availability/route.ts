import { NextResponse } from 'next/server'
import { createHash, randomBytes } from 'crypto'
import { createSupabaseAdminClient } from '@/lib/supabase/server'

type AvailabilityResponse = 'available' | 'maybe' | 'unavailable'
type SlotInput = { meetingDateId: string; startMinutes: number; response: AvailabilityResponse }

const RESPONSES = new Set<AvailabilityResponse>(['available', 'maybe', 'unavailable'])

function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

export async function POST(request: Request, { params }: { params: { code: string } }) {
  try {
    const code = params.code.toUpperCase()
    const body = (await request.json()) as Record<string, unknown>
    const displayName = typeof body.displayName === 'string' ? body.displayName.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const rawSlots = Array.isArray(body.slots) ? body.slots : []

    if (displayName.length < 2 || displayName.length > 80) {
      return NextResponse.json({ error: 'Enter your name.' }, { status: 400 })
    }

    if (email && (!email.includes('@') || email.length > 200)) {
      return NextResponse.json({ error: 'Enter a valid email address or leave it blank.' }, { status: 400 })
    }

    const slots: SlotInput[] = rawSlots.flatMap((raw): SlotInput[] => {
      if (!raw || typeof raw !== 'object') return []
      const value = raw as Record<string, unknown>
      const meetingDateId = typeof value.meetingDateId === 'string' ? value.meetingDateId : ''
      const startMinutes = Number(value.startMinutes)
      const response = value.response as AvailabilityResponse
      if (!meetingDateId || !Number.isInteger(startMinutes) || startMinutes < 0 || startMinutes > 1439 || !RESPONSES.has(response)) return []
      return [{ meetingDateId, startMinutes, response }]
    })

    if (slots.length === 0 || slots.length > 1000) {
      return NextResponse.json({ error: 'Mark at least one availability slot.' }, { status: 400 })
    }

    const supabase = createSupabaseAdminClient()
    const { data: meeting } = await supabase
      .from('meetings')
      .select('id, status, day_start_minutes, day_end_minutes, slot_duration_minutes')
      .eq('public_code', code)
      .single()

    if (!meeting || meeting.status !== 'open') {
      return NextResponse.json({ error: 'This meeting is not accepting responses.' }, { status: 404 })
    }

    const { data: meetingDates } = await supabase.from('meeting_dates').select('id').eq('meeting_id', meeting.id)
    const allowedDateIds = new Set((meetingDates || []).map((date) => date.id))
    const validSlots = slots.filter((slot) => allowedDateIds.has(slot.meetingDateId) && slot.startMinutes >= meeting.day_start_minutes && slot.startMinutes < meeting.day_end_minutes && (slot.startMinutes - meeting.day_start_minutes) % meeting.slot_duration_minutes === 0)

    if (validSlots.length !== slots.length) {
      return NextResponse.json({ error: 'One or more availability selections are invalid.' }, { status: 400 })
    }

    const responseToken = randomBytes(24).toString('base64url')
    const { data: participant, error: participantError } = await supabase
      .from('participants')
      .insert({ meeting_id: meeting.id, display_name: displayName, email: email || null, response_token_hash: hashToken(responseToken), submitted_at: new Date().toISOString() })
      .select('id')
      .single()

    if (participantError || !participant) {
      return NextResponse.json({ error: 'We could not save your response.' }, { status: 500 })
    }

    const { error: slotError } = await supabase.from('availability_slots').insert(validSlots.map((slot) => ({ participant_id: participant.id, meeting_date_id: slot.meetingDateId, start_minutes: slot.startMinutes, response: slot.response })))

    if (slotError) {
      await supabase.from('participants').delete().eq('id', participant.id)
      return NextResponse.json({ error: 'We could not save your availability.' }, { status: 500 })
    }

    await supabase.from('audit_events').insert({ meeting_id: meeting.id, event_type: 'participant.responded', metadata_json: { participant_id: participant.id } })
    return NextResponse.json({ success: true, responseToken })
  } catch (error) {
    console.error('Availability submission error', error)
    return NextResponse.json({ error: 'Unexpected error while saving your availability.' }, { status: 500 })
  }
}
