import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const learningModel = [
  {
    title: 'Antenatal care encouragement',
    description:
      'The initiative promotes early, regular, and trusted antenatal care attendance as a foundation for safer pregnancy and better newborn outcomes.',
  },
  {
    title: 'Maternal nutrition education',
    description:
      'Practical nutrition engagements focus on locally available foods that can support maternal wellbeing, birth weight, and malnutrition prevention.',
  },
  {
    title: 'NHIS renewal support',
    description:
      'The program seeks to support vulnerable mothers with health insurance renewal to improve access to antenatal, delivery, and postnatal services.',
  },
  {
    title: 'Essential baby supplies',
    description:
      'Mothers are supported with essential baby items as an entry point for dignity, trust-building, and continued maternal health engagement.',
  },
  {
    title: 'Facility-based data engagement',
    description:
      'The initiative includes ethical, facility-approved data engagement around maternal nutrition, anaemia, birth outcomes, and health trends.',
  },
  {
    title: 'Community trust and follow-up',
    description:
      'ISIR Ghana works with health staff, mothers, and community actors to build trust, encourage consistent care, and strengthen long-term support systems.',
  },
]

const impactSnapshot = [
  {
    value: '35',
    label: 'Women engaged',
    description: 'Approximately 35 women were engaged during the launch outreach at King’s Health Center in Kumbungu.',
  },
  {
    value: '12',
    label: 'Mothers directly supported',
    description: '12 women who were regular for antenatal care or had recently delivered received essential baby supplies.',
  },
  {
    value: '6',
    label: 'Pregnant women supported',
    description: '6 pregnant women were included among the direct beneficiaries of the launch outreach.',
  },
  {
    value: '6',
    label: 'New mothers supported',
    description: '6 mothers who had recently delivered were supported through the launch activity.',
  },
  {
    value: '1',
    label: 'Health facility engaged',
    description: 'King’s Health Center, Kumbungu hosted the launch and collaborated with ISIR Ghana during the outreach.',
  },
  {
    value: '4',
    label: 'ISIR Ghana team members',
    description: 'The outreach team included the Executive Director, Finance and Administrative Manager, a health volunteer, and a practicing nurse.',
  },
]

const sdgAlignment = [
  {
    title: 'SDG 2',
    subtitle: 'Zero Hunger',
    icon: '/images/sdgs/sdg-02.svg',
    description: 'Supports maternal nutrition education using locally available foods to address malnutrition and improve birth outcomes.',
  },
  {
    title: 'SDG 3',
    subtitle: 'Good Health and Well-being',
    icon: '/images/sdgs/sdg-03.svg',
    description: 'Promotes antenatal care, maternal wellbeing, newborn health, health insurance access, and facility-linked support.',
  },
  {
    title: 'SDG 5',
    subtitle: 'Gender Equality',
    icon: '/images/sdgs/sdg-05.svg',
    description: 'Centers women’s dignity, maternal health access, and practical support for expectant and new mothers.',
  },
  {
    title: 'SDG 10',
    subtitle: 'Reduced Inequalities',
    icon: '/images/sdgs/sdg-10.svg',
    description: 'Targets underserved mothers who may face barriers to health services, nutrition information, and essential support.',
  },
  {
    title: 'SDG 17',
    subtitle: 'Partnerships for the Goals',
    icon: '/images/sdgs/sdg-17.svg',
    description: 'Strengthens collaboration between ISIR Ghana, health facilities, health workers, volunteers, and community stakeholders.',
  },
]

const resources = [
  {
    title: 'Mother First Program Brief',
    description: 'A donor-facing overview of the maternal health support model, objectives, outreach approach, and partnership opportunities.',
    href: '/downloads',
    cta: 'Request Copy',
  },
  {
    title: 'Maternal Health Impact Snapshot',
    description: 'A summary of women reached, mothers supported, health facility collaboration, and early implementation evidence.',
    href: '#impact',
    cta: 'View Impact Snapshot',
  },
  {
    title: 'Nutrition Engagement Concept',
    description: 'A practical framework for maternal nutrition education using locally available foods to support birth outcomes.',
    href: '/downloads',
    cta: 'Request Copy',
  },
  {
    title: 'Partner With Mother First',
    description: 'Information for donors, health partners, community actors, and institutions interested in expanding maternal health support.',
    href: '/partners#partner-form',
    cta: 'Become a Partner',
  },
]

export const metadata: Metadata = {
  title: 'Mother First Health Initiative | Maternal Health Support in Northern Ghana',
  description:
    'Mother First Health Initiative is ISIR Ghana’s maternal health support program focused on antenatal care, maternal nutrition, NHIS renewal support, baby supplies, and evidence-based community health engagement.',
}

