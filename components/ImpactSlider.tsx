'use client'

import { useEffect, useState } from 'react'

const impactItems = [
  { number: '5,000+', label: 'Students targeted through STEAM programs' },
  { number: '500+', label: 'Youth and women empowered annually' },
  { number: '4', label: 'Communities reached' },
  { number: '5', label: 'Partner schools engaged' },
  { number: '10', label: 'Climate-resilient communities targeted' },
  { number: '4', label: 'Strategic development focus areas' },
]

export default function ImpactSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % impactItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const activeItem = impactItems[activeIndex]

  return (
    <section className="py-24 bg-darkNavy text-white overflow-hidden">
      <div className="container-width text-center mb-12">
        <p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Impact Snapshot</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">Our growing impact in motion</h2>
      </div>

      <div className="container-width">
        <div className="max-w-3xl mx-auto bg-white/10 border border-white/20 rounded-[2rem] px-8 py-16 shadow-2xl text-center backdrop-blur transition-all duration-700 ease-in-out">
          <h3 className="text-7xl md:text-8xl font-extrabold text-primaryGreen mb-6">{activeItem.number}</h3>
          <p className="text-2xl md:text-3xl font-semibold text-white leading-tight">{activeItem.label}</p>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {impactItems.map((item, index) => (
            <button
              key={item.label}
              aria-label={`Show ${item.label}`}
              onClick={() => setActiveIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-10 bg-primaryGreen' : 'w-3 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
