import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const publicationCategories = [
  {
    title: 'Peer-Reviewed Articles',
    description:
      'Scientific publications, interdisciplinary research articles, and evidence-based studies addressing mental health, innovation, sustainability, and community development.',
  },
  {
    title: 'Concept Notes and Development Frameworks',
    description:
      'Institutional concept notes and scalable program frameworks designed to mobilize partnerships, funding, innovation ecosystems, and sustainable impact.',
  },
  {
    title: 'White Papers and Policy Insights',
    description:
      'Strategic analyses, policy-oriented publications, and development insights informing sustainable education, health, agriculture, and resilience systems.',
  },
  {
    title: 'Research and Impact Reports',
    description:
      'Field-based reports, monitoring and evaluation outputs, institutional learning documents, and community-centered evidence products.',
  },
  {
    title: 'Innovation and Program Documentation',
    description:
      'Documentation of STEAM programs, innovation hubs, outreach models, and scalable youth-centered technology and sustainability initiatives.',
  },
  {
    title: 'Community Learning and Knowledge Products',
    description:
      'Practical educational resources, field learning products, and community-driven documentation supporting long-term development and local empowerment.',
  },
]

const publications = [
  {
    type: 'Peer-Reviewed Research',
    title: 'Community Storytelling as a Mental Health Promotion Strategy: Evidence from Northern Ghana',
    authors: 'Hassan Mubarik Iddrisu and Abdul-Rashid Iddi',
    year: '2026',
    summary:
      'A mixed-methods study examining how culturally grounded storytelling interventions improved emotional well-being, social support, trust, and mental health resilience within communities in Northern Ghana.',
    href: '/news/community-storytelling-mental-health-ghana',
    external: 'https://doi.org/10.1177/08901171261417440',
  },
  {
    type: 'Innovation Concept Framework',
    title: 'Brick STEAM Discovery Caravan: Unlock Creativity. Build the Future.',
    authors: 'ISIR Ghana',
    year: '2026',
    summary:
      'A scalable mobile STEAM education and innovation ecosystem designed to bring hands-on robotics, engineering, creative problem-solving, and play-based learning to underserved schools across Northern Ghana.',
    href: '/news/brick-steam-kings-school',
    external: '',
  },
  {
    type: 'Maternal Health Initiative',
    title: 'Mother First Health Initiative: Caring for Mothers, Securing Futures',
    authors: 'ISIR Ghana',
    year: '2026',
    summary:
      'A maternal and community health framework integrating NHIS access support, maternal education, outreach engagement, nutrition awareness, and dignity-centered maternal healthcare systems.',
    href: '/news/mother-first-health-initiative',
    external: '',
  },
]

const researchThemes = [
  {
    title: 'STEAM Education and Innovation Ecosystems',
    description:
      'Research and practical implementation models focused on robotics, coding, engineering, creativity, experiential learning, and innovation-driven youth empowerment.',
  },
  {
    title: 'Maternal and Community Health Systems',
    description:
      'Evidence-based maternal health engagement, healthcare accessibility, nutrition awareness, NHIS support systems, and community-centered public health interventions.',
  },
  {
    title: 'Climate-Smart Agriculture and Agri-Tech',
    description:
      'Technology-enabled agriculture, smart irrigation systems, youth agri-tech innovation, sustainable farming, and climate resilience solutions.',
  },
  {
    title: 'Renewable Energy and Water Sustainability',
    description:
      'Solar-powered infrastructure, clean water access systems, environmental resilience, and sustainable rural development models.',
  },
  {
    title: 'Youth Development and Inclusive Innovation',
    description:
      'Gender-inclusive innovation systems, youth leadership, entrepreneurship pathways, and community-centered empowerment initiatives.',
  },
  {
    title: 'Monitoring, Evaluation, Accountability and Learning',
    description:
      'Data-driven impact assessment, institutional learning systems, evidence generation, and sustainable development measurement frameworks.',
  },
]

export default function PublicationsPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-lightBlue py-24">
        <div className="container-width max-w-6xl">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
            Research and Publications Hub
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-darkNavy leading-tight mb-8">
            Research, innovation, and knowledge systems for sustainable development.
          </h1>

          <p className="text-xl text-charcoal leading-9 max-w-5xl">
            ISIR Ghana produces interdisciplinary research, innovation frameworks, white papers, concept notes, impact reports, and evidence-based knowledge products that connect research with practical community-centered solutions across education, health, agriculture, climate resilience, and sustainable development.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Knowledge Infrastructure"
            title="Institutional research and learning ecosystem"
            description="This repository brings together ISIR Ghana’s scientific research, concept frameworks, policy insights, institutional reports, innovation strategies, and field-based learning documentation."
            center
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {publicationCategories.map((category) => (
              <div key={category.title} className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{category.title}</h3>
                <p className="text-charcoal leading-7">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Featured Knowledge Products"
            title="Selected research, frameworks, and institutional insights"
            description="Explore ISIR Ghana’s growing body of scientific publications, development frameworks, innovation concepts, and community-centered evidence products."
            center
          />

          <div className="space-y-8">
            {publications.map((publication) => (
              <article key={publication.title} className="bg-white border border-softGray rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="max-w-4xl">
                    <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
                      {publication.type}
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-darkNavy leading-tight mb-4">
                      {publication.title}
                    </h2>

                    <p className="text-charcoal mb-4">
                      <span className="font-semibold">Authors:</span> {publication.authors} |
                      <span className="font-semibold"> Year:</span> {publication.year}
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
            eyebrow="Strategic Research Themes"
            title="Areas of knowledge generation and innovation"
            description="ISIR Ghana’s research ecosystem focuses on interdisciplinary themes that strengthen innovation, sustainability, resilience, and community-centered development."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchThemes.map((theme) => (
              <div key={theme.title} className="bg-lightBlue border border-softGray rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{theme.title}</h3>
                <p className="text-charcoal leading-7">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Collaborate on research, innovation, and evidence-driven development
          </h2>

          <p className="text-lg leading-8 text-gray-300 mb-10">
            ISIR Ghana welcomes interdisciplinary research collaborations, policy partnerships, innovation ecosystem development, white paper production, impact evaluation, community studies, and evidence-based program design opportunities.
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
