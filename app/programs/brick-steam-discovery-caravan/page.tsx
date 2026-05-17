import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const learningModel = [
  {
    title: 'Hands-on engineering challenges',
    description:
      'Students build cars, rockets, motorbikes, and other structures to understand balance, motion, stability, design, and problem-solving through practical activity.',
  },
  {
    title: 'Creative problem-solving',
    description:
      'Learners are encouraged to test ideas, make mistakes, improve designs, and explain how their creations work.',
  },
  {
    title: 'Teamwork and confidence building',
    description:
      'Students work in groups, share roles, communicate ideas, and gain confidence as they complete tasks together.',
  },
  {
    title: 'Robotics and design exposure',
    description:
      'The sessions introduce learners to early engineering and robotics concepts in a simple, accessible, and playful way.',
  },
  {
    title: 'Low-resource learning model',
    description:
      'The Caravan uses mobile, reusable, hands-on learning materials that can work in underserved schools with limited laboratory infrastructure.',
  },
  {
    title: 'Future STEAM Hub pipeline',
    description:
      'The program identifies interested learners and schools that can later feed into innovation clubs, SheSTEAM pathways, and a future Northern Regional STEAM Discovery Hub.',
  },
]

const impactSnapshot = [
  {
    value: '2',
    label: 'Schools engaged',
    description: 'Bethany MA JHS and The Kings School have hosted Brick STEAM Discovery Caravan sessions.',
  },
  {
    value: '60',
    label: 'Direct learners reached',
    description: 'Two school sessions directly engaged 30 students each through practical STEAM learning.',
  },
  {
    value: '34',
    label: 'Girls directly engaged',
    description: '18 girls at Bethany MA JHS and 16 girls at The Kings School participated directly.',
  },
  {
    value: '26',
    label: 'Boys directly engaged',
    description: '12 boys at Bethany MA JHS and 14 boys at The Kings School participated directly.',
  },
  {
    value: '13',
    label: 'Learners interested in engineering',
    description: '8 learners at Bethany MA JHS and 5 learners at The Kings School expressed interest in engineering after the sessions.',
  },
  {
    value: '4+',
    label: 'Hands-on project types',
    description: 'Students built and explored cars, rockets, motorbikes, and other creative structures.',
  },
]

const galleryImages = [
  {
    src: '/images/gallery/steam/brick-steam-building-session-1.png',
    caption: 'Learners building and testing creative structures during a hands-on STEAM session.',
  },
  {
    src: '/images/field/brick-steam-1.jpg',
    caption: 'Students engaging with practical materials during a Brick STEAM Discovery Caravan activity.',
  },
  {
    src: '/images/field/brick-steam-2.png',
    caption: 'Group-based learning moments that strengthen teamwork, confidence, and creativity.',
  },
  {
    src: '/images/news/brick-steam-bethany-brick-selection.png',
    caption: 'Brick selection and design exploration during the Bethany MA JHS launch session.',
  },
]

const sdgAlignment = [
  {
    title: 'SDG 4',
    subtitle: 'Quality Education',
    icon: '/images/sdgs/sdg-04.svg',
    description: 'Improves access to practical, inclusive, hands-on STEAM learning for children in underserved school communities.',
  },
  {
    title: 'SDG 5',
    subtitle: 'Gender Equality',
    icon: '/images/sdgs/sdg-05.svg',
    description: 'Encourages girls to participate confidently in engineering, creativity, teamwork, and technology-related learning.',
  },
  {
    title: 'SDG 9',
    subtitle: 'Industry, Innovation and Infrastructure',
    icon: '/images/sdgs/sdg-09.svg',
    description: 'Builds early innovation mindsets through design, construction, prototyping, and problem-solving activities.',
  },
  {
    title: 'SDG 10',
    subtitle: 'Reduced Inequalities',
    icon: '/images/sdgs/sdg-10.svg',
    description: 'Expands access to quality STEAM experiences for learners in low-resource and underserved settings.',
  },
  {
    title: 'SDG 17',
    subtitle: 'Partnerships for the Goals',
    icon: '/images/sdgs/sdg-17.svg',
    description: 'Strengthens collaboration with schools, volunteers, partners, and community actors to scale practical learning.',
  },
]

const educationPartners = [
  {
    title: 'Ghana Education Service',
    role: 'Main education partner and institutional alignment body',
    description:
      'The Brick STEAM Discovery Caravan is positioned to complement Ghana’s education priorities by expanding practical, hands-on STEAM learning opportunities for learners in underserved schools.',
  },
  {
    title: 'Bethany MA JHS, Tamale',
    role: 'Launch school and first implementation site',
    description:
      'Bethany MA JHS hosted the first Brick STEAM Discovery Caravan session, directly engaging 30 learners and providing early evidence of student curiosity and engineering interest.',
  },
  {
    title: 'The Kings School, Kumbungu',
    role: 'Second implementation site and expansion point',
    description:
      'The Kings School hosted the second session, strengthening the Caravan’s field evidence and supporting the expansion of practical STEAM learning beyond Tamale.',
  },
]

