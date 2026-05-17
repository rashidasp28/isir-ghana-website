import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AgriSTEAM Innovation Hub | Smart Agriculture and Youth Innovation in Ghana',
  description:
    'AgriSTEAM Innovation Hub is ISIR Ghana’s technology-driven agriculture and youth innovation program focused on smart agriculture, IoT, automation, climate-smart farming, and agri-tech entrepreneurship.',
}

const pillars = [
  { title: 'Smart agriculture learning', description: 'Students and youth explore how technology can improve farming, water use, soil monitoring, productivity, and climate resilience.' },
  { title: 'IoT and sensor systems', description: 'The program introduces practical sensor-based systems that can support data-driven farming and local problem-solving.' },
  { title: 'Automation and prototyping', description: 'Learners build simple prototypes that connect electronics, coding, automation, and agricultural challenges.' },
  { title: 'Climate-smart farming', description: 'AgriSTEAM links innovation training to climate adaptation, food security, and sustainable farming systems.' },
  { title: 'Youth entrepreneurship', description: 'The hub develops innovation mindsets and practical pathways into agri-tech enterprise and local solution development.' },
  { title: 'Community-centered innovation', description: 'Learning activities are connected to real challenges faced by farmers and communities in Northern Ghana.' },
]

const resources = [
  { title: 'AgriSTEAM Concept Note', description: 'A donor-facing overview of the smart agriculture, youth innovation, and climate-resilience model.', href: '/downloads', cta: 'Request Copy' },
  { title: 'Impact Direction', description: 'A summary of expected outcome areas including agri-tech skills, prototypes, climate learning, and entrepreneurship pathways.', href: '#impact', cta: 'View Impact Direction' },
  { title: 'Partner With AgriSTEAM', description: 'Information for agriculture partners, donors, schools, farmer groups, and technology collaborators.', href: '/partners#partner-form', cta: 'Become a Partner' },
]

const sdgs = [
  'SDG 2 – Zero Hunger',
  'SDG 4 – Quality Education',
  'SDG 8 – Decent Work and Economic Growth',
  'SDG 9 – Industry, Innovation and Infrastructure',
  'SDG 13 – Climate Action',
  'SDG 17 – Partnerships for the Goals',
]

