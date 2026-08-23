import { createHash } from 'crypto'
import { NextResponse } from 'next/server'
import { createSupabaseAdminClient } from '@/lib/supabase/server'

type AllowedStatus = 'open' | 'closed'

function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

export async function POST(request: Request, { params }: { params: Promise<{ code: string }> }) {
  try {
    const body = (await request.json()) as Record<string, unknown>
    const organizerToken = typeof body.organizerToken === 'string' ? body.organizerToken : ''
    const status = body.status === 'open' || body.status === 'closed' ? body.status as AllowedStatus : null

    if (!organizerToken || !status) {
      return NextResponse.json({ error: 'Invalid meeting status request.' }, { status: 400 })
    }

    const supabase = createSupabaseAdminClient()
    const { code: rawCode } = await params
    const code = rawCode.toUpperCase()
    const tokenHash = hashToken(organizerToken)

    const { data: meeting } = await supabase
      .from('meetings')
      .select('id, status')
      .eq('public_code', code)
      .eq('organizer_token_hash', tokenHash)
      .single()

    if (!meeting) {
      return NextResponse.json({ error: 'Organizer access could not be verified.' }, { status: 403 })
    }

    if (status === 'open' && meeting.status === 'confirmed') {
      const { error: deleteError } = await supabase
        .from('confirmed_slots')
        .delete()
        .eq('meeting_id', meeting.id)

      if (deleteError) {
        return NextResponse.json({ error: 'Could not reopen the confirmed meeting.' }, { status: 500 })
      }
    }

    const { error: updateError } = await supabase
      .from('meetings')
      .update({ status })
      .eq('id', meeting.id)

    if (updateError) {
      return NextResponse.json({ error: 'Could not update meeting status.' }, { status: 500 })
    }

    await supabase.from('audit_events').insert({
      meeting_id: meeting.id,
      event_type: status === 'open' ? 'meeting.reopened' : 'meeting.closed',
      metadata_json: { previous_status: meeting.status },
    })

    return NextResponse.json({ success: true, status })
  } catch (error) {
    console.error('Meeting status update error', error)
    return NextResponse.json({ error: 'Unexpected error while updating meeting status.' }, { status: 500 })
  }
}
