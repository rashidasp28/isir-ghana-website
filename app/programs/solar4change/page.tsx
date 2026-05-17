import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Solar4Change Initiative | Solar-Powered Water Access in Ghana',
  description:
    'Solar4Change is ISIR Ghana’s climate resilience and clean water initiative using solar-powered borehole systems to support public health, women, children, and sustainable community infrastructure.',
}

const model = [
  { title: 'Solar-powered borehole systems', description: 'The initiative uses renewable solar energy to support reliable, sustainable, and community-friendly water access.' },
  { title: 'Safe water access', description: 'Solar4Change improves access to clean water for communities facing daily water insecurity.' },
  { title: 'Public health protection', description: 'Clean water access supports hygiene, sanitation, disease prevention, and healthier households.' },
  { title: 'Women and children’s wellbeing', description: 'Reliable water access can reduce the burden of water collection on women and children.' },
  { title: 'Community resilience', description: 'Solar-powered infrastructure strengthens local resilience by combining clean energy with essential water systems.' },
  { title: 'Sustainable implementation', description: 'The model is designed around practical infrastructure, transparent fundraising, and community-centered ownership.' },
]

const impactSnapshot = [
  { value: '€3,500', label: 'Estimated project cost', description: 'The current solar-powered borehole project has an estimated total cost of €3,500.' },
  { value: '€1,100', label: 'Raised so far', description: 'Generous donors have already contributed €1,100 toward the project.' },
  { value: '€2,400', label: 'Remaining funding gap', description: 'ISIR Ghana is seeking an additional €2,400 to complete the project.' },
]

const resources = [
  { title: 'Solar4Change Concept Note', description: 'A donor-facing overview of the solar-powered water access model, rationale, cost, and implementation pathway.', href: '/downloads', cta: 'Request Copy' },
  { title: 'Funding Snapshot', description: 'A transparent summary of the estimated cost, funds raised, and remaining project funding gap.', href: '#impact', cta: 'View Funding Snapshot' },
  { title: 'Partner With Solar4Change', description: 'Information for donors, CSR partners, faith groups, community supporters, and institutions interested in clean water access.', href: '/partners#partner-form', cta: 'Become a Partner' },
]

