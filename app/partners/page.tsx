import Image from 'next/image'
import Link from 'next/link'
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

const partners = [
  { name: 'Eco Empower Alliance', website: 'https://ecoempoweralliance.org/', logo: '/images/partners/eco-empower-alliance.png' },
  { name: 'GEM Ghana', website: 'https://gemghana.org', logo: '/images/partners/gem-ghana.jpeg' },
  { name: 'Herpol Africa', website: 'https://herpolafrica.org/', logo: '/images/partners/herpol-africa.png' },
  { name: 'Masjid AL Emaan', website: '#', logo: '/images/partners/masjid-al-emaan.jpeg' },
  { name: 'STEM Rising Mind Foundation', website: '#', logo: '/images/partners/stem-rising-mind-foundation.jpeg' },
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
          <div className="flex flex-wrap gap-5 mt-10">
            <a href="#partner-form" className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition">Become a Partner</a>
            <Link href="/contact" className="bg-white text-darkNavy px-8 py-4 rounded-full font-semibold text-lg border border-softGray hover:bg-lightGreen transition">Contact Us</Link>
          </div>
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

      <section className="py-24 bg-white overflow-hidden">
        <div className="container-width">
          <SectionHeader
            eyebrow="Current and Emerging Partners"
            title="Organizations connected to our growing impact journey"
            description="ISIR Ghana values collaboration with institutions, foundations, schools, community organizations, and development actors committed to practical and sustainable change."
            center
          />
        </div>

        <div className="relative overflow-hidden mt-10">
          <div className="flex gap-8 w-max partner-logo-slider px-8">
            {[...partners, ...partners].map((partner, index) => (
              <a key={`${partner.name}-${index}`} href={partner.website} target="_blank" rel="noopener noreferrer" className="bg-white border border-softGray rounded-3xl p-8 text-center shadow-sm hover:shadow-lg transition min-h-[220px] w-[260px] flex-shrink-0 flex flex-col items-center justify-center">
                <div className="relative w-32 h-24 mb-6">
                  <Image src={partner.logo} alt={`${partner.name} logo`} fill className="object-contain" />
                </div>
                <h3 className="font-bold text-darkNavy leading-6">{partner.name}</h3>
              </a>
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

      <section id="partner-form" className="py-24 bg-lightBlue">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Partnership Inquiry"
              title="Start a partnership conversation"
              description="Tell us about your organization, partnership interest, and how you would like to work with ISIR Ghana."
            />
          </div>
          <form action="mailto:isirghana@gmail.com" method="post" encType="text/plain" className="bg-white border border-softGray rounded-3xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-5">
              <input name="Full name" className="border border-softGray rounded-2xl px-5 py-4" placeholder="Full name" />
              <input name="Email address" className="border border-softGray rounded-2xl px-5 py-4" placeholder="Email address" />
              <input name="Organization" className="border border-softGray rounded-2xl px-5 py-4" placeholder="Organization" />
              <input name="Country" className="border border-softGray rounded-2xl px-5 py-4" placeholder="Country" />
              <select name="Partnership type" className="border border-softGray rounded-2xl px-5 py-4 md:col-span-2">
                {partnershipTypes.map((type) => <option key={type}>{type}</option>)}
              </select>
              <textarea name="Partnership message" className="border border-softGray rounded-2xl px-5 py-4 md:col-span-2 min-h-[160px]" placeholder="Briefly describe the partnership opportunity" />
            </div>
            <button type="submit" className="mt-8 bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Submit Partnership Inquiry</button>
            <p className="text-sm text-gray-500 mt-4">This will open your email app to send the inquiry to ISIR Ghana.</p>
          </form>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Build Sustainable Futures Together</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Your partnership can help students learn, mothers thrive, farmers adapt, and communities become more resilient.</p>
          <a href="#partner-form" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Become a Partner</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
