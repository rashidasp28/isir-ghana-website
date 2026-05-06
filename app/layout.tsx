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
  openGraph: {
    title: 'ISIR Ghana | Sustainability Through Innovation',
    description:
      'Bridging research, innovation, and community action for sustainable development in Ghana.',
    url: 'https://isir-ghana-website.vercel.app',
    siteName: 'ISIR Ghana',
    images: [
      {
        url: '/images/homepage/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'ISIR Ghana community innovation and outreach',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
