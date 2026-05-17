import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'RuralStar Initiative | Rural Education Recognition in Ghana',
  description:
    'RuralStar Initiative is ISIR Ghana’s rural education recognition and motivation program supporting high-performing pupils and outstanding teachers in underserved communities.',
}

const model = [
  { title: 'Recognition for rural excellence', description: 'RuralStar celebrates high-performing pupils and outstanding teachers in underserved schools to strengthen motivation and community pride.' },
  { title: 'Learning materials support', description: 'The initiative provides practical learning materials that help pupils continue learning with dignity and confidence.' },
  { title: 'Teacher motivation', description: 'Teachers are recognized as central actors in rural educational transformation and learner achievement.' },
  { title: 'Mentorship and aspiration building', description: 'Learners are encouraged to dream bigger, stay committed to school, and connect achievement with future opportunity.' },
  { title: 'Community recognition', description: 'The program uses public recognition to make education visible, valued, and celebrated within rural communities.' },
  { title: 'Equity-focused education support', description: 'RuralStar helps reduce motivational and resource gaps that affect learners in underserved communities.' },
]

const impactSnapshot = [
  { value: '2', label: 'Core beneficiary groups', description: 'RuralStar supports both pupils and teachers as central drivers of rural educational progress.' },
  { value: '3', label: 'Support pathways', description: 'Recognition, learning materials, and mentorship form the core support pathways of the initiative.' },
  { value: 'SDG 4', label: 'Education focus', description: 'The initiative directly advances quality education and learner motivation in underserved settings.' },
]

const sdgs = [
  { title: 'SDG 4', subtitle: 'Quality Education', icon: '/images/sdgs/sdg-04.svg', description: 'Strengthens rural learning motivation, school participation, and educational achievement.' },
  { title: 'SDG 10', subtitle: 'Reduced Inequalities', icon: '/images/sdgs/sdg-10.svg', description: 'Supports pupils and teachers in underserved communities where educational opportunity gaps persist.' },
  { title: 'SDG 17', subtitle: 'Partnerships for the Goals', icon: '/images/sdgs/sdg-17.svg', description: 'Creates opportunities for schools, donors, communities, and education stakeholders to support rural education.' },
]

const resources = [
  { title: 'RuralStar Program Brief', description: 'A donor-facing overview of the recognition, motivation, and rural education support model.', href: '/downloads', cta: 'Request Copy' },
  { title: 'Impact Snapshot', description: 'A summary of the program model, beneficiary groups, support pathways, and education equity focus.', href: '#impact', cta: 'View Impact Snapshot' },
  { title: 'Sponsor Rural Excellence', description: 'Information for partners interested in supporting pupils, teachers, and rural school motivation.', href: '/partners#partner-form', cta: 'Become a Sponsor' },
]