export default function AgriSteamProgramPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28"><div className="container-width max-w-6xl"><p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Agriculture | Technology | Climate Innovation</p><h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">AgriSTEAM Innovation Hub</h1><p className="text-xl leading-9 max-w-4xl text-gray-100">A technology-driven agriculture and youth innovation ecosystem designed to train young people in smart agriculture, coding, IoT systems, automation, climate-smart farming, and agri-tech entrepreneurship.</p></div></section>

      <section className="py-24 bg-white"><div className="container-width grid lg:grid-cols-2 gap-12 items-center"><div className="rounded-3xl bg-lightBlue p-10 border border-softGray shadow-sm"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Program Overview</p><h2 className="text-4xl font-bold text-darkNavy mb-6">Connecting agriculture, technology, and youth innovation</h2><p className="text-charcoal leading-8 text-lg mb-6">AgriSTEAM Innovation Hub prepares young people to understand agriculture as a space for science, technology, entrepreneurship, and climate resilience. It links practical STEAM learning to real farming challenges and local development needs.</p><p className="text-charcoal leading-8 text-lg">Through coding, electronics, sensor systems, automation, and prototype development, learners explore how data and technology can support sustainable farming systems.</p></div><div className="rounded-3xl bg-lightGreen p-10 border border-softGray shadow-sm"><h3 className="text-3xl font-bold text-darkNavy mb-6">Why it matters</h3><p className="text-charcoal leading-8 text-lg">Northern Ghana faces climate stress, soil degradation, water insecurity, and changing agricultural livelihoods. AgriSTEAM helps young people become problem-solvers who can design practical solutions for food security, resilience, and rural opportunity.</p></div></div></section>

      <section className="py-24 bg-lightGreen"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Learning and Innovation Model</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">How the hub builds agri-tech capacity</h2><p className="text-lg text-charcoal leading-8">AgriSTEAM combines practical technology learning with agriculture, climate adaptation, and entrepreneurship.</p></div><div className="grid md:grid-cols-3 gap-8">{pillars.map((item) => (<article key={item.title} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm"><h3 className="text-2xl font-bold text-darkNavy mb-4">{item.title}</h3><p className="text-charcoal leading-7">{item.description}</p></article>))}</div></div></section>

      <section id="impact" className="py-24 bg-white scroll-mt-24"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Impact Direction</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">A pipeline for climate-smart agri-tech innovation</h2><p className="text-lg text-charcoal leading-8">The hub is designed to produce youth-led prototypes, agri-tech skills, farmer-centered solutions, and innovation pathways for sustainable farming systems.</p></div><div className="grid md:grid-cols-4 gap-8">{['Youth agri-tech skills', 'Smart farming prototypes', 'Climate adaptation learning', 'Entrepreneurship pathways'].map((metric) => (<div key={metric} className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm"><h3 className="text-2xl font-bold text-darkNavy mb-4">{metric}</h3><p className="text-charcoal leading-7">A core outcome area for future AgriSTEAM implementation, partnership, and impact measurement.</p></div>))}</div></div></section>

      <section className="py-24 bg-lightBlue"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">AgriSTEAM in Action</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">From farming challenges to youth-led innovation</h2><p className="text-lg text-charcoal leading-8">The hub creates a practical pathway where learners connect coding, sensors, automation, and agricultural realities to develop community-relevant solutions.</p></div><div className="bg-white rounded-3xl p-10 border border-softGray shadow-sm max-w-5xl mx-auto"><p className="text-xl text-charcoal leading-9">AgriSTEAM positions agriculture as a modern innovation space where young people can build prototypes, support farmers, explore entrepreneurship, and contribute to climate-resilient food systems.</p></div></div></section>

      <section className="py-24 bg-white"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Partnership and Implementation Focus</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Working with schools, farmers, and technology partners</h2><p className="text-lg text-charcoal leading-8">AgriSTEAM is designed for collaboration with schools, youth groups, farmer organizations, agriculture extension actors, technology partners, donors, and climate-resilience stakeholders.</p></div><div className="grid md:grid-cols-2 gap-8"><article className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm"><div className="w-16 h-16 rounded-2xl bg-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6">✓</div><p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Agriculture innovation pathway</p><h3 className="text-2xl font-bold text-darkNavy mb-4">Farmers and rural communities</h3><p className="text-charcoal leading-7">The program connects youth learning to real farming needs, community challenges, and sustainable agricultural systems.</p></article><article className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm"><div className="w-16 h-16 rounded-2xl bg-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6">✓</div><p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Technology and education pathway</p><h3 className="text-2xl font-bold text-darkNavy mb-4">Schools, mentors, and technical partners</h3><p className="text-charcoal leading-7">The hub welcomes partners who can support equipment, mentorship, training content, prototype development, and field testing.</p></article></div></div></section>

      <section className="py-24 bg-white"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">SDG Alignment</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Advancing food security, innovation, jobs, and climate resilience</h2></div><div className="grid md:grid-cols-3 gap-8">{sdgs.map((sdg) => (<article key={sdg} className="bg-lightBlue border border-softGray rounded-3xl p-8 shadow-sm"><h3 className="text-2xl font-bold text-darkNavy mb-4">{sdg}</h3><p className="text-charcoal leading-7">AgriSTEAM contributes to this goal by linking practical technology education to agriculture, climate resilience, entrepreneurship, and partnerships.</p></article>))}</div></div></section>

      <section className="py-24 bg-lightGreen"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Resources and Program Documents</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Tools for agriculture, education, and technology partners</h2><p className="text-lg text-charcoal leading-8">Access or request key documents that explain the AgriSTEAM model, impact direction, and partnership opportunities.</p></div><div className="grid md:grid-cols-3 gap-8">{resources.map((resource) => (<article key={resource.title} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm flex flex-col"><h3 className="text-2xl font-bold text-darkNavy mb-4">{resource.title}</h3><p className="text-charcoal leading-7 mb-8 flex-grow">{resource.description}</p><Link href={resource.href} className="inline-flex items-center justify-center gap-2 bg-primaryGreen text-white px-5 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition duration-300">{resource.cta}<span aria-hidden="true">→</span></Link></article>))}</div></div></section>

      <section className="py-24 bg-darkNavy text-white"><div className="container-width text-center max-w-4xl"><h2 className="text-4xl md:text-5xl font-bold mb-6">Partner with ISIR Ghana on agri-tech innovation</h2><p className="text-lg leading-8 text-gray-300 mb-10">Support young people to build smart agriculture solutions for food security, climate adaptation, and sustainable rural livelihoods.</p><Link href="/partners#partner-form" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Partner With Us</Link></div></section>

      <Footer />
    </main>
  )
}
