import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const publicationTypes = [
  {
    title: 'White Papers and Strategic Frameworks',
    description:
      'Institutional strategy documents, development frameworks, innovation ecosystem models, and sustainability-focused publications supporting scalable impact and long-term systems transformation.',
  },
  {
    title: 'Research and Impact Reports',
    description:
      'Evidence-driven field reports, implementation studies, and impact documentation capturing measurable community outcomes, institutional learning, and program effectiveness.',
  },
  {
    title: 'Policy Briefs and Development Insights',
    description:
      'Action-oriented policy publications and analytical insights supporting informed decision-making across education, health, climate resilience, youth development, and innovation systems.',
  },
  {
    title: 'Community Needs and Systems Assessments',
    description:
      'Participatory assessments and field-based studies identifying community priorities, local challenges, service gaps, and opportunities for sustainable intervention design.',
  },
  {
    title: 'Monitoring, Evaluation and Learning Outputs',
    description:
      'Data-driven monitoring systems, accountability frameworks, outcome tracking, and organizational learning products designed to strengthen evidence-based programming.',
  },
  {
    title: 'Innovation and Knowledge Insights',
    description:
      'Practical learning products, innovation case studies, educational resources, and interdisciplinary insights supporting local empowerment and community transformation.',
  },
]

const services = [
  {
    title: 'Baseline and Endline Studies',
    description:
      'Comprehensive research studies measuring program outcomes, behavioral change, institutional growth, and long-term development impact across communities and target populations.',
  },
  {
    title: 'Community and Institutional Needs Assessments',
    description:
      'Participatory assessments that identify local priorities, operational gaps, stakeholder expectations, and evidence needed for sustainable program planning and intervention design.',
  },
  {
    title: 'Monitoring, Evaluation and Learning Systems',
    description:
      'Design and implementation of donor-ready MEL systems supporting accountability, adaptive learning, measurable outcomes, and evidence-driven organizational growth.',
  },
  {
    title: 'Policy and Strategic Advisory Support',
    description:
      'Research-informed strategy development, institutional policy guidance, sustainability planning, and evidence translation for organizations and development actors.',
  },
  {
    title: 'Program Design and Innovation Research',
    description:
      'Interdisciplinary program design support integrating innovation ecosystems, sustainability frameworks, youth engagement, community participation, and measurable impact models.',
  },
  {
    title: 'Impact Communication and Reporting',
    description:
      'Professional donor-grade reporting, impact storytelling, visualization systems, institutional communication, and evidence-based development documentation services.',
  },
]

const researchPriorities = [
  {
    title: 'Maternal, Child and Community Health',
    description:
      'Research and implementation models focused on maternal healthcare access, nutrition systems, NHIS support, community health education, and dignity-centered healthcare interventions.',
  },
  {
    title: 'STEAM Education and Youth Innovation',
    description:
      'Innovation-driven educational systems integrating coding, robotics, engineering, creativity, electronics, and experiential learning for youth empowerment.',
  },
  {
    title: 'Climate-Smart Agriculture and Food Systems',
    description:
      'Research supporting sustainable agriculture, agri-tech innovation, food systems resilience, youth agribusiness, and climate-responsive farming ecosystems.',
  },
  {
    title: 'Climate Resilience and Sustainable Communities',
    description:
      'Interdisciplinary sustainability research exploring renewable energy, water access, environmental resilience, adaptive systems, and community-centered climate action.',
  },
]

const featuredPublications = [
  {
    category: 'Peer-Reviewed Research',
    title:
      'Community Storytelling as a Mental Health Promotion Strategy: Evidence from Northern Ghana',
    summary:
      'A mixed-methods study examining how culturally grounded storytelling interventions improved emotional wellbeing, trust, social support, and community resilience among adults in Northern Ghana.',
    href: '/news/community-storytelling-mental-health-ghana',
  },
  {
    category: 'Innovation Ecosystem Framework',
    title: 'Brick STEAM Discovery Caravan: Unlock Creativity. Build the Future.',
    summary:
      'A scalable mobile STEAM education ecosystem designed to provide underserved schools with experiential learning opportunities in engineering, robotics, coding, creativity, and innovation.',
    href: '/news/brick-steam-kings-school',
  },
  {
    category: 'Maternal Health and Community Systems',
    title: 'Mother First Health Initiative: Because Every Mother Matters',
    summary:
      'A community-centered maternal health framework integrating outreach engagement, NHIS support, nutrition awareness, healthcare accessibility, and maternal wellbeing systems.',
    href: '/news/mother-first-health-initiative',
  },
]

export default function ResearchPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-lightBlue py-24">
        <div className="container-width max-w-6xl">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
            Research and Publications
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-darkNavy leading-tight mb-8">
            Advancing sustainable development through evidence, innovation, and action.
          </h1>

          <p className="text-xl text-charcoal leading-9 max-w-5xl">
            ISIR Ghana develops interdisciplinary research, innovation frameworks, policy insights, impact studies, and knowledge systems that strengthen communities, support institutional learning, and drive measurable sustainable development outcomes.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Our Research Philosophy"
            title="Research that transforms evidence into sustainable impact"
            description="ISIR Ghana combines scientific rigor, participatory engagement, innovation ecosystems, stakeholder collaboration, and practical implementation to bridge research, policy, and community-centered action."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchPriorities.map((priority) => (
              <div key={priority.title} className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{priority.title}</h3>
                <p className="text-charcoal leading-7">{priority.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Featured Publications"
            title="Research outputs, innovation frameworks, and development insights"
            description="Explore ISIR Ghana’s scientific publications, institutional frameworks, community-centered research outputs, and evidence-driven sustainability initiatives."
            center
          />

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPublications.map((publication) => (
              <article
                key={publication.title}
                className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
                  {publication.category}
                </p>

                <h3 className="text-3xl font-bold text-darkNavy mb-5 leading-tight">
                  {publication.title}
                </h3>

                <p className="text-charcoal leading-8 text-lg mb-8">
                  {publication.summary}
                </p>

                <Link
                  href={publication.href}
                  className="text-primaryBlue font-semibold text-lg"
                >
                  Read More
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Knowledge Products"
            title="Research, learning, and institutional knowledge systems"
            description="ISIR Ghana develops accessible and action-oriented knowledge products that support communities, governments, NGOs, schools, development actors, and innovation ecosystems."
            center
          />

          <div className="grid md:grid-cols-3 gap-8">
            {publicationTypes.map((type) => (
              <div key={type.title} className="bg-white rounded-3xl p-8 shadow-sm border border-softGray hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{type.title}</h3>
                <p className="text-charcoal leading-7">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightBlue">
        <div className="container-width">
          <SectionHeader
            eyebrow="Research and Advisory Services"
            title="Evidence-driven support for institutions and development partners"
            description="ISIR Ghana provides interdisciplinary research, innovation advisory, MEL systems, institutional learning, policy translation, and impact communication support for sustainable development programs and organizations."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-3xl p-8 shadow-sm border border-softGray hover:shadow-lg transition">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{service.title}</h3>
                <p className="text-charcoal leading-7">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Evidence should drive sustainable transformation
          </h2>

          <p className="text-lg leading-8 text-gray-300 mb-10">
            Collaborate with ISIR Ghana to generate interdisciplinary research, innovation frameworks, sustainability strategies, and evidence-based solutions that strengthen communities and create long-term development impact.
          </p>

          <Link
            href="/contact"
            className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex"
          >
            Collaborate on Research
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
