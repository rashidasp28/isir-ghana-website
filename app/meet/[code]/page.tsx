import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import { createSupabaseAdminClient } from '@/lib/supabase/server'

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

  const { data: meeting } = await supabase
    .from('meetings')
    .select('id, title, description, location, meeting_type, timezone, slot_duration_minutes, day_start_minutes, day_end_minutes, status')
    .eq('public_code', code)
    .single()

  if (!meeting) notFound()

  const { data: dates } = await supabase
    .from('meeting_dates')
    .select('id, meeting_date, display_order')
    .eq('meeting_id', meeting.id)
    .order('display_order')

  return (
    <main className="min-h-screen bg-lightBlue py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link href="/meet" className="font-bold text-darkNavy">ISIR Meet</Link>
          <span className="rounded-full bg-white border border-softGray px-4 py-2 text-xs font-bold text-gray-600">Code: {code}</span>
        </div>

        <section className="bg-white rounded-[2rem] border border-softGray shadow-sm overflow-hidden">
          <div className="p-7 md:p-10 border-b border-softGray">
            <p className="text-primaryGreen uppercase tracking-[0.18em] text-xs font-bold mb-3">Availability request</p>
            <h1 className="text-4xl md:text-5xl font-bold text-darkNavy mb-4">{meeting.title}</h1>
            {meeting.description && <p className="text-charcoal text-lg leading-8 max-w-3xl">{meeting.description}</p>}

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-2xl bg-lightBlue p-4">
                <CalendarDays className="text-primaryBlue mb-2" size={20} />
                <p className="text-xs text-gray-500 uppercase font-bold">Possible dates</p>
                <p className="text-darkNavy font-bold mt-1">{dates?.length || 0} option{dates?.length === 1 ? '' : 's'}</p>
              </div>
              <div className="rounded-2xl bg-lightGreen p-4">
                <Clock3 className="text-primaryGreen mb-2" size={20} />
                <p className="text-xs text-gray-500 uppercase font-bold">Time window</p>
                <p className="text-darkNavy font-bold mt-1">{formatMinutes(meeting.day_start_minutes)} – {formatMinutes(meeting.day_end_minutes)}</p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-4">
                <MapPin className="text-darkNavy mb-2" size={20} />
                <p className="text-xs text-gray-500 uppercase font-bold">Format</p>
                <p className="text-darkNavy font-bold mt-1 capitalize">{meeting.meeting_type}{meeting.location ? ` · ${meeting.location}` : ''}</p>
              </div>
            </div>
          </div>

          <div className="p-7 md:p-10">
            {meeting.status !== 'open' ? (
              <div className="rounded-2xl bg-gray-50 border border-softGray p-6">
                <h2 className="text-xl font-bold text-darkNavy mb-2">Responses are currently closed.</h2>
                <p className="text-charcoal">The organizer is no longer collecting availability for this meeting.</p>
              </div>
            ) : (
              <div className="rounded-2xl border-2 border-dashed border-softGray p-7 text-center">
                <h2 className="text-2xl font-bold text-darkNavy mb-3">Availability grid is the next build stage.</h2>
                <p className="text-charcoal max-w-2xl mx-auto leading-7">This meeting has been saved successfully. The interactive click-and-drag availability experience will appear here in the next implementation milestone.</p>
                <p className="text-sm text-gray-500 mt-4">Timezone: {meeting.timezone} · {meeting.slot_duration_minutes}-minute slots</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
