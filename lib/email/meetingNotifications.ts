import nodemailer from 'nodemailer'

type NotificationInput = {
  recipients: string[]
  meetingTitle: string
  meetingDate: string
  startTime: string
  endTime: string
  timezone: string
  meetingLink: string
  calendarUrl: string
}

function requiredMailEnv(name: 'SMTP_HOST' | 'SMTP_PORT' | 'SMTP_USER' | 'SMTP_PASS' | 'SMTP_FROM') {
  const value = process.env[name]
  if (!value) throw new Error(`Missing required mail environment variable: ${name}`)
  return value
}

export function isMailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.SMTP_FROM)
}

export async function sendMeetingConfirmationEmails(input: NotificationInput) {
  if (input.recipients.length === 0) return

  const transporter = nodemailer.createTransport({
    host: requiredMailEnv('SMTP_HOST'),
    port: Number(requiredMailEnv('SMTP_PORT')),
    secure: Number(requiredMailEnv('SMTP_PORT')) === 465,
    auth: {
      user: requiredMailEnv('SMTP_USER'),
      pass: requiredMailEnv('SMTP_PASS'),
    },
  })

  const subject = `Confirmed: ${input.meetingTitle}`
  const text = [
    `The meeting "${input.meetingTitle}" has been confirmed.`,
    '',
    `Date: ${input.meetingDate}`,
    `Time: ${input.startTime} - ${input.endTime} (${input.timezone})`,
    `Join meeting: ${input.meetingLink}`,
    `Add to calendar: ${input.calendarUrl}`,
    '',
    'Sent via ISIR Meet.',
  ].join('\n')

  await Promise.all(
    input.recipients.map((recipient) =>
      transporter.sendMail({
        from: requiredMailEnv('SMTP_FROM'),
        to: recipient,
        subject,
        text,
      }),
    ),
  )
}