export default function MotherFirstProgramPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-6xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Maternal and Child Health</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Mother First Health Initiative</h1>
          <p className="text-xl leading-9 max-w-4xl text-gray-100">A maternal health support and research-driven initiative improving maternal wellbeing, antenatal care engagement, nutrition awareness, health insurance access, and newborn outcomes in underserved communities.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[520px] rounded-3xl overflow-hidden border border-softGray shadow-sm bg-lightBlue">
            <Image src="/images/programs/mothers-first.png" alt="Mother First Health Initiative maternal health outreach session" fill className="object-cover" />
          </div>
          <div>
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Program Overview</p>
            <h2 className="text-4xl font-bold text-darkNavy mb-6">Because every mother matters</h2>
            <p className="text-charcoal leading-8 text-lg mb-6">The Mother First Health Initiative combines compassion with evidence-based action. It supports expectant and new mothers while strengthening health education, facility collaboration, maternal nutrition awareness, and practical access to care.</p>
            <p className="text-charcoal leading-8 text-lg">The initiative uses outreach as an entry point for longer-term maternal health systems built on community trust, education, partnerships, and ethical data engagement.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Intervention Model</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">How Mother First supports maternal wellbeing</h2>
            <p className="text-lg text-charcoal leading-8">The initiative combines immediate support, practical health education, facility collaboration, insurance access, and evidence generation to strengthen maternal and newborn outcomes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {learningModel.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{item.title}</h3>
                <p className="text-charcoal leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="py-24 bg-white scroll-mt-24">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Early Impact From the Field</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Evidence from the launch at King’s Health Center, Kumbungu</h2>
            <p className="text-lg text-charcoal leading-8">The launch outreach engaged mothers, health workers, and the wider facility community while demonstrating how practical support can encourage antenatal care commitment and maternal health awareness.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactSnapshot.map((metric) => (
              <div key={metric.label} className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm">
                <p className="text-5xl font-bold text-primaryGreen mb-4">{metric.value}</p>
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{metric.label}</h3>
                <p className="text-charcoal leading-7">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightBlue">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Mother First in Action</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Maternal health support rooted in dignity and trust</h2>
            <p className="text-lg text-charcoal leading-8">The initiative creates trusted spaces where mothers receive encouragement, practical support, and health education linked to facility-based care.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { src: '/images/programs/mothers-first.png', caption: 'Maternal health education and engagement during the Mother First launch outreach.' },
              { src: '/images/field/health-outreach-1.jpg', caption: 'Community health engagement supporting mothers and health facility collaboration.' },
            ].map((image) => (
              <figure key={image.src} className="bg-white rounded-3xl overflow-hidden border border-softGray shadow-sm">
                <div className="relative h-80 bg-white">
                  <Image src={image.src} alt={image.caption} fill className="object-cover" />
                </div>
                <figcaption className="p-6 text-charcoal leading-7 font-medium">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Health Partnership and Implementation Site</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Working with health facilities and community actors</h2>
            <p className="text-lg text-charcoal leading-8">Mother First is built around collaboration with health workers, facility leadership, volunteers, and community stakeholders to support women before, during, and after pregnancy.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6">✓</div>
              <p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Launch implementation site</p>
              <h3 className="text-2xl font-bold text-darkNavy mb-4">King’s Health Center, Kumbungu</h3>
              <p className="text-charcoal leading-7">The facility hosted the launch outreach and collaborated with ISIR Ghana to engage mothers, health staff, and the wider facility community.</p>
            </article>
            <article className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6">✓</div>
              <p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Community health support network</p>
              <h3 className="text-2xl font-bold text-darkNavy mb-4">Health workers, volunteers, and mothers</h3>
              <p className="text-charcoal leading-7">The initiative connects facility staff, practicing nurses, volunteers, expectant mothers, and new mothers around practical maternal health support.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">SDG Alignment</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Advancing maternal health, nutrition, dignity, and equity</h2>
            <p className="text-lg text-charcoal leading-8">Mother First contributes to maternal health, nutrition, gender equity, reduced inequalities, and partnership-based community health systems.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdgAlignment.map((sdg) => (
              <article key={sdg.title} className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                <div className="bg-lightBlue rounded-2xl p-4 inline-flex mb-6">
                  <Image src={sdg.icon} alt={sdg.subtitle} width={80} height={80} />
                </div>
                <p className="text-primaryGreen font-bold text-xl mb-2">{sdg.title}</p>
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{sdg.subtitle}</h3>
                <p className="text-charcoal leading-7">{sdg.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Resources and Program Documents</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Tools for donors, health partners, and community supporters</h2>
            <p className="text-lg text-charcoal leading-8">Access or request key documents that explain the Mother First model, maternal nutrition approach, health facility engagement, and impact evidence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource) => (
              <article key={resource.title} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm flex flex-col">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{resource.title}</h3>
                <p className="text-charcoal leading-7 mb-8 flex-grow">{resource.description}</p>
                <Link href={resource.href} className="inline-flex items-center justify-center gap-2 bg-primaryGreen text-white px-5 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition duration-300">
                  {resource.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Support mothers and newborns</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Partner with ISIR Ghana to expand maternal health education, NHIS support, nutrition engagement, and practical care for vulnerable mothers.</p>
          <Link href="/partners#partner-form" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Partner With Us</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
