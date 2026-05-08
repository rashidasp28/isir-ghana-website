import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'ISIR Ghana | Sustainability Through Innovation',
    template: '%s | ISIR Ghana',
  },
  description:
    'The Institute for Sustainable and Innovative Research Ghana advances evidence-based research, STEAM education, maternal and child health, agriculture, climate resilience, and community innovation.',
  keywords: [
    'ISIR Ghana',
    'Institute for Sustainable and Innovative Research Ghana',
    'STEAM education Ghana',
    'STEM NGO Ghana',
    'sustainable development Ghana',
    'maternal health Ghana',
    'climate resilience Ghana',
    'research institute Ghana',
  ],
  authors: [{ name: 'Institute for Sustainable and Innovative Research Ghana' }],
  creator: 'ISIR Ghana',
  publisher: 'ISIR Ghana',
  metadataBase: new URL('https://project-4v4p7.vercel.app'),
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'ISIR Ghana | Sustainability Through Innovation',
    description:
      'Bridging research, innovation, and community action for sustainable development in Ghana.',
    url: 'https://project-4v4p7.vercel.app',
    siteName: 'ISIR Ghana',
    images: [
      {
        url: '/og-image.png?v=5',
        width: 1200,
        height: 630,
        alt: 'ISIR Ghana research innovation and community impact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISIR Ghana | Sustainability Through Innovation',
    description:
      'Research, innovation, STEAM education, maternal health, agriculture, and climate resilience initiatives in Ghana.',
    images: ['/og-image.png?v=5'],
  },
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
