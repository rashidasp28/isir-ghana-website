import './globals.css'
import type { Metadata } from 'next'
import { organizationJsonLd } from './seo-config'

export const metadata: Metadata = {
  title: {
    default: 'ISIR Ghana | Sustainability Through Innovation',
    template: '%s | ISIR Ghana',
  },
  description:
    'ISIR Ghana is a research and innovation organization advancing STEAM education, maternal and child health, climate resilience, agriculture, and sustainable development through evidence-based solutions in Ghana.',
  keywords: [
    'ISIR Ghana',
    'Institute for Sustainable and Innovative Research Ghana',
    'STEAM education Ghana',
    'STEM NGO Ghana',
    'girls in STEM Ghana',
    'maternal health Ghana',
    'climate resilience Ghana',
    'sustainable agriculture Ghana',
    'research institute Ghana',
    'NGO Ghana',
    'community innovation Ghana',
    'development research Ghana',
    'monitoring and evaluation Ghana',
    'Northern Ghana development',
  ],
  authors: [{ name: 'Institute for Sustainable and Innovative Research Ghana' }],
  creator: 'ISIR Ghana',
  publisher: 'ISIR Ghana',
  metadataBase: new URL('https://project-4v4p7.vercel.app'),
  category: 'Research and Sustainable Development',
  alternates: {
    canonical: 'https://project-4v4p7.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'ISIR Ghana | Sustainability Through Innovation',
    description:
      'Research, innovation, STEAM education, maternal health, agriculture, and climate resilience initiatives in Ghana.',
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
      'Evidence-based research and community innovation for sustainable development in Ghana.',
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  )
}
