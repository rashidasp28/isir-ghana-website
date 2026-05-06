import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const publicationTypes = [
  'White Papers',
  'Research Reports',
  'Policy Briefs',
  'Community Needs Assessments',
  'Monitoring, Evaluation and Learning Reports',
  'Learning Notes and Insights',
]

const services = [
  'Baseline and Endline Studies',
  'Needs Assessments',
  'Monitoring, Evaluation and Learning',
  'Policy and Strategy Briefs',
  'Program Design Research',
  'Impact Reporting',
]

export default function ResearchPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-lightBlue py-24">
        <div className="container-width max-w-5xl">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Research and Publications</p>
          <h1 className="text-5xl md:text-7xl font-bold text-darkNavy leading-tight mb-8">
            Generating evidence for sustainable development action.
          </h1>
          <p className="text-xl text-charcoal leading-9 max-w-3xl">
            At ISIR Ghana, research is not an end point. It is a tool for action, better decisions, stronger programs, and measurable community impact.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Our Research Philosophy"
            title="Research that moves from evidence to action"
            description="We combine academic rigor, field-based learning, stakeholder engagement, and practical implementation to bridge the gap between knowledge and action."
            center
          />

          <div className="grid md:grid-cols-4 gap-8">
            {['Child and Maternal Health', 'STEAM Education', 'Agriculture and Food Systems', 'Climate Change and Community Resilience'].map((priority) => (
              <div key={priority} className="bg-white border border-softGray rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{priority}</h3>
                <p className="text-charcoal leading-7">Applied research and insight generation to support practical, inclusive, and sustainable development solutions.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Knowledge Products"
            title="What We Publish"
            description="ISIR Ghana produces accessible and practical knowledge products for communities, NGOs, schools, policy actors, and development partners."
            center
          />

          <div className="grid md:grid-cols-3 gap-8">
            {publicationTypes.map((type) => (
              <div key={type} className="bg-white rounded-3xl p-8 shadow-sm border border-softGray">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{type}</h3>
                <p className="text-charcoal leading-7">Clear, useful, and action-oriented publications designed to support decision-making and development learning.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-primaryBlue to-primaryGreen rounded-3xl min-h-[420px]"></div>
          <div>
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Featured Publication</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">ISIR Ghana White Paper</h2>
            <p className="text-lg text-charcoal leading-8 mb-8">
              Bridging Knowledge and Action for Sustainable Development in Ghana presents ISIR Ghana’s institutional vision, strategic focus areas, theory of change, sustainability strategy, and commitment to evidence-based development.
            </p>
            <button className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Download White Paper</button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightBlue">
        <div className="container-width">
          <SectionHeader
            eyebrow="Research Services"
            title="Research and advisory services"
            description="We support partners with professional research, program design, MEL, policy translation, and impact communication."
            center
          />

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service} className="bg-white rounded-3xl p-8 shadow-sm border border-softGray">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{service}</h3>
                <p className="text-charcoal leading-7">Professional support for organizations seeking credible evidence, stronger programs, and donor-ready reporting.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Evidence Should Lead to Action</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Partner with ISIR Ghana to generate research, insights, and practical solutions that strengthen communities and support sustainable development.</p>
          <button className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Collaborate on Research</button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
