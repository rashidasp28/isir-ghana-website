import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import { createSupabaseAdminClient } from '@/lib/supabase/server'
import AvailabilityGrid from '@/components/meet/AvailabilityGrid'

function formatMinutes(total: number) {
  const hours = Math.floor(total / 60)
  const minutes = total % 60
  const suffix = hours >= 12 ? 'PM' : 'AM'
  const displayHours = hours % 12 || 12
  return `${displayHours}:${String(minutes).padStart(2, '0')} ${suffix}`
}

export default async function ParticipantMeetingPage({ params }: { params: { code: string } }) {
  const supabase = createSupabaseAdminClient()
  const code = params.code.toUpperCase()
  const { data: meeting } = await supabase.from('meetings').select('id, title, description, location, meeting_type, timezone, slot_duration_minutes, day_start_minutes, day_end_minutes, status').eq('public_code', code).single()
  if (!meeting) notFound()
  const { data: dates } = await supabase.from('meeting_dates').select('id, meeting_date, display_order').eq('meeting_id', meeting.id).order('display_order')

  return (
    <main className="min-h-screen bg-lightBlue py-10 px-4"><div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between gap-4 mb-8"><Link href="/meet" className="font-bold text-darkNavy">ISIR Meet</Link><span className="rounded-full bg-white border border-softGray px-4 py-2 text-xs font-bold text-gray-600">Code: {code}</span></div>
      <section className="bg-white rounded-[2rem] border border-softGray shadow-sm overflow-hidden">
        <div className="p-7 md:p-10 border-b border-softGray"><p className="text-primaryGreen uppercase tracking-[0.18em] text-xs font-bold mb-3">Availability request</p><h1 className="text-4xl md:text-5xl font-bold text-darkNavy mb-4">{meeting.title}</h1>{meeting.description && <p className="text-charcoal text-lg leading-8 max-w-3xl">{meeting.description}</p>}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="rounded-2xl bg-lightBlue p-4"><CalendarDays className="text-primaryBlue mb-2" size={20} /><p className="text-xs text-gray-500 uppercase font-bold">Possible dates</p><p className="text-darkNavy font-bold mt-1">{dates?.length || 0} option{dates?.length === 1 ? '' : 's'}</p></div>
            <div className="rounded-2xl bg-lightGreen p-4"><Clock3 className="text-primaryGreen mb-2" size={20} /><p className="text-xs text-gray-500 uppercase font-bold">Time window</p><p className="text-darkNavy font-bold mt-1">{formatMinutes(meeting.day_start_minutes)} – {formatMinutes(meeting.day_end_minutes)}</p></div>
            <div className="rounded-2xl bg-gray-50 p-4"><MapPin className="text-darkNavy mb-2" size={20} /><p className="text-xs text-gray-500 uppercase font-bold">Format</p><p className="text-darkNavy font-bold mt-1 capitalize">{meeting.meeting_type}{meeting.location ? ` · ${meeting.location}` : ''}</p></div>
          </div>
        </div>
        <div className="p-7 md:p-10">{meeting.status !== 'open' ? <div className="rounded-2xl bg-gray-50 border border-softGray p-6"><h2 className="text-xl font-bold text-darkNavy mb-2">Responses are currently closed.</h2><p className="text-charcoal">The organizer is no longer collecting availability for this meeting.</p></div> : <><div className="mb-6"><h2 className="text-2xl font-bold text-darkNavy mb-2">When can you attend?</h2><p className="text-charcoal">Mark each time that works for you. Times are shown in {meeting.timezone}.</p></div><AvailabilityGrid code={code} dates={dates || []} dayStartMinutes={meeting.day_start_minutes} dayEndMinutes={meeting.day_end_minutes} slotDuration={meeting.slot_duration_minutes} /></>}</div>
      </section>
    </div></main>
  )
}
