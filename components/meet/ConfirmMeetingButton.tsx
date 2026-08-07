'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2, Link2, X } from 'lucide-react'

export default function ConfirmMeetingButton({ code, organizerToken, meetingDateId, startMinutes, disabled = false }: { code: string; organizerToken: string; meetingDateId: string; startMinutes: number; disabled?: boolean }) {
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [meetingLink, setMeetingLink] = useState('')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!showModal) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [showModal])

  function openModal() {
    setError('')
    setShowModal(true)
  }

  function closeModal() {
    if (saving) return
    setShowModal(false)
    setError('')
  }

  async function confirmMeeting() {
    const normalizedLink = meetingLink.trim()
    if (!/^https?:\/\//i.test(normalizedLink)) {
      setError('Enter a valid meeting link beginning with http:// or https://.')
      return
    }

    setSaving(true)
    setError('')
    try {
      const response = await fetch(`/api/meetings/${code}/confirm`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organizerToken, meetingDateId, startMinutes, meetingLink: normalizedLink }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Unable to confirm meeting.')
      setShowModal(false)
      if (result.notificationWarning) window.alert(result.notificationWarning)
      window.location.reload()
    } catch (confirmationError) {
      setError(confirmationError instanceof Error ? confirmationError.message : 'Unable to confirm meeting.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <button type="button" disabled={disabled || saving} onClick={openModal} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primaryGreen text-white px-4 py-2.5 text-sm font-bold disabled:opacity-50">
        <CheckCircle2 size={17} /> Confirm this time
      </button>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="confirm-meeting-title" onMouseDown={(event) => { if (event.currentTarget === event.target) closeModal() }}>
          <div className="w-full max-w-lg rounded-[1.75rem] bg-white shadow-2xl border border-softGray p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <p className="text-primaryGreen uppercase tracking-[0.16em] text-xs font-bold mb-2">Finalize meeting</p>
                <h2 id="confirm-meeting-title" className="text-2xl font-bold text-darkNavy">Add the meeting link</h2>
                <p className="text-sm text-charcoal mt-2 leading-6">Paste the Google Meet, Zoom, Teams, or other joining link. When you confirm, the time will be locked and registered participants will be emailed.</p>
              </div>
              <button type="button" onClick={closeModal} disabled={saving} aria-label="Close" className="shrink-0 rounded-full p-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50"><X size={20} /></button>
            </div>

            <label className="block text-sm font-bold text-darkNavy mb-2" htmlFor={`meeting-link-${meetingDateId}-${startMinutes}`}>Meeting link</label>
            <div className="relative">
              <Link2 size={17} className="absolute left-3.5 top-4 text-gray-400" />
              <input id={`meeting-link-${meetingDateId}-${startMinutes}`} autoFocus type="url" inputMode="url" required value={meetingLink} onChange={(event) => setMeetingLink(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') { event.preventDefault(); void confirmMeeting() } }} placeholder="https://meet.google.com/..." className="w-full rounded-xl border border-softGray pl-10 pr-4 py-3.5 text-sm outline-none focus:border-primaryGreen" />
            </div>

            {error && <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</div>}

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3 mt-6">
              <button type="button" disabled={saving} onClick={closeModal} className="rounded-xl border border-softGray px-5 py-3 font-semibold text-darkNavy disabled:opacity-50">Cancel</button>
              <button type="button" disabled={saving || !meetingLink.trim()} onClick={() => void confirmMeeting()} className="inline-flex items-center justify-center gap-2 rounded-xl bg-primaryGreen text-white px-5 py-3 font-bold disabled:opacity-50">
                <CheckCircle2 size={18} /> {saving ? 'Confirming & notifying…' : 'Confirm & notify participants'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
