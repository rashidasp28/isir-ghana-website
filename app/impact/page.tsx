import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const counters = [
  ['5,000+', 'Students targeted through STEAM education programs'],
  ['500+', 'Youth and women targeted annually'],
  ['10', 'Climate-resilient communities targeted'],
  ['4', 'Strategic development focus areas'],
]

const areas = [
  'Child and Maternal Health',
  'STEAM Education',
  'Agriculture',
  'Climate Change',
]

export default function ImpactPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-5xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Our Impact</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Measuring progress and building sustainable change.</h1>
          <p className="text-xl leading-9 max-w-3xl text-gray-100">At ISIR Ghana, impact means lives reached, systems strengthened, knowledge shared, skills developed, and communities empowered.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Impact Snapshot"
            title="Impact that can be seen, measured, and sustained"
            description="We track both numbers and stories to understand reach, learning, confidence, behavior change, and community transformation."
            center
          />
          <div className="grid md:grid-cols-4 gap-8">
            {counters.map(([number, label]) => (
              <div key={label} className="bg-lightBlue rounded-3xl p-8 text-center border border-softGray">
                <h3 className="text-5xl font-bold text-primaryGreen mb-4">{number}</h3>
                <p className="text-charcoal leading-7">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Focus Areas"
            title="Where our impact happens"
            description="ISIR Ghana’s impact is organized across four interconnected areas that reflect the needs and opportunities of Ghanaian communities."
            center
          />
          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area) => (
              <div key={area} className="bg-white rounded-3xl p-8 shadow-sm border border-softGray">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{area}</h3>
                <p className="text-charcoal leading-7">We design measurable interventions, track learning, document stories, and use evidence to improve program quality and scale what works.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="MEL"
              title="How we measure impact"
              description="ISIR Ghana uses Monitoring, Evaluation and Learning to track progress, improve programs, and communicate results transparently."
            />
            <ul className="space-y-4 text-charcoal text-lg leading-8">
              <li>Baseline understanding of needs and opportunities</li>
              <li>Output tracking for activities and participation</li>
              <li>Outcome monitoring for skills, confidence, awareness, and behavior</li>
              <li>Learning and adaptation to improve implementation</li>
              <li>Reporting and accountability for partners and communities</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-primaryBlue to-primaryGreen min-h-[420px]"></div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Help Us Scale What Works</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">With the right partners, ISIR Ghana’s solutions can reach more schools, families, farmers, and communities across Ghana.</p>
          <button className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Become an Impact Partner</button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
