import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ISIR Ghana',
  description: 'Institute for Sustainable and Innovative Research Ghana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
