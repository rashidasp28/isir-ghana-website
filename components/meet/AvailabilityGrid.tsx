'use client'

import { FormEvent, useMemo, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

type MeetingDate = { id: string; meeting_date: string; display_order: number }
type ResponseValue = 'available' | 'maybe' | 'unavailable'

type Props = {
  code: string
  dates: MeetingDate[]
  dayStartMinutes: number
  dayEndMinutes: number
  slotDuration: number
}

function formatTime(total: number) {
  const hours = Math.floor(total / 60)
  const minutes = total % 60
  const suffix = hours >= 12 ? 'PM' : 'AM'
  return `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${suffix}`
}

const states: ResponseValue[] = ['available', 'maybe', 'unavailable']
const stateClasses: Record<ResponseValue, string> = {
  available: 'bg-green-600 text-white border-green-600',
  maybe: 'bg-amber-400 text-darkNavy border-amber-400',
  unavailable: 'bg-gray-200 text-gray-500 border-gray-300',
}

export default function AvailabilityGrid({ code, dates, dayStartMinutes, dayEndMinutes, slotDuration }: Props) {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [selections, setSelections] = useState<Record<string, ResponseValue>>({})
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [saved, setSaved] = useState(false)

  const times = useMemo(() => {
    const values: number[] = []
    for (let minute = dayStartMinutes; minute < dayEndMinutes; minute += slotDuration) values.push(minute)
    return values
  }, [dayStartMinutes, dayEndMinutes, slotDuration])

  function cycle(dateId: string, minute: number) {
    const key = `${dateId}:${minute}`
    setSelections((current) => {
      const existing = current[key]
      const next = existing ? states[(states.indexOf(existing) + 1) % states.length] : 'available'
      return { ...current, [key]: next }
    })
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    setError('')
    setSaving(true)
    try {
      const slots = Object.entries(selections).map(([key, response]) => {
        const [meetingDateId, minute] = key.split(':')
        return { meetingDateId, startMinutes: Number(minute), response }
      })
      const response = await fetch(`/api/meetings/${code}/availability`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ displayName, email, slots }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Unable to save availability.')
      setSaved(true)
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to save availability.')
    } finally { setSaving(false) }
  }

  if (saved) return (
    <div className="rounded-3xl bg-lightGreen border border-green-200 p-8 text-center">
      <CheckCircle2 className="mx-auto text-primaryGreen mb-4" size={42} />
      <h2 className="text-2xl font-bold text-darkNavy mb-2">Availability submitted</h2>
      <p className="text-charcoal">Thank you. The organizer can now include your response when choosing the best meeting time.</p>
    </div>
  )

  return (
    <form onSubmit={submit}>
      <div className="grid md:grid-cols-2 gap-4 mb-7">
        <label><span className="block text-sm font-bold text-darkNavy mb-2">Your name</span><input required minLength={2} maxLength={80} value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="w-full rounded-xl border border-softGray px-4 py-3" placeholder="Full name" /></label>
        <label><span className="block text-sm font-bold text-darkNavy mb-2">Email <span className="font-normal text-gray-500">(optional)</span></span><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-softGray px-4 py-3" placeholder="name@example.com" /></label>
      </div>

      <div className="flex flex-wrap gap-4 text-xs font-semibold mb-4">
        <span><i className="inline-block w-3 h-3 rounded bg-green-600 mr-1" /> Available</span>
        <span><i className="inline-block w-3 h-3 rounded bg-amber-400 mr-1" /> Maybe</span>
        <span><i className="inline-block w-3 h-3 rounded bg-gray-200 border mr-1" /> Unavailable</span>
        <span className="text-gray-500">Tap a cell repeatedly to change its status.</span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-softGray">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead><tr className="bg-gray-50"><th className="sticky left-0 bg-gray-50 z-10 p-3 text-left text-darkNavy">Time</th>{dates.map((date) => <th key={date.id} className="p-3 min-w-[130px] text-darkNavy"><span className="block">{new Date(`${date.meeting_date}T12:00:00`).toLocaleDateString(undefined, { weekday: 'short' })}</span><span className="font-normal text-gray-500">{new Date(`${date.meeting_date}T12:00:00`).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span></th>)}</tr></thead>
          <tbody>{times.map((minute) => <tr key={minute} className="border-t border-softGray"><th className="sticky left-0 bg-white z-10 p-3 text-left whitespace-nowrap text-gray-600">{formatTime(minute)}</th>{dates.map((date) => { const key = `${date.id}:${minute}`; const value = selections[key]; return <td key={key} className="p-1.5"><button type="button" aria-label={`${formatTime(minute)} ${date.meeting_date}: ${value || 'not selected'}`} onClick={() => cycle(date.id, minute)} className={`w-full min-h-10 rounded-lg border transition ${value ? stateClasses[value] : 'bg-white border-gray-200 hover:border-primaryGreen'}`}>{value === 'available' ? '✓' : value === 'maybe' ? '?' : value === 'unavailable' ? '×' : ''}</button></td> })}</tr>)}</tbody>
        </table>
      </div>

      {error && <div className="mt-5 rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3">{error}</div>}
      <button disabled={saving} className="mt-6 w-full md:w-auto rounded-xl bg-primaryGreen text-white px-8 py-3.5 font-bold disabled:opacity-60">{saving ? 'Saving…' : 'Submit my availability'}</button>
    </form>
  )
}
