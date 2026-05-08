import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const publicationCategories = [
  'Peer-Reviewed Articles',
  'White Papers',
  'Policy Briefs',
  'Research Reports',
  'Impact Reports',
  'Learning Notes',
]

const publications = [
  {
    type: 'Peer-Reviewed Article',
    title: 'Community Storytelling as a Mental Health Promotion Strategy: Evidence from Northern Ghana',
    authors: 'Hassan Mubarik Iddrisu and Abdul-Rashid Iddi',
    year: '2026',
    summary:
      'A mixed-methods study examining how culturally grounded storytelling interventions improved emotional relief, perceived social support, and interpersonal trust among adults in Northern Ghana.',
    href: '/news/community-storytelling-mental-health-ghana',
    external: 'https://doi.org/10.1177/08901171261417440',
  },
  {
    type: 'Policy Insight',
    title: 'Africa’s Youth Boom: Opportunity or Crisis?',
    authors: 'ISIR Ghana',
    year: '2026',
    summary:
      'A development insight exploring Africa’s youth population growth, education systems, employment pathways, innovation, and leadership opportunities.',
    href: '/news/africa-youth-boom',
    external: '',
  },
  {
    type: 'Program Impact Story',
    title: 'ISIR Ghana Expands Brick STEAM Discovery Caravan to The Kings School',
    authors: 'ISIR Ghana',
    year: '2026',
    summary:
      'A field-based impact story documenting hands-on STEAM education, gender inclusion, student aspirations, and partnership-driven community learning in Northern Ghana.',
    href: '/news/brick-steam-kings-school',
    external: '',
  },
]

const researchThemes = [
  'STEAM Education and Youth Innovation',
  'Mental Health and Community Wellbeing',
  'Maternal and Child Health',
  'Agriculture and Food Systems',
  'Climate Resilience and Sustainability',
  'Monitoring, Evaluation, Accountability and Learning',
]

export default function PublicationsPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-lightBlue py-24">
        <div className="container-width max-w-5xl">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Research and Publications Hub</p>
          <h1 className="text-5xl md:text-7xl font-bold text-darkNavy leading-tight mb-8">
            Evidence, insights, and knowledge products for sustainable development.
          </h1>
          <p className="text-xl text-charcoal leading-9 max-w-3xl">
            ISIR Ghana produces and shares research outputs, policy insights, white papers, reports, and learning products that connect knowledge with community action.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Knowledge Repository"
            title="What you can find here"
            description="This hub brings together ISIR Ghana’s research publications, institutional reports, policy analysis, and field-based learning products."
            center
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {publicationCategories.map((category) => (
              <div key={category} className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{category}</h3>
                <p className="text-charcoal leading-7">
                  Curated knowledge products designed to support research, development practice, donor engagement, and community-centered learning.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Featured Outputs"
            title="Selected publications and insights"
            description="Explore ISIR Ghana’s growing body of research, development insights, and documented field learning."
            center
          />

          <div className="space-y-8">
            {publications.map((publication) => (
              <article key={publication.title} className="bg-white border border-softGray rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="max-w-4xl">
                    <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">{publication.type}</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-darkNavy leading-tight mb-4">
                      {publication.title}
                    </h2>
                    <p className="text-charcoal mb-4">
                      <span className="font-semibold">Authors:</span> {publication.authors} | <span className="font-semibold">Year:</span> {publication.year}
                    </p>
                    <p className="text-lg text-charcoal leading-8">
                      {publication.summary}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 min-w-[220px]">
                    <Link href={publication.href} className="bg-primaryGreen text-white px-6 py-3 rounded-full text-center font-semibold hover:opacity-90 transition">
                      View Summary
                    </Link>
                    {publication.external && (
                      <a
                        href={publication.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-primaryBlue text-primaryBlue px-6 py-3 rounded-full text-center font-semibold hover:bg-lightBlue transition"
                      >
                        View DOI
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Research Themes"
            title="Areas of knowledge generation"
            description="ISIR Ghana’s research and publications focus on practical themes that support sustainable development, innovation, and community resilience."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchThemes.map((theme) => (
              <div key={theme} className="bg-lightBlue border border-softGray rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{theme}</h3>
                <p className="text-charcoal leading-7">
                  Evidence, field learning, and practical insights to improve programs, strengthen systems, and inform development action.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Collaborate on Research and Knowledge Products</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">
            ISIR Ghana welcomes research partnerships, policy collaborations, field studies, white paper development, and evidence-based reporting opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/contact" className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">
              Contact Us
            </Link>
            <Link href="/consultancy" className="bg-white text-darkNavy px-8 py-4 rounded-full font-semibold text-lg">
              Request Research Support
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
