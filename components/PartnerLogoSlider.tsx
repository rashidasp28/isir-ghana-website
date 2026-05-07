'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const partners = [
  { name: 'Eco Empower Alliance', website: 'https://ecoempoweralliance.org/', logo: '/images/partners/eco-empower-alliance.png' },
  { name: 'GEM Ghana', website: 'https://gemghana.org', logo: '/images/partners/gem-ghana.jpeg' },
  { name: 'Herpol Africa', website: 'https://herpolafrica.org/', logo: '/images/partners/herpol-africa.png' },
  { name: 'Masjid AL Emaan', website: '#', logo: '/images/partners/masjid-al-emaan.jpeg' },
  { name: 'STEM Rising Mind Foundation', website: '#', logo: '/images/partners/stem-rising-mind-foundation.jpeg' },
]

export default function PartnerLogoSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % partners.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const activePartner = partners[activeIndex]

  return (
    <div className="container-width mt-10">
      <a
        href={activePartner.website}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-3xl mx-auto bg-white border border-softGray rounded-[2rem] px-8 py-16 shadow-xl text-center flex flex-col items-center justify-center transition-all duration-700 hover:shadow-2xl"
      >
        <div className="relative w-56 h-36 md:w-72 md:h-44 mb-8">
          <Image src={activePartner.logo} alt={`${activePartner.name} logo`} fill className="object-contain" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-darkNavy leading-tight">{activePartner.name}</h3>
      </a>

      <div className="flex justify-center gap-3 mt-10">
        {partners.map((partner, index) => (
          <button
            key={partner.name}
            aria-label={`Show ${partner.name}`}
            onClick={() => setActiveIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'w-10 bg-primaryGreen' : 'w-3 bg-softGray'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
