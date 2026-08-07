import { NextResponse } from 'next/server'
import { createSupabaseAdminClient } from '@/lib/supabase/server'

function escapeIcs(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;')
}

function pad(value: number) {
  return String(value).padStart(2, '0')
}

function localDateTimeStamp(dateValue: string, minutes: number) {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  const compactDate = dateValue.replace(/-/g, '')
  return `${compactDate}T${pad(hours)}${pad(mins)}00`
}

export async function GET(_request: Request, { params }: { params: { code: string } }) {
  const supabase = createSupabaseAdminClient()
  const code = params.code.toUpperCase()

  const { data: meeting } = await supabase
    .from('meetings')
    .select('id, title, description, location, timezone, status')
    .eq('public_code', code)
    .single()

  if (!meeting || meeting.status !== 'confirmed') {
    return NextResponse.json({ error: 'Confirmed meeting not found.' }, { status: 404 })
  }

  const { data: confirmed } = await supabase
    .from('confirmed_slots')
    .select('meeting_date_id, start_minutes, end_minutes')
    .eq('meeting_id', meeting.id)
    .single()

  if (!confirmed) {
    return NextResponse.json({ error: 'Confirmed time not found.' }, { status: 404 })
  }

  const { data: meetingDate } = await supabase
    .from('meeting_dates')
    .select('meeting_date')
    .eq('id', confirmed.meeting_date_id)
    .single()

  if (!meetingDate) {
    return NextResponse.json({ error: 'Confirmed date not found.' }, { status: 404 })
  }

  const uid = `${meeting.id}@isirghana.org`
  const now = new Date()
  const dtStamp = `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}T${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}${pad(now.getUTCSeconds())}Z`
  const timezone = escapeIcs(meeting.timezone)

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ISIR Ghana//ISIR Meet//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${dtStamp}`,
    `DTSTART;TZID=${timezone}:${localDateTimeStamp(meetingDate.meeting_date, confirmed.start_minutes)}`,
    `DTEND;TZID=${timezone}:${localDateTimeStamp(meetingDate.meeting_date, confirmed.end_minutes)}`,
    `SUMMARY:${escapeIcs(meeting.title)}`,
    meeting.description ? `DESCRIPTION:${escapeIcs(meeting.description)}` : '',
    meeting.location ? `LOCATION:${escapeIcs(meeting.location)}` : '',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].filter(Boolean).join('\r\n')

  return new NextResponse(ics, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="isir-meet-${code}.ics"`,
      'Cache-Control': 'no-store',
    },
  })
}
