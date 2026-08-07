'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LockKeyhole, RotateCcw } from 'lucide-react'

type Props = {
  code: string
  organizerToken: string
  status: string
}

export default function MeetingStatusControls({ code, organizerToken, status }: Props) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function updateStatus(nextStatus: 'open' | 'closed') {
    setSaving(true)
    setError('')
    try {
      const response = await fetch(`/api/meetings/${code}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organizerToken, status: nextStatus }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Unable to update meeting status.')
      router.refresh()
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : 'Unable to update meeting status.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {status === 'open' ? (
          <button type="button" disabled={saving} onClick={() => updateStatus('closed')} className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 font-bold text-darkNavy disabled:opacity-60">
            <LockKeyhole size={17} /> Close responses
          </button>
        ) : (
          <button type="button" disabled={saving} onClick={() => updateStatus('open')} className="inline-flex items-center gap-2 rounded-xl border border-primaryGreen bg-white px-4 py-2.5 font-bold text-darkNavy disabled:opacity-60">
            <RotateCcw size={17} /> {status === 'confirmed' ? 'Reopen scheduling' : 'Reopen responses'}
          </button>
        )}
      </div>
      {error && <p className="mt-2 text-sm text-red-700">{error}</p>}
    </div>
  )
}
