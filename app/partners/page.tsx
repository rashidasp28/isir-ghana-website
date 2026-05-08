import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import PartnerLogoSlider from '@/components/PartnerLogoSlider'

const partnershipTypes = [
  {
    title: 'Funding Partnership',
    description:
      'Support high-impact programs through financial contributions, innovation grants, scholarships, outreach sponsorships, and sustainable development investments.',
  },
  {
    title: 'Technical Partnership',
    description:
      'Collaborate through technology transfer, training, mentorship, curriculum development, research support, and institutional capacity building.',
  },
  {
    title: 'School Partnership',
    description:
      'Partner with ISIR Ghana to deliver hands-on STEAM learning, innovation workshops, teacher engagement, and student development programs.',
  },
  {
    title: 'Research Partnership',
    description:
      'Co-develop research projects, field studies, publications, monitoring systems, and evidence-based interventions that support community development.',
  },
  {
    title: 'Corporate Social Responsibility Partnership',
    description:
      'Align corporate social responsibility goals with impactful community initiatives focused on education, health, sustainability, and youth empowerment.',
  },
  {
    title: 'Community Partnership',
    description:
      'Work alongside ISIR Ghana to strengthen local participation, social inclusion, public awareness, and grassroots development initiatives.',
  },
]

const partnershipStrengths = [
  {
    title: 'Community-Anchored Reach',
    description:
      'ISIR Ghana works directly within schools and communities across Northern Ghana, ensuring programs are locally relevant, culturally responsive, and built on trust.',
  },
  {
    title: 'Evidence-Based Programming',
    description:
      'Our interventions combine field experience, research, monitoring, and data-driven learning to support measurable and sustainable development outcomes.',
  },
  {
    title: 'Multidisciplinary Expertise',
    description:
      'Our team integrates expertise across STEAM education, maternal health, agriculture, climate resilience, research, and community engagement.',
  },
  {
    title: 'Youth and Gender Focus',
    description:
      'We prioritize inclusive opportunities for young people and women through innovation-driven education, leadership development, and community empowerment initiatives.',
  },
  {
    title: 'Scalable Program Models',
    description:
      'ISIR Ghana develops adaptable and scalable program models designed for implementation across diverse low-resource and underserved settings.',
  },
  {
    title: 'Transparent Communication',
    description:
      'We maintain clear communication, accountability, and collaborative reporting systems that strengthen trust with partners, donors, and communities.',
  },
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
            title="Building Strategic Partnerships for Sustainable Impact Across Ghana"
            description="ISIR Ghana collaborates with institutions, schools, researchers, development organizations, and community actors to design evidence-based solutions that strengthen education, health, climate resilience, and sustainable livelihoods across underserved communities."
            center
          />

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipStrengths.map((item) => (
              <div key={item.title} className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{item.title}</h3>
                <p className="text-charcoal leading-7">{item.description}</p>
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
            description="ISIR Ghana welcomes partnerships that strengthen innovation, expand community impact, and accelerate sustainable development solutions across Ghana."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-3xl p-8 shadow-sm border border-softGray hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{type.title}</h3>
                <p className="text-charcoal leading-7">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <SectionHeader
          eyebrow="Current and Emerging Partners"
          title="Organizations connected to our growing impact journey"
          description="ISIR Ghana values collaboration with institutions, foundations, schools, community organizations, and development actors committed to practical and sustainable change."
          center
        />

        <PartnerLogoSlider />
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
                {partnershipTypes.map((type) => <option key={type.title}>{type.title}</option>)}
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
