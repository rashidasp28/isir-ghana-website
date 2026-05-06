import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const partnershipTypes = [
  'Funding Partnership',
  'Technical Partnership',
  'School Partnership',
  'Research Partnership',
  'Corporate Social Responsibility Partnership',
  'Community Partnership',
]

const benefits = [
  'Program reports',
  'Impact summaries',
  'Photo documentation',
  'Social media acknowledgement',
  'Website recognition',
  'Donor updates',
]

export default function PartnersPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-lightBlue py-24">
        <div className="container-width max-w-5xl">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Partner With ISIR Ghana</p>
          <h1 className="text-5xl md:text-7xl font-bold text-darkNavy leading-tight mb-8">
            Collaborating to turn innovation into measurable development impact.
          </h1>
          <p className="text-xl text-charcoal leading-9 max-w-3xl">
            ISIR Ghana works with schools, communities, donors, NGOs, companies, researchers, and institutions that share our commitment to evidence-based action and sustainable change.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Why Partner With Us"
            title="A credible platform for community innovation and sustainable development"
            description="Our partnerships are designed to create practical solutions that respond to real needs and produce measurable outcomes."
            center
          />

          <div className="grid md:grid-cols-3 gap-8">
            {['Community-Anchored Reach', 'Evidence-Based Programming', 'Multidisciplinary Expertise', 'Youth and Gender Focus', 'Scalable Program Models', 'Transparent Communication'].map((item) => (
              <div key={item} className="bg-white border border-softGray rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{item}</h3>
                <p className="text-charcoal leading-7">We work with partners to design inclusive, practical, and accountable development solutions.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Ways to Partner"
            title="Partnership opportunities"
            description="There are many ways to work with ISIR Ghana depending on your mission, resources, expertise, and development priorities."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type) => (
              <div key={type} className="bg-white rounded-3xl p-8 shadow-sm border border-softGray">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{type}</h3>
                <p className="text-charcoal leading-7">Support programs, provide expertise, collaborate on research, strengthen schools, or co-create community solutions with ISIR Ghana.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Partner Benefits"
              title="What our partners receive"
              description="We believe partnership should be visible, accountable, and meaningful."
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-lightBlue rounded-2xl p-6 font-semibold text-darkNavy">{benefit}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Build Sustainable Futures Together</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Your partnership can help students learn, mothers thrive, farmers adapt, and communities become more resilient.</p>
          <button className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Become a Partner</button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