const resources = [
  {
    title: 'Brick STEAM Concept Note',
    description: 'A donor-facing overview of the program model, objectives, implementation strategy, and partnership opportunities.',
    href: '/downloads',
    cta: 'Request Copy',
  },
  {
    title: 'Sponsorship Package',
    description: 'Information for donors, schools, companies, and CSR partners interested in supporting school outreach sessions.',
    href: '/partners#partner-form',
    cta: 'Become a Sponsor',
  },
  {
    title: 'Impact Brief',
    description: 'A summary of schools reached, learners engaged, gender participation, early outcomes, and field learning.',
    href: '/downloads',
    cta: 'Coming Soon',
  },
  {
    title: 'Curriculum Snapshot',
    description: 'A short overview of the Brick STEAM learning approach, target age group, activity types, and progression model.',
    href: '/stem-kits',
    cta: 'View STEM Kits',
  },
]

export const metadata: Metadata = {
  title: 'Brick STEAM Discovery Caravan | Hands-on STEM Education in Ghana',
  description:
    'The Brick STEAM Discovery Caravan is ISIR Ghana’s mobile STEAM education initiative bringing hands-on engineering, creativity, robotics exposure, and problem-solving to underserved schools in Northern Ghana.',
}

export default function BrickSteamProgramPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-6xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">STEAM Education</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Brick STEAM Discovery Caravan</h1>
          <p className="text-xl leading-9 max-w-4xl text-gray-100">A mobile STEAM education initiative delivering hands-on learning, creative engineering challenges, robotics exposure, and play-based innovation activities to underserved schools and communities across Northern Ghana.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[520px] rounded-3xl overflow-hidden border border-softGray shadow-sm bg-lightBlue">
            <Image src="/images/programs/brick-steam.png" alt="Students participating in Brick STEAM Discovery Caravan" fill className="object-cover" />
          </div>
          <div>
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Program Overview</p>
            <h2 className="text-4xl font-bold text-darkNavy mb-6">Turning curiosity into confidence through practical learning</h2>
            <p className="text-charcoal leading-8 text-lg mb-6">The Brick STEAM Discovery Caravan helps children experience science, engineering, creativity, teamwork, and problem-solving through hands-on building activities. It is designed for low-resource school environments where learners often have limited access to practical STEM materials.</p>
            <p className="text-charcoal leading-8 text-lg">The program supports early exposure to engineering thinking, innovation mindsets, and confidence-building among children aged 6 to 15.</p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Learning Model</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">How the Caravan builds practical STEAM confidence</h2>
            <p className="text-lg text-charcoal leading-8">The Brick STEAM Discovery Caravan uses active learning, creativity, teamwork, and simple engineering challenges to make science and technology visible, enjoyable, and relevant to young learners.</p>
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
      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Early Impact From the Field</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Evidence of curiosity, confidence, and growing engineering interest</h2>
            <p className="text-lg text-charcoal leading-8">The Brick STEAM Discovery Caravan is already generating early evidence of practical learning, gender-inclusive participation, and increased interest in engineering among basic school learners in Northern Ghana.</p>
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
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Brick STEAM in Action</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Real moments from hands-on learning sessions</h2>
            <p className="text-lg text-charcoal leading-8">Moments from ISIR Ghana’s hands-on learning sessions, where learners explore engineering, creativity, teamwork, and practical problem-solving.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image) => (
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
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Education Partnership and Implementation Sites</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Working through Ghana’s education ecosystem</h2>
            <p className="text-lg text-charcoal leading-8">ISIR Ghana works through education stakeholders, school leadership, volunteers, and community actors to deliver structured learning experiences that build curiosity, confidence, creativity, and early innovation capacity.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {educationPartners.map((partner) => (
              <article key={partner.title} className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6">✓</div>
                <p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">{partner.role}</p>
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{partner.title}</h3>
                <p className="text-charcoal leading-7">{partner.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">SDG Alignment</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Contributing to global development priorities through practical STEAM education</h2>
            <p className="text-lg text-charcoal leading-8">The Brick STEAM Discovery Caravan contributes to inclusive education, gender equity, innovation capacity, reduced inequalities, and partnerships for sustainable development.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Tools for partners, donors, schools, and supporters</h2>
            <p className="text-lg text-charcoal leading-8">Access or request key documents that explain the Brick STEAM Discovery Caravan model, sponsorship opportunities, learning approach, and early impact evidence.</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Support hands-on STEAM learning</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Partner with ISIR Ghana to bring practical STEAM education to more schools and communities.</p>
          <Link href="/partners#partner-form" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Partner With Us</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