export default function Solar4ChangePage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-6xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Clean Water | Renewable Energy | Climate Resilience</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Solar4Change Initiative</h1>
          <p className="text-xl leading-9 max-w-4xl text-gray-100">A climate resilience and renewable energy initiative providing solar-powered clean water systems to underserved communities while strengthening public health, women’s empowerment, hygiene, sanitation, and long-term community resilience.</p>
        </div>
      </section>

      <section className="py-24 bg-white"><div className="container-width grid lg:grid-cols-2 gap-12 items-center"><div className="rounded-3xl border border-softGray shadow-sm bg-lightBlue p-10"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Program Overview</p><h2 className="text-4xl font-bold text-darkNavy mb-6">Clean water powered by sustainable energy</h2><p className="text-charcoal leading-8 text-lg mb-6">Solar4Change responds to the daily challenge of clean water access in underserved communities. By using solar-powered borehole systems, the initiative combines safe water access with renewable energy, climate resilience, and community-led sustainability.</p><p className="text-charcoal leading-8 text-lg">The project supports public health, reduces the burden on women and children, improves hygiene and sanitation, and strengthens long-term community infrastructure.</p></div><div className="rounded-3xl bg-lightGreen p-10 border border-softGray"><h3 className="text-3xl font-bold text-darkNavy mb-6">Why it matters</h3><p className="text-charcoal leading-8 text-lg">Water insecurity affects health, education, productivity, dignity, and community resilience. Solar-powered systems provide a more sustainable approach by reducing dependence on unreliable energy sources and supporting long-term access to safe water.</p></div></div></section>

      <section className="py-24 bg-lightGreen"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Implementation Model</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">How Solar4Change strengthens community resilience</h2><p className="text-lg text-charcoal leading-8">The initiative combines clean water infrastructure, renewable energy, public health, gender-sensitive impact, and community-centered sustainability.</p></div><div className="grid md:grid-cols-3 gap-8">{model.map((item) => (<article key={item.title} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm"><h3 className="text-2xl font-bold text-darkNavy mb-4">{item.title}</h3><p className="text-charcoal leading-7">{item.description}</p></article>))}</div></div></section>

      <section id="impact" className="py-24 bg-white scroll-mt-24"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Funding Snapshot</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">A practical project with a clear funding pathway</h2><p className="text-lg text-charcoal leading-8">Solar4Change is structured around measurable community infrastructure, transparent fundraising, and sustainable water access.</p></div><div className="grid md:grid-cols-3 gap-8">{impactSnapshot.map((metric) => (<div key={metric.label} className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm"><p className="text-5xl font-bold text-primaryGreen mb-4">{metric.value}</p><h3 className="text-2xl font-bold text-darkNavy mb-4">{metric.label}</h3><p className="text-charcoal leading-7">{metric.description}</p></div>))}</div></div></section>

      <section className="py-24 bg-lightBlue"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Solar4Change in Action</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Clean water as a foundation for dignity and resilience</h2><p className="text-lg text-charcoal leading-8">This initiative frames water access as more than infrastructure. It is about health, time, dignity, opportunity, and sustainable community systems.</p></div><div className="bg-white rounded-3xl p-10 border border-softGray shadow-sm max-w-5xl mx-auto"><p className="text-xl text-charcoal leading-9">Each contribution, partnership, and share brings ISIR Ghana closer to completing a solar-powered borehole that can improve public health, reduce daily burdens, and support long-term community resilience.</p></div></div></section>

      <section className="py-24 bg-white"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Partnership and Implementation Focus</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Working with communities, donors, and sustainability partners</h2><p className="text-lg text-charcoal leading-8">Solar4Change is designed for collaboration with community leaders, donors, CSR partners, faith groups, engineers, and development actors committed to water access and renewable energy.</p></div><div className="grid md:grid-cols-2 gap-8"><article className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm"><div className="w-16 h-16 rounded-2xl bg-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6">✓</div><p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Community implementation pathway</p><h3 className="text-2xl font-bold text-darkNavy mb-4">Underserved communities</h3><p className="text-charcoal leading-7">The initiative targets communities where clean water access remains a daily challenge affecting health, time, and dignity.</p></article><article className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm"><div className="w-16 h-16 rounded-2xl bg-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6">✓</div><p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Sustainability partnership pathway</p><h3 className="text-2xl font-bold text-darkNavy mb-4">Donors and technical partners</h3><p className="text-charcoal leading-7">ISIR Ghana welcomes partners who can contribute funding, technical expertise, equipment, monitoring support, or community engagement.</p></article></div></div></section>

      <section className="py-24 bg-white"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">SDG Alignment</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Advancing clean water, health, renewable energy, and climate resilience</h2></div><div className="grid md:grid-cols-3 gap-8">{['SDG 3 – Good Health and Well-being', 'SDG 6 – Clean Water and Sanitation', 'SDG 7 – Affordable and Clean Energy', 'SDG 13 – Climate Action', 'SDG 17 – Partnerships for the Goals'].map((sdg) => (<article key={sdg} className="bg-lightBlue border border-softGray rounded-3xl p-8 shadow-sm"><h3 className="text-2xl font-bold text-darkNavy mb-4">{sdg}</h3><p className="text-charcoal leading-7">Solar4Change contributes to this goal through sustainable water access, clean energy, community health, and partnership-based implementation.</p></article>))}</div></div></section>

      <section className="py-24 bg-lightGreen"><div className="container-width"><div className="text-center max-w-4xl mx-auto mb-14"><p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Resources and Program Documents</p><h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Tools for donors and implementation partners</h2><p className="text-lg text-charcoal leading-8">Access or request key documents that explain the Solar4Change model, funding pathway, implementation needs, and partnership opportunities.</p></div><div className="grid md:grid-cols-3 gap-8">{resources.map((resource) => (<article key={resource.title} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm flex flex-col"><h3 className="text-2xl font-bold text-darkNavy mb-4">{resource.title}</h3><p className="text-charcoal leading-7 mb-8 flex-grow">{resource.description}</p><Link href={resource.href} className="inline-flex items-center justify-center gap-2 bg-primaryGreen text-white px-5 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition duration-300">{resource.cta}<span aria-hidden="true">→</span></Link></article>))}</div></div></section>

      <section className="py-24 bg-darkNavy text-white"><div className="container-width text-center max-w-4xl"><h2 className="text-4xl md:text-5xl font-bold mb-6">Help complete the Solar4Change project</h2><p className="text-lg leading-8 text-gray-300 mb-10">Partner with ISIR Ghana to make clean water accessible through sustainable solar technology.</p><Link href="/partners#partner-form" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Partner With Us</Link></div></section>

      <Footer />
    </main>
  )
}
