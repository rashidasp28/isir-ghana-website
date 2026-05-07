'use client'

const impactItems = [
  { number: '5,000+', label: 'Students targeted through STEAM programs' },
  { number: '500+', label: 'Youth and women empowered annually' },
  { number: '4', label: 'Communities reached' },
  { number: '3', label: 'Partner schools engaged' },
  { number: '10', label: 'Climate-resilient communities targeted' },
  { number: '4', label: 'Strategic development focus areas' },
]

export default function ImpactSlider() {
  return (
    <section className="py-24 bg-darkNavy text-white overflow-hidden">
      <div className="container-width text-center mb-12">
        <p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Impact Snapshot</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">Our growing impact in motion</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-impactSlide">
          {[...impactItems, ...impactItems].map((item, index) => (
            <div key={`${item.label}-${index}`} className="w-screen flex-shrink-0 px-6">
              <div className="max-w-3xl mx-auto bg-white/10 border border-white/20 rounded-[2rem] px-8 py-16 shadow-2xl text-center backdrop-blur">
                <h3 className="text-7xl md:text-8xl font-extrabold text-primaryGreen mb-6">{item.number}</h3>
                <p className="text-2xl md:text-3xl font-semibold text-white leading-tight">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
