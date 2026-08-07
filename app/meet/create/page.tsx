'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CalendarDays, Check, Clock3, Copy, Link2, MapPin, Users } from 'lucide-react'

const durationOptions = [15, 30, 45, 60, 90, 120]
const timezoneOptions = [
  'Africa/Accra',
  'Africa/Lagos',
  'Africa/Nairobi',
  'Europe/London',
  'Europe/Paris',
  'America/New_York',
  'America/Chicago',
  'America/Los_Angeles',
  'Asia/Dubai',
]

type CreatedMeeting = {
  meetingCode: string
  participantUrl: string
  organizerUrl: string
}

export default function CreateMeetingPage() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [meetingType, setMeetingType] = useState('online')
  const [location, setLocation] = useState('')
  const [timezone, setTimezone] = useState('Africa/Accra')
  const [slotDuration, setSlotDuration] = useState(30)
  const [dayStart, setDayStart] = useState('08:00')
  const [dayEnd, setDayEnd] = useState('17:00')
  const [dates, setDates] = useState<string[]>([])
  const [dateInput, setDateInput] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [createdMeeting, setCreatedMeeting] = useState<CreatedMeeting | null>(null)
  const [copied, setCopied] = useState<'participant' | 'organizer' | null>(null)

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), [])

  function addDate() {
    if (!dateInput || dates.includes(dateInput) || dates.length >= 14) return
    setDates((current) => [...current, dateInput].sort())
    setDateInput('')
  }

  function removeDate(date: string) {
    setDates((current) => current.filter((item) => item !== date))
  }

  async function copyLink(type: 'participant' | 'organizer', value: string) {
    await navigator.clipboard.writeText(value)
    setCopied(type)
    window.setTimeout(() => setCopied(null), 1800)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (dates.length === 0) {
      setError('Add at least one possible meeting date.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/meetings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          meetingType,
          location,
          timezone,
          slotDuration,
          dayStart,
          dayEnd,
          dates,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Unable to create meeting.')
      }

      setCreatedMeeting(result)
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to create meeting.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (createdMeeting) {
    return (
      <main className="min-h-screen bg-lightBlue py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/meet" className="inline-flex items-center gap-2 text-darkNavy font-semibold mb-8">
            <ArrowLeft size={18} /> Back to ISIR Meet
          </Link>

          <section className="bg-white rounded-[2rem] border border-softGray shadow-sm p-8 md:p-12">
            <div className="w-14 h-14 rounded-full bg-lightGreen flex items-center justify-center text-primaryGreen mb-6">
              <Check size={28} />
            </div>
            <p className="text-primaryGreen uppercase tracking-[0.2em] text-sm font-bold mb-3">Meeting created</p>
            <h1 className="text-4xl md:text-5xl font-bold text-darkNavy mb-4">Your scheduling page is ready.</h1>
            <p className="text-charcoal text-lg leading-8 mb-8">
              Share the participant link with everyone you want to invite. Keep the organizer link private because it will control the meeting.
            </p>

            <div className="space-y-5">
              <div className="rounded-2xl border border-softGray p-5">
                <div className="flex items-center gap-2 text-darkNavy font-bold mb-2"><Users size={18} /> Participant link</div>
                <div className="flex flex-col md:flex-row gap-3">
                  <input readOnly value={createdMeeting.participantUrl} className="flex-1 rounded-xl border border-softGray bg-gray-50 px-4 py-3 text-sm" />
                  <button type="button" onClick={() => copyLink('participant', createdMeeting.participantUrl)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primaryGreen text-white px-5 py-3 font-semibold">
                    {copied === 'participant' ? <Check size={18} /> : <Copy size={18} />}
                    {copied === 'participant' ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-softGray p-5">
                <div className="flex items-center gap-2 text-darkNavy font-bold mb-2"><Link2 size={18} /> Organizer link</div>
                <div className="flex flex-col md:flex-row gap-3">
                  <input readOnly value={createdMeeting.organizerUrl} className="flex-1 rounded-xl border border-softGray bg-gray-50 px-4 py-3 text-sm" />
                  <button type="button" onClick={() => copyLink('organizer', createdMeeting.organizerUrl)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-darkNavy text-white px-5 py-3 font-semibold">
                    {copied === 'organizer' ? <Check size={18} /> : <Copy size={18} />}
                    {copied === 'organizer' ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6">Meeting code: {createdMeeting.meetingCode}</p>
          </section>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-lightBlue py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/meet" className="inline-flex items-center gap-2 text-darkNavy font-semibold mb-8">
          <ArrowLeft size={18} /> Back to ISIR Meet
        </Link>

        <div className="grid lg:grid-cols-[1fr_280px] gap-8 items-start">
          <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] border border-softGray shadow-sm p-7 md:p-10 space-y-8">
            <div>
              <p className="text-primaryGreen uppercase tracking-[0.2em] text-sm font-bold mb-3">Create a meeting</p>
              <h1 className="text-4xl font-bold text-darkNavy mb-3">Find a time that works for everyone.</h1>
              <p className="text-charcoal leading-7">Set the possible dates and hours. Participants will mark their availability from the link you share.</p>
            </div>

            {error && <div className="rounded-2xl border border-red-200 bg-red-50 text-red-700 px-5 py-4">{error}</div>}

            <div className="space-y-5">
              <label className="block">
                <span className="block text-sm font-bold text-darkNavy mb-2">Meeting title</span>
                <input required minLength={3} maxLength={120} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. ISIR Ghana Executive Meeting" className="w-full rounded-xl border border-softGray px-4 py-3.5 outline-none focus:border-primaryBlue" />
              </label>

              <label className="block">
                <span className="block text-sm font-bold text-darkNavy mb-2">Description <span className="font-normal text-gray-500">(optional)</span></span>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} placeholder="What will this meeting cover?" className="w-full rounded-xl border border-softGray px-4 py-3.5 outline-none focus:border-primaryBlue" />
              </label>
            </div>

            <section>
              <div className="flex items-center gap-2 mb-4 text-darkNavy"><MapPin size={20} /><h2 className="font-bold text-xl">Meeting format</h2></div>
              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                {['online', 'physical', 'hybrid'].map((type) => (
                  <button key={type} type="button" onClick={() => setMeetingType(type)} className={`rounded-xl border px-4 py-3 font-semibold capitalize ${meetingType === type ? 'border-primaryGreen bg-lightGreen text-darkNavy' : 'border-softGray text-charcoal'}`}>
                    {type}
                  </button>
                ))}
              </div>
              <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder={meetingType === 'online' ? 'Meeting platform or link can be added later' : 'Location or venue'} className="w-full rounded-xl border border-softGray px-4 py-3.5 outline-none focus:border-primaryBlue" />
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4 text-darkNavy"><CalendarDays size={20} /><h2 className="font-bold text-xl">Possible dates</h2></div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input type="date" min={minDate} value={dateInput} onChange={(e) => setDateInput(e.target.value)} className="flex-1 rounded-xl border border-softGray px-4 py-3.5" />
                <button type="button" onClick={addDate} className="rounded-xl border border-darkNavy text-darkNavy px-5 py-3.5 font-bold">Add date</button>
              </div>
              <p className="text-xs text-gray-500 mt-2">Choose up to 14 dates.</p>
              {dates.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {dates.map((date) => (
                    <button key={date} type="button" onClick={() => removeDate(date)} className="rounded-full bg-lightGreen text-darkNavy px-4 py-2 text-sm font-semibold">
                      {new Date(`${date}T12:00:00`).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })} ×
                    </button>
                  ))}
                </div>
              )}
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4 text-darkNavy"><Clock3 size={20} /><h2 className="font-bold text-xl">Time options</h2></div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <label>
                  <span className="block text-sm font-bold text-darkNavy mb-2">Earliest time</span>
                  <input type="time" required value={dayStart} onChange={(e) => setDayStart(e.target.value)} className="w-full rounded-xl border border-softGray px-4 py-3.5" />
                </label>
                <label>
                  <span className="block text-sm font-bold text-darkNavy mb-2">Latest time</span>
                  <input type="time" required value={dayEnd} onChange={(e) => setDayEnd(e.target.value)} className="w-full rounded-xl border border-softGray px-4 py-3.5" />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <label>
                  <span className="block text-sm font-bold text-darkNavy mb-2">Meeting duration</span>
                  <select value={slotDuration} onChange={(e) => setSlotDuration(Number(e.target.value))} className="w-full rounded-xl border border-softGray px-4 py-3.5 bg-white">
                    {durationOptions.map((duration) => <option key={duration} value={duration}>{duration} minutes</option>)}
                  </select>
                </label>
                <label>
                  <span className="block text-sm font-bold text-darkNavy mb-2">Timezone</span>
                  <select value={timezone} onChange={(e) => setTimezone(e.target.value)} className="w-full rounded-xl border border-softGray px-4 py-3.5 bg-white">
                    {timezoneOptions.map((zone) => <option key={zone} value={zone}>{zone}</option>)}
                  </select>
                </label>
              </div>
            </section>

            <button disabled={isSubmitting} className="w-full rounded-2xl bg-primaryGreen text-white px-6 py-4 text-lg font-bold hover:opacity-90 disabled:opacity-60">
              {isSubmitting ? 'Creating meeting…' : 'Create meeting and get share link'}
            </button>
          </form>

          <aside className="bg-darkNavy text-white rounded-[2rem] p-7 lg:sticky lg:top-24">
            <p className="text-lightGreen uppercase tracking-[0.16em] text-xs font-bold mb-4">What happens next</p>
            <ol className="space-y-5 text-sm leading-6">
              <li><strong className="block text-base mb-1">1. Create</strong>ISIR Meet generates a secure meeting page.</li>
              <li><strong className="block text-base mb-1">2. Share</strong>Send one participant link to your team or partners.</li>
              <li><strong className="block text-base mb-1">3. Compare</strong>Availability will be combined into a simple heat map.</li>
              <li><strong className="block text-base mb-1">4. Confirm</strong>The organizer selects the strongest meeting time.</li>
            </ol>
          </aside>
        </div>
      </div>
    </main>
  )
}
