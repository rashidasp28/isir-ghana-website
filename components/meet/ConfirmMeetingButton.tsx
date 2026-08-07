'use client'

import { useState } from 'react'
import { CheckCircle2, Link2 } from 'lucide-react'

export default function ConfirmMeetingButton({ code, organizerToken, meetingDateId, startMinutes, disabled = false }: { code: string; organizerToken: string; meetingDateId: string; startMinutes: number; disabled?: boolean }) {
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [meetingLink, setMeetingLink] = useState('')
  const [showForm, setShowForm] = useState(false)

  async function confirmMeeting() {
    if (!/^https?:\/\//i.test(meetingLink.trim())) {
      setError('Enter a valid meeting link beginning with http:// or https://.')
      return
    }

    const approved = window.confirm('Confirm this as the final meeting time and notify all registered participants?')
    if (!approved) return

    setSaving(true)
    setError('')
    try {
      const response = await fetch(`/api/meetings/${code}/confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organizerToken, meetingDateId, startMinutes, meetingLink: meetingLink.trim() }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Unable to confirm meeting.')
      if (result.notificationWarning) window.alert(result.notificationWarning)
      window.location.reload()
    } catch (confirmationError) {
      setError(confirmationError instanceof Error ? confirmationError.message : 'Unable to confirm meeting.')
    } finally {
      setSaving(false)
    }
  }

  if (!showForm) {
    return (
      <button type="button" disabled={disabled} onClick={() => setShowForm(true)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primaryGreen text-white px-4 py-2.5 text-sm font-bold disabled:opacity-50">
        <CheckCircle2 size={17} /> Confirm this time
      </button>
    )
  }

  return (
    <div className="w-full md:w-80 space-y-2">
      <label className="block text-xs font-bold text-darkNavy">Meeting link</label>
      <div className="relative">
        <Link2 size={16} className="absolute left-3 top-3.5 text-gray-400" />
        <input type="url" required value={meetingLink} onChange={(event) => setMeetingLink(event.target.value)} placeholder="https://meet.google.com/..." className="w-full rounded-xl border border-softGray pl-9 pr-3 py-3 text-sm" />
      </div>
      <div className="flex gap-2">
        <button type="button" disabled={saving} onClick={confirmMeeting} className="flex-1 rounded-xl bg-primaryGreen text-white px-4 py-2.5 text-sm font-bold disabled:opacity-50">{saving ? 'Confirming…' : 'Confirm & notify'}</button>
        <button type="button" disabled={saving} onClick={() => { setShowForm(false); setError('') }} className="rounded-xl border border-softGray px-3 py-2.5 text-sm font-semibold">Cancel</button>
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}
