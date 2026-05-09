import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const resources = [
  {
    title: 'ISIR Ghana White Paper',
    category: 'White Paper',
    description:
      'A strategic overview of ISIR Ghana’s mission, focus areas, theory of change, sustainability model, and development priorities.',
    file: '/documents/ISIR_Ghana_White_Paper_Final.pdf',
    status: 'Coming Soon',
  },
  {
    title: 'Brick STEAM Discovery Caravan Concept Note',
    category: 'Concept Note',
    description:
      'A program framework describing ISIR Ghana’s mobile STEAM education model for practical engineering, creativity, robotics, and innovation learning.',
    file: '/documents/brick-steam-discovery-caravan.pdf',
    status: 'Coming Soon',
  },
  {
    title: 'Mother First Health Initiative Brief',
    category: 'Program Brief',
    description:
      'A maternal health initiative brief focused on antenatal care, maternal nutrition, NHIS support, newborn outcomes, and community health engagement.',
    file: '/documents/mother-first-health-initiative.pdf',
    status: 'Coming Soon',
  },
  {
    title: 'ISIR Ghana STEAM Curriculum Framework',
    category: 'Curriculum Framework',
    description:
      'A donor and government-ready curriculum framework for Brick STEAM Discovery Caravan and SheSTEAM learning pathways.',
    file: '/documents/isir-steam-curriculum-framework.pdf',
    status: 'Coming Soon',
  },
  {
    title: 'Impact and MEAL Framework',
    category: 'Impact Framework',
    description:
      'A monitoring, evaluation, accountability, and learning framework for tracking outputs, outcomes, learning, and sustainability indicators.',
    file: '/documents/isir-impact-meal-framework.pdf',
    status: 'Coming Soon',
  },
  {
    title: 'Annual Impact Report',
    category: 'Impact Report',
    description:
      'A future downloadable annual report documenting programs, partners, reach, lessons learned, finances, and institutional progress.',
    file: '/documents/isir-annual-impact-report.pdf',
    status: 'Coming Soon',
  },
]

export default function DownloadsPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-6xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
            Downloads and Resources
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Access ISIR Ghana reports, frameworks, briefs, and knowledge products.
          </h1>

          <p className="text-xl leading-9 max-w-5xl text-gray-100">
            This resource hub provides downloadable publications, concept notes, program briefs, curriculum frameworks, impact reports, and institutional documents that support transparency, learning, research collaboration, and partnership development.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Knowledge Repository"
            title="Downloadable institutional resources"
            description="ISIR Ghana is building a formal repository of donor-ready reports, curriculum documents, research outputs, policy briefs, and program frameworks. Files will be added as they are finalized for public release."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition flex flex-col"
              >
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="bg-lightGreen text-primaryGreen px-4 py-2 rounded-full text-sm font-bold">
                    {resource.category}
                  </span>
                  <span className="text-sm text-gray-500 font-semibold">
                    {resource.status}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-darkNavy mb-4 leading-tight">
                  {resource.title}
                </h2>

                <p className="text-charcoal leading-7 mb-8 flex-grow">
                  {resource.description}
                </p>

                {resource.status === 'Available' ? (
                  <a
                    href={resource.file}
                    download
                    className="inline-flex items-center justify-center gap-2 bg-primaryGreen text-white px-5 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition duration-300"
                  >
                    Download
                    <span aria-hidden="true">↓</span>
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-primaryGreen text-primaryGreen px-5 py-3 rounded-full font-semibold hover:bg-primaryGreen hover:text-white transition duration-300"
                  >
                    Request Copy
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightBlue">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="For Partners and Donors"
              title="Need a specific document?"
              description="Some reports, proposals, financial documents, or internal frameworks may be shared selectively with verified partners, donors, institutions, and collaborators."
            />
          </div>

          <div className="bg-white rounded-3xl p-8 border border-softGray shadow-sm">
            <h3 className="text-3xl font-bold text-darkNavy mb-5">
              Request institutional documents
            </h3>
            <p className="text-charcoal leading-8 mb-8">
              Contact ISIR Ghana to request program briefs, partnership documents, concept notes, curriculum frameworks, or donor-specific reports.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition"
            >
              Contact ISIR Ghana
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
