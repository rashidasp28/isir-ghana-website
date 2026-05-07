import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import ProgramCard from '@/components/ProgramCard'

const programs = [
  {
    title: 'Brick STEAM Discovery Caravan',
    description: 'A mobile hands-on STEAM outreach program bringing creativity, engineering, design thinking, and problem-solving to basic schools in Northern Ghana.',
    imageSrc: '/images/programs/brick-steam.png',
    imageAlt: 'Students, teachers, facilitators, volunteers, ISIR Ghana founders, and STEM Rising Mind Foundation representatives after a Brick STEAM Discovery Caravan session.',
  },
  {
    title: 'SheSTEAM Project',
    description: 'A girls-focused innovation program introducing students to electronics, coding, sensors, and creative problem-solving.',
    imageSrc: '/images/programs/shesteam.png',
    imageAlt: 'Girls and young people participating in coding, electronics, and innovation activities during an ISIR Ghana SheSTEAM session.',
  },
  {
    title: 'Mothers First Health Initiative',
    description: 'A community-centered maternal and child health initiative strengthening antenatal support, child health awareness, and local health knowledge.',
    imageSrc: '/images/programs/mothers-first.png',
    imageAlt: 'A nurse speaking to expectant mothers and new mothers during a maternal and child health education session.',
  },
  {
    title: 'AgriSmart Ghana',
    description: 'A climate-smart agriculture initiative supporting farmers with practical knowledge, data, and sustainable farming approaches.',
  },
  {
    title: 'Solar4Change',
    description: 'A renewable energy and water-access initiative supporting climate resilience in underserved rural communities.',
  },
]

export default function ProgramsPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-5xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Our Programs</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Practical initiatives designed for measurable development impact.</h1>
          <p className="text-xl leading-9 max-w-3xl text-gray-100">ISIR Ghana’s programs combine research, local knowledge, hands-on learning, capacity building, and strategic partnerships.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Program Philosophy"
            title="Programs built for real-world impact"
            description="Each initiative responds to a real community need, is informed by evidence, and is structured to produce measurable outcomes."
            center
          />

          <div className="grid md:grid-cols-2 gap-10">
            {programs.map((program) => (
              <ProgramCard key={program.title} title={program.title} description={program.description} imageSrc={program.imageSrc} imageAlt={program.imageAlt} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Our Method"
            title="How we design our programs"
            description="Every ISIR Ghana program follows a structured pathway from evidence to implementation, learning, and scale."
            center
          />

          <div className="grid md:grid-cols-3 gap-8">
            {['Identify the Challenge', 'Generate Evidence', 'Co-Design Solutions', 'Implement and Train', 'Monitor and Learn', 'Scale What Works'].map((step, index) => (
              <div key={step} className="bg-white rounded-3xl p-8 shadow-sm border border-softGray">
                <div className="text-primaryGreen text-4xl font-bold mb-4">0{index + 1}</div>
                <h3 className="text-2xl font-bold text-darkNavy mb-3">{step}</h3>
                <p className="text-charcoal leading-7">We use evidence, community insight, and practical implementation to strengthen sustainable program outcomes.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Support a Program. Strengthen a Community.</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Partners can sponsor school outreach, fund SheSTEAM cohorts, support maternal health education, invest in farmer resilience, or help deliver solar-powered community solutions.</p>
          <button className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Become a Program Partner</button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
