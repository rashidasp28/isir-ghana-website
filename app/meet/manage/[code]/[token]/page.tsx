import Link from 'next/link'
import { createHash } from 'crypto'
import { notFound } from 'next/navigation'
import { CalendarDays, Copy, ShieldCheck, Users } from 'lucide-react'
import { createSupabaseAdminClient } from '@/lib/supabase/server'

function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

export default async function OrganizerMeetingPage({ params }: { params: { code: string; token: string } }) {
  const supabase = createSupabaseAdminClient()
  const code = params.code.toUpperCase()
  const tokenHash = hashToken(params.token)

  const { data: meeting } = await supabase
    .from('meetings')
    .select('id, title, public_code, status, timezone, slot_duration_minutes, created_at')
    .eq('public_code', code)
    .eq('organizer_token_hash', tokenHash)
    .single()

  if (!meeting) notFound()

  const [{ count: participantCount }, { data: dates }] = await Promise.all([
    supabase.from('participants').select('*', { count: 'exact', head: true }).eq('meeting_id', meeting.id),
    supabase.from('meeting_dates').select('meeting_date, display_order').eq('meeting_id', meeting.id).order('display_order'),
  ])

  return (
    <main className="min-h-screen bg-lightBlue py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link href="/meet" className="font-bold text-darkNavy">ISIR Meet</Link>
            <p className="text-sm text-gray-500 mt-1">Organizer dashboard</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-lightGreen text-darkNavy px-4 py-2 text-sm font-bold">
            <ShieldCheck size={17} className="text-primaryGreen" /> Private organizer access
          </div>
        </div>

        <section className="bg-white rounded-[2rem] border border-softGray shadow-sm p-7 md:p-10 mb-7">
          <p className="text-primaryGreen uppercase tracking-[0.18em] text-xs font-bold mb-3">Manage meeting</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-darkNavy mb-3">{meeting.title}</h1>
              <p className="text-charcoal">Meeting code: <strong>{meeting.public_code}</strong> · Status: <strong className="capitalize">{meeting.status}</strong></p>
            </div>
            <Link href={`/meet/${meeting.public_code}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-darkNavy text-white px-5 py-3 font-bold">
              View participant page
            </Link>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-5 mb-7">
          <div className="bg-white rounded-2xl border border-softGray p-6">
            <Users className="text-primaryBlue mb-3" size={24} />
            <p className="text-sm text-gray-500 font-semibold">Responses</p>
            <p className="text-3xl font-bold text-darkNavy mt-1">{participantCount || 0}</p>
          </div>
          <div className="bg-white rounded-2xl border border-softGray p-6">
            <CalendarDays className="text-primaryGreen mb-3" size={24} />
            <p className="text-sm text-gray-500 font-semibold">Possible dates</p>
            <p className="text-3xl font-bold text-darkNavy mt-1">{dates?.length || 0}</p>
          </div>
          <div className="bg-white rounded-2xl border border-softGray p-6">
            <Copy className="text-darkNavy mb-3" size={24} />
            <p className="text-sm text-gray-500 font-semibold">Availability slot size</p>
            <p className="text-3xl font-bold text-darkNavy mt-1">{meeting.slot_duration_minutes}<span className="text-base ml-1">min</span></p>
          </div>
        </div>

        <section className="bg-white rounded-[2rem] border border-softGray shadow-sm p-7 md:p-10">
          <h2 className="text-2xl font-bold text-darkNavy mb-3">Response heat map</h2>
          <p className="text-charcoal leading-7 mb-6">As participants submit their availability, this dashboard will rank the strongest meeting times and show conflicts across the selected dates.</p>
          <div className="rounded-2xl border-2 border-dashed border-softGray p-8 text-center">
            <p className="font-bold text-darkNavy">Waiting for participant availability.</p>
            <p className="text-sm text-gray-500 mt-2">The interactive participant grid and aggregation engine are the next implementation milestone.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
