import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import ProgramCard from '@/components/ProgramCard'

const programs = [
  {
    title: 'Brick STEAM Discovery Caravan',
    description:
      'A mobile STEAM education initiative delivering hands-on learning, creative engineering challenges, robotics exposure, and play-based innovation activities to underserved schools and communities across Northern Ghana. The program aims to reach 3,000 children and establish a future Northern Regional STEAM Discovery Hub.',
    imageSrc: '/images/programs/brick-steam.png',
    imageAlt:
      'Students, teachers, facilitators, volunteers, ISIR Ghana founders, and STEM Rising Mind Foundation representatives after a Brick STEAM Discovery Caravan session.',
  },
  {
    title: 'SheSTEAM Ghana',
    description:
      'A girls-focused innovation and technology initiative equipping students with practical skills in coding, electronics, Arduino systems, ESP32 microcontrollers, and community-centered problem solving. The program creates pathways into ISIR Ghana’s future STEAM Innovation Hub while promoting gender inclusion in science and technology.',
    imageSrc: '/images/programs/shesteam.png',
    imageAlt:
      'Girls and young people participating in coding, electronics, and innovation activities during an ISIR Ghana SheSTEAM session.',
  },
  {
    title: 'Mother First Health Initiative',
    description:
      'A maternal health and community wellbeing initiative supporting expectant mothers through NHIS renewal support, maternal education, nutrition engagement, delivery kits, and evidence-based community outreach designed to improve maternal and newborn outcomes in underserved communities.',
    imageSrc: '/images/programs/mothers-first.png',
    imageAlt:
      'A nurse speaking to expectant mothers and new mothers during a maternal and child health education session.',
  },
  {
    title: 'AgriSTEAM Innovation Hub',
    description:
      'A technology-driven agriculture and youth innovation ecosystem designed to train young people in smart agriculture, coding, IoT systems, automation, climate-smart farming, and agri-tech entrepreneurship through hands-on innovation and prototype development.',
  },
  {
    title: 'Solar4Change Initiative',
    description:
      'A climate resilience and renewable energy initiative providing solar-powered clean water systems to underserved communities while strengthening public health, women’s empowerment, sustainable infrastructure, and community-led water management systems.',
  },
  {
    title: 'RuralStar Initiative',
    description:
      'A rural education recognition and motivation initiative rewarding high-performing pupils and outstanding teachers with learning materials, mentorship opportunities, and community recognition to strengthen educational equity and learning motivation across Northern Ghana.',
    imageSrc: '/images/programs/ruralstar.JPG',
    imageAlt:
      'RuralStar Initiative education recognition and motivation activity supporting pupils and teachers in Northern Ghana.',
  },
]

export default function ProgramsPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-5xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
            Our Programs
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Research-driven initiatives designed for measurable and sustainable impact.
          </h1>

          <p className="text-xl leading-9 max-w-4xl text-gray-100">
            ISIR Ghana develops multidisciplinary programs that combine research, innovation, technology, education, community engagement, sustainability, and strategic partnerships to address real-world development challenges across Northern Ghana.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Flagship Initiatives"
            title="Programs built for long-term systems transformation"
            description="Each ISIR Ghana initiative is designed as a scalable ecosystem that combines evidence, innovation, community participation, and measurable implementation outcomes."
            center
          />

          <div className="grid md:grid-cols-2 gap-10">
            {programs.map((program) => (
              <ProgramCard
                key={program.title}
                title={program.title}
                description={program.description}
                imageSrc={program.imageSrc}
                imageAlt={program.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Implementation Model"
            title="How ISIR Ghana designs sustainable interventions"
            description="Our programs are structured around evidence generation, local participation, measurable impact, and long-term sustainability."
            center
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Identify Community Challenges',
              'Generate Evidence and Research',
              'Co-Design Community Solutions',
              'Implement and Build Capacity',
              'Monitor, Evaluate, and Learn',
              'Scale Sustainable Innovations',
            ].map((step, index) => (
              <div
                key={step}
                className="bg-white rounded-3xl p-8 shadow-sm border border-softGray"
              >
                <div className="text-primaryGreen text-4xl font-bold mb-4">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold text-darkNavy mb-3">
                  {step}
                </h3>

                <p className="text-charcoal leading-7">
                  ISIR Ghana integrates research, innovation, partnerships, and community-centered implementation to create practical and scalable development solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner With ISIR Ghana to Scale Sustainable Impact
          </h2>

          <p className="text-lg leading-8 text-gray-300 mb-10">
            ISIR Ghana welcomes collaboration with donors, NGOs, educational institutions, CSR programs, research organizations, and development partners committed to advancing innovation, education, health, climate resilience, and sustainable community transformation.
          </p>

          <Link href="/partners#partner-form" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition">
            Become a Strategic Partner
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