export default function RuralStarProgramPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-6xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Rural Education | Recognition and Motivation</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">RuralStar Initiative</h1>
          <p className="text-xl leading-9 max-w-4xl text-gray-100">A rural education recognition and motivation initiative rewarding high-performing pupils and outstanding teachers with learning materials, mentorship opportunities, and community recognition.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[520px] rounded-3xl overflow-hidden border border-softGray shadow-sm bg-lightBlue">
            <Image src="/images/programs/ruralstar.JPG" alt="RuralStar Initiative education recognition and motivation activity" fill className="object-cover" />
          </div>
          <div>
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Program Overview</p>
            <h2 className="text-4xl font-bold text-darkNavy mb-6">Celebrating rural excellence and strengthening learning motivation</h2>
            <p className="text-charcoal leading-8 text-lg mb-6">RuralStar recognizes the effort, achievement, and promise of learners and teachers in underserved rural schools. The initiative positions recognition as a practical tool for motivation, dignity, and educational equity.</p>
            <p className="text-charcoal leading-8 text-lg">By combining learning materials, mentorship, teacher recognition, and community celebration, RuralStar helps make education visible and valued in rural communities.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Intervention Model</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">How RuralStar supports rural education</h2><p className="text-lg text-charcoal leading-8">The initiative combines recognition, learning support, mentorship, teacher motivation, and community engagement.</p></div><div className="grid md:grid-cols-3 gap-8">{model.map((item) => (<article key={item.title} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm"><h3 className="text-2xl font-bold text-darkNavy mb-4">{item.title}</h3><p className="text-charcoal leading-7">{item.description}</p></article>))}</div></div></section>

      <section id="impact" className="py-24 bg-white scroll-mt-24"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Impact Snapshot</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">A scalable model for rural learner and teacher motivation</h2><p className="text-lg text-charcoal leading-8">RuralStar is designed to strengthen educational equity by celebrating achievement and supporting learning in underserved communities.</p></div><div className="grid md:grid-cols-3 gap-8">{impactSnapshot.map((metric) => (<div key={metric.label} className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm"><p className="text-5xl font-bold text-primaryGreen mb-4">{metric.value}</p><h3 className="text-2xl font-bold text-darkNavy mb-4">{metric.label}</h3><p className="text-charcoal leading-7">{metric.description}</p></div>))}</div></div></section>

      <section className="py-24 bg-lightBlue"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">RuralStar in Action</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Recognition that makes education visible</h2><p className="text-lg text-charcoal leading-8">RuralStar uses public recognition, practical support, and community participation to encourage pupils and teachers in rural schools.</p></div><figure className="bg-white rounded-3xl overflow-hidden border border-softGray shadow-sm max-w-5xl mx-auto"><div className="relative h-[520px] bg-white"><Image src="/images/programs/ruralstar.JPG" alt="RuralStar Initiative recognition activity" fill className="object-cover" /></div><figcaption className="p-6 text-charcoal leading-7 font-medium">Rural education recognition and motivation activity supporting pupils and teachers.</figcaption></figure></div></section>

      <section className="py-24 bg-white"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Education Partnership and Implementation Focus</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Working with schools and education stakeholders</h2><p className="text-lg text-charcoal leading-8">RuralStar is designed to work with Ghana Education Service, school leadership, community actors, donors, and volunteers to support rural education excellence.</p></div><div className="grid md:grid-cols-2 gap-8"><article className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm"><div className="w-16 h-16 rounded-2xl bg-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6">✓</div><p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Institutional education alignment</p><h3 className="text-2xl font-bold text-darkNavy mb-4">Ghana Education Service</h3><p className="text-charcoal leading-7">The initiative is positioned to complement Ghana’s education priorities by motivating learners and supporting teachers in underserved school communities.</p></article><article className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm"><div className="w-16 h-16 rounded-2xl bg-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6">✓</div><p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Community implementation pathway</p><h3 className="text-2xl font-bold text-darkNavy mb-4">Rural schools and community actors</h3><p className="text-charcoal leading-7">RuralStar works through schools, families, teachers, and local leaders to make achievement visible and valued.</p></article></div></div></section>

      <section className="py-24 bg-white"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">SDG Alignment</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Advancing rural education equity</h2><p className="text-lg text-charcoal leading-8">RuralStar contributes to quality education, reduced inequalities, and partnerships for rural learning support.</p></div><div className="grid md:grid-cols-3 gap-8">{sdgs.map((sdg) => (<article key={sdg.title} className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition"><div className="bg-lightBlue rounded-2xl p-4 inline-flex mb-6"><Image src={sdg.icon} alt={sdg.subtitle} width={80} height={80} /></div><p className="text-primaryGreen font-bold text-xl mb-2">{sdg.title}</p><h3 className="text-2xl font-bold text-darkNavy mb-4">{sdg.subtitle}</h3><p className="text-charcoal leading-7">{sdg.description}</p></article>))}</div></div></section>

      <section className="py-24 bg-lightGreen"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Resources and Program Documents</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Tools for education partners and sponsors</h2><p className="text-lg text-charcoal leading-8">Access or request key documents that explain the RuralStar model, support pathways, and partnership opportunities.</p></div><div className="grid md:grid-cols-3 gap-8">{resources.map((resource) => (<article key={resource.title} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm flex flex-col"><h3 className="text-2xl font-bold text-darkNavy mb-4">{resource.title}</h3><p className="text-charcoal leading-7 mb-8 flex-grow">{resource.description}</p><Link href={resource.href} className="inline-flex items-center justify-center gap-2 bg-primaryGreen text-white px-5 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition duration-300">{resource.cta}<span aria-hidden="true">→</span></Link></article>))}</div></div></section>

      <section className="py-24 bg-darkNavy text-white"><div className="container-width text-center max-w-4xl"><h2 className="text-4xl md:text-5xl font-bold mb-6">Support rural education excellence</h2><p className="text-lg leading-8 text-gray-300 mb-10">Partner with ISIR Ghana to recognize high-performing pupils, motivate teachers, and strengthen education in underserved communities.</p><Link href="/partners#partner-form" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Partner With Us</Link></div></section>

      <Footer />
    </main>
  )
}
