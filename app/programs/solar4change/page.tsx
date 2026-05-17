import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Solar4Change Initiative | Solar-Powered Water Access in Ghana',
  description:
    'Solar4Change is ISIR Ghana’s climate resilience and clean water initiative using solar-powered borehole systems to support public health, women, children, and sustainable community infrastructure.',
}

const impactSnapshot = [
  {
    value: '€3,500',
    label: 'Estimated project cost',
    description: 'The current solar-powered borehole project has an estimated total cost of €3,500.',
  },
  {
    value: '€1,100',
    label: 'Raised so far',
    description: 'Generous donors have already contributed €1,100 toward the project.',
  },
  {
    value: '€2,400',
    label: 'Remaining funding gap',
    description: 'ISIR Ghana is seeking an additional €2,400 to complete the project.',
  },
]

export default function Solar4ChangePage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-6xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
            Clean Water | Renewable Energy | Climate Resilience
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Solar4Change Initiative
          </h1>
          <p className="text-xl leading-9 max-w-4xl text-gray-100">
            A climate resilience and renewable energy initiative providing solar-powered clean water systems to underserved communities while strengthening public health, women’s empowerment, hygiene, sanitation, and long-term community resilience.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl border border-softGray shadow-sm bg-lightBlue p-10">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Program Overview</p>
            <h2 className="text-4xl font-bold text-darkNavy mb-6">Clean water powered by sustainable energy</h2>
            <p className="text-charcoal leading-8 text-lg mb-6">
              Solar4Change responds to the daily challenge of clean water access in underserved communities. By using solar-powered borehole systems, the initiative combines safe water access with renewable energy, climate resilience, and community-led sustainability.
            </p>
            <p className="text-charcoal leading-8 text-lg">
              The project supports public health, reduces the burden on women and children, improves hygiene and sanitation, and strengthens long-term community infrastructure.
            </p>
          </div>
          <div className="rounded-3xl bg-lightGreen p-10 border border-softGray">
            <h3 className="text-3xl font-bold text-darkNavy mb-6">Why it matters</h3>
            <p className="text-charcoal leading-8 text-lg">
              Water insecurity affects health, education, productivity, dignity, and community resilience. Solar-powered systems provide a more sustainable approach by reducing dependence on unreliable energy sources and supporting long-term access to safe water.
            </p>
          </div>
        </div>
      </section>

      <section id="impact" className="py-24 bg-lightGreen scroll-mt-24">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Funding Snapshot</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">A practical project with a clear funding pathway</h2>
            <p className="text-lg text-charcoal leading-8">Solar4Change is structured around measurable community infrastructure, transparent fundraising, and sustainable water access.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {impactSnapshot.map((metric) => (
              <div key={metric.label} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm">
                <p className="text-5xl font-bold text-primaryGreen mb-4">{metric.value}</p>
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{metric.label}</h3>
                <p className="text-charcoal leading-7">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">SDG Alignment</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Advancing clean water, health, renewable energy, and climate resilience</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {['SDG 3 – Good Health and Well-being', 'SDG 6 – Clean Water and Sanitation', 'SDG 7 – Affordable and Clean Energy', 'SDG 13 – Climate Action', 'SDG 17 – Partnerships for the Goals'].map((sdg) => (
              <article key={sdg} className="bg-lightBlue border border-softGray rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{sdg}</h3>
                <p className="text-charcoal leading-7">Solar4Change contributes to this goal through sustainable water access, clean energy, community health, and partnership-based implementation.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Help complete the Solar4Change project</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Partner with ISIR Ghana to make clean water accessible through sustainable solar technology.</p>
          <Link href="/partners#partner-form" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Partner With Us</Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
