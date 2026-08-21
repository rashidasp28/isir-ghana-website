import Link from 'next/link'
import { createHash } from 'crypto'
import { notFound } from 'next/navigation'
import { CalendarDays, Clock3, Download, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { createSupabaseAdminClient } from '@/lib/supabase/server'
import ConfirmMeetingButton from '@/components/meet/ConfirmMeetingButton'
import MeetingStatusControls from '@/components/meet/MeetingStatusControls'

type MeetingDateRow = { id: string; meeting_date: string; display_order: number }
type ParticipantRow = { id: string; display_name: string }
type AvailabilitySlotRow = { participant_id: string; meeting_date_id: string; start_minutes: number; response: 'available' | 'maybe' | 'unavailable' }
type RankedSlot = { dateId: string; minute: number; available: number; maybe: number; unavailable: number }
type ConfirmedSlotRow = { meeting_date_id: string; start_minutes: number; end_minutes: number }

function hashToken(token: string) { return createHash('sha256').update(token).digest('hex') }
function formatTime(total: number) {
  const hours = Math.floor(total / 60)
  const minutes = total % 60
  const suffix = hours >= 12 ? 'PM' : 'AM'
  return `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${suffix}`
}

export default async function OrganizerMeetingPage({ params }: { params: { code: string; token: string } }) {
  const supabase = createSupabaseAdminClient()
  const code = params.code.toUpperCase()
  const tokenHash = hashToken(params.token)

  const { data: meeting } = await supabase.from('meetings').select('id, title, public_code, status, timezone, slot_duration_minutes, day_start_minutes, day_end_minutes, created_at').eq('public_code', code).eq('organizer_token_hash', tokenHash).single()
  if (!meeting) notFound()

  const [{ count: participantCount }, { data: datesData }, { data: participantsData }, { data: confirmedData }] = await Promise.all([
    supabase.from('participants').select('*', { count: 'exact', head: true }).eq('meeting_id', meeting.id),
    supabase.from('meeting_dates').select('id, meeting_date, display_order').eq('meeting_id', meeting.id).order('display_order'),
    supabase.from('participants').select('id, display_name').eq('meeting_id', meeting.id).order('submitted_at'),
    supabase.from('confirmed_slots').select('meeting_date_id, start_minutes, end_minutes').eq('meeting_id', meeting.id).maybeSingle(),
  ])

  const dates = (datesData || []) as MeetingDateRow[]
  const participants = (participantsData || []) as ParticipantRow[]
  const confirmed = confirmedData as ConfirmedSlotRow | null
  const participantIds = participants.map((participant) => participant.id)
  let slots: AvailabilitySlotRow[] = []

  if (participantIds.length > 0) {
    const { data: slotData } = await supabase.from('availability_slots').select('participant_id, meeting_date_id, start_minutes, response').in('participant_id', participantIds)
    slots = (slotData || []) as AvailabilitySlotRow[]
  }

  const dateMap = new Map<string, string>()
  for (const date of dates) dateMap.set(date.id, date.meeting_date)

  const scoreMap = new Map<string, RankedSlot>()
  for (const slot of slots) {
    const key = `${slot.meeting_date_id}:${slot.start_minutes}`
    const current = scoreMap.get(key) || { dateId: slot.meeting_date_id, minute: slot.start_minutes, available: 0, maybe: 0, unavailable: 0 }
    if (slot.response === 'available') current.available += 1
    if (slot.response === 'maybe') current.maybe += 1
    if (slot.response === 'unavailable') current.unavailable += 1
    scoreMap.set(key, current)
  }

  const ranked = Array.from(scoreMap.values()).sort((first, second) => {
    const secondScore = second.available * 2 + second.maybe
    const firstScore = first.available * 2 + first.maybe
    if (secondScore !== firstScore) return secondScore - firstScore
    return first.unavailable - second.unavailable
  }).slice(0, 5)

  const best = ranked.length > 0 ? ranked[0] : null
  const formatDate = (dateId: string) => {
    const dateValue = dateMap.get(dateId)
    if (!dateValue) return 'Unknown date'
    return new Date(`${dateValue}T12:00:00`).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })
  }

  return (
    <main className="min-h-screen bg-lightBlue py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div><Link href="/meet" className="font-bold text-darkNavy">ISIR Meet</Link><p className="text-sm text-gray-500 mt-1">Organizer dashboard</p></div>
          <div className="inline-flex items-center gap-2 rounded-full bg-lightGreen text-darkNavy px-4 py-2 text-sm font-bold"><ShieldCheck size={17} className="text-primaryGreen" /> Private organizer access</div>
        </div>

        <section className="bg-white rounded-[2rem] border border-softGray shadow-sm p-7 md:p-10 mb-7">
          <p className="text-primaryGreen uppercase tracking-[0.18em] text-xs font-bold mb-3">Manage meeting</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div><h1 className="text-4xl md:text-5xl font-bold text-darkNavy mb-3">{meeting.title}</h1><p className="text-charcoal">Meeting code: <strong>{meeting.public_code}</strong> · Status: <strong className="capitalize">{meeting.status}</strong></p></div>
            <div className="flex flex-wrap gap-3"><MeetingStatusControls code={meeting.public_code} organizerToken={params.token} status={meeting.status} /><Link href={`/meet/${meeting.public_code}`} className="inline-flex items-center justify-center rounded-xl bg-darkNavy text-white px-5 py-3 font-bold">View participant page</Link></div>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-5 mb-7">
          <div className="bg-white rounded-2xl border border-softGray p-6"><Users className="text-primaryBlue mb-3" size={24} /><p className="text-sm text-gray-500 font-semibold">Responses</p><p className="text-3xl font-bold text-darkNavy mt-1">{participantCount || 0}</p></div>
          <div className="bg-white rounded-2xl border border-softGray p-6"><CalendarDays className="text-primaryGreen mb-3" size={24} /><p className="text-sm text-gray-500 font-semibold">Possible dates</p><p className="text-3xl font-bold text-darkNavy mt-1">{dates.length}</p></div>
          <div className="bg-white rounded-2xl border border-softGray p-6"><Clock3 className="text-darkNavy mb-3" size={24} /><p className="text-sm text-gray-500 font-semibold">Slot size</p><p className="text-3xl font-bold text-darkNavy mt-1">{meeting.slot_duration_minutes}<span className="text-base ml-1">min</span></p></div>
        </div>

        {confirmed ? (
          <section className="rounded-[2rem] bg-lightGreen border border-green-200 p-7 md:p-9 mb-7">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="flex gap-4"><Sparkles className="text-primaryGreen shrink-0" /><div><p className="text-xs uppercase tracking-[0.18em] font-bold text-primaryGreen mb-2">Meeting confirmed</p><h2 className="text-2xl font-bold text-darkNavy">{formatDate(confirmed.meeting_date_id)} at {formatTime(confirmed.start_minutes)}</h2><p className="text-charcoal mt-2">Ends at {formatTime(confirmed.end_minutes)} · {meeting.timezone}</p></div></div>
              <a href={`/api/meetings/${meeting.public_code}/calendar`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-darkNavy text-white px-5 py-3 font-bold"><Download size={18} /> Add to calendar</a>
            </div>
          </section>
        ) : best ? (
          <section className="rounded-[2rem] bg-lightGreen border border-green-200 p-7 md:p-9 mb-7">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="flex gap-4"><Sparkles className="text-primaryGreen shrink-0" /><div><p className="text-xs uppercase tracking-[0.18em] font-bold text-primaryGreen mb-2">Best current option</p><h2 className="text-2xl font-bold text-darkNavy">{formatDate(best.dateId)} at {formatTime(best.minute)}</h2><p className="text-charcoal mt-2">{best.available} available · {best.maybe} maybe · {best.unavailable} unavailable</p></div></div>
              {meeting.status === 'open' && <ConfirmMeetingButton code={meeting.public_code} organizerToken={params.token} meetingDateId={best.dateId} startMinutes={best.minute} />}
            </div>
          </section>
        ) : null}

        {participants.length > 0 && (
          <section className="bg-white rounded-[2rem] border border-softGray shadow-sm p-7 md:p-10 mb-7">
            <div className="flex items-center gap-3 mb-5">
              <Users className="text-primaryBlue" size={24} />
              <div>
                <h2 className="text-2xl font-bold text-darkNavy">Participants who responded</h2>
                <p className="text-charcoal mt-1">{participants.length} participant{participants.length === 1 ? '' : 's'} submitted availability.</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {participants.map((participant, index) => (
                <div key={participant.id} className="flex items-center gap-3 rounded-2xl bg-lightBlue border border-softGray px-4 py-3">
                  <div className="w-9 h-9 rounded-full bg-primaryGreen text-white flex items-center justify-center text-sm font-bold">{index + 1}</div>
                  <p className="font-semibold text-darkNavy">{participant.display_name}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="bg-white rounded-[2rem] border border-softGray shadow-sm p-7 md:p-10">
          <h2 className="text-2xl font-bold text-darkNavy mb-2">Top meeting times</h2>
          <p className="text-charcoal mb-6">Ranked primarily by confirmed availability, with maybe responses used as a secondary signal.</p>
          {ranked.length === 0 ? <div className="rounded-2xl border-2 border-dashed border-softGray p-8 text-center"><p className="font-bold text-darkNavy">Waiting for participant availability.</p></div> : <div className="space-y-3">{ranked.map((slot, index) => (
            <div key={`${slot.dateId}:${slot.minute}`} className="grid md:grid-cols-[50px_1fr_auto_auto] items-center gap-4 rounded-2xl border border-softGray p-4">
              <div className="w-10 h-10 rounded-full bg-lightBlue flex items-center justify-center font-bold text-darkNavy">{index + 1}</div>
              <div><p className="font-bold text-darkNavy">{formatDate(slot.dateId)} · {formatTime(slot.minute)}</p><p className="text-sm text-gray-500">{meeting.timezone}</p></div>
              <div className="flex gap-2 text-xs font-bold"><span className="rounded-full bg-green-100 text-green-800 px-3 py-1">{slot.available} yes</span><span className="rounded-full bg-amber-100 text-amber-800 px-3 py-1">{slot.maybe} maybe</span><span className="rounded-full bg-gray-100 text-gray-600 px-3 py-1">{slot.unavailable} no</span></div>
              {meeting.status === 'open' && <ConfirmMeetingButton code={meeting.public_code} organizerToken={params.token} meetingDateId={slot.dateId} startMinutes={slot.minute} />}
            </div>
          ))}</div>}
        </section>
      </div>
    </main>
  )
}
