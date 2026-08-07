'use client'

import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function ConfirmMeetingButton({ code, organizerToken, meetingDateId, startMinutes, disabled = false }: { code: string; organizerToken: string; meetingDateId: string; startMinutes: number; disabled?: boolean }) {
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function confirmMeeting() {
    const approved = window.confirm('Confirm this as the final meeting time? Participants will no longer be able to submit availability.')
    if (!approved) return

    setSaving(true)
    setError('')
    try {
      const response = await fetch(`/api/meetings/${code}/confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organizerToken, meetingDateId, startMinutes }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Unable to confirm meeting.')
      window.location.reload()
    } catch (confirmationError) {
      setError(confirmationError instanceof Error ? confirmationError.message : 'Unable to confirm meeting.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-col items-start md:items-end gap-2">
      <button type="button" disabled={disabled || saving} onClick={confirmMeeting} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primaryGreen text-white px-4 py-2.5 text-sm font-bold disabled:opacity-50">
        <CheckCircle2 size={17} /> {saving ? 'Confirming…' : 'Confirm this time'}
      </button>
      {error && <p className="text-xs text-red-600 max-w-56">{error}</p>}
    </div>
  )
}
