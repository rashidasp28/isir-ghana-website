import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const plannedKits = [
  {
    title: 'Beginner Engineering and Building Kits',
    image: '/images/stem-kits/engineering-building.svg',
    description:
      'Hands-on construction and design kits introducing young learners to engineering thinking, creativity, teamwork, and problem-solving through interactive building activities.',
  },
  {
    title: 'Arduino and ESP32 Innovation Kits',
    image: '/images/stem-kits/arduino-kit.svg',
    description:
      'Practical electronics and coding kits supporting programming, sensors, automation, IoT systems, and real-world technology prototyping for youth innovators.',
  },
  {
    title: 'Robotics and Coding Starter Kits',
    image: '/images/stem-kits/engineering-building.svg',
    description:
      'Entry-level robotics learning systems designed to help learners explore computational thinking, robotics logic, coding fundamentals, and creative experimentation.',
  },
  {
    title: 'Renewable Energy Learning Kits',
    image: '/images/stem-kits/renewable-energy.svg',
    description:
      'Interactive clean energy learning tools introducing students to solar energy, sustainability systems, environmental resilience, and climate-smart innovation.',
  },
  {
    title: 'SheSTEAM Innovation Kits',
    image: '/images/stem-kits/arduino-kit.svg',
    description:
      'Gender-responsive STEAM learning kits supporting girls and young women in coding, electronics, engineering, innovation leadership, and confidence building.',
  },
  {
    title: 'School Innovation Challenge Kits',
    image: '/images/stem-kits/renewable-energy.svg',
    description:
      'Collaborative classroom and bootcamp kits designed for innovation competitions, design thinking activities, prototyping, and community-centered problem solving.',
  },
]

const principles = [
  'Experiential and hands-on learning',
  'Designed for low-resource learning environments',
  'Inquiry-based and problem-solving focused',
  'Inclusive and gender-responsive learning systems',
  'Aligned with STEAM curriculum frameworks',
  'Built for creativity, innovation, and sustainability',
]

export default function StemKitsPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-6xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
            STEM Kits and Educational Resources
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Building hands-on learning systems for future innovators.
          </h1>

          <p className="text-xl leading-9 max-w-5xl text-gray-100">
            ISIR Ghana is developing affordable, inclusive, and innovation-driven STEAM learning kits and educational resources designed for schools, youth programs, underserved communities, and experiential learning ecosystems across Ghana.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <Link href="/contact" className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition">
              Request Information
            </Link>

            <Link href="/programs" className="bg-white text-darkNavy px-8 py-4 rounded-full font-semibold text-lg hover:bg-lightBlue transition">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width max-w-6xl">
          <SectionHeader
            eyebrow="Educational Innovation Vision"
            title="More than products, these are learning ecosystems"
            description="ISIR Ghana’s educational kits are designed to support experiential learning, creativity, innovation, engineering thinking, coding literacy, sustainability education, and community-centered problem solving."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plannedKits.map((kit) => (
              <div
                key={kit.title}
                className="bg-white border border-softGray rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-56 w-full bg-lightGreen">
                  <Image
                    src={kit.image}
                    alt={kit.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-darkNavy mb-4 leading-tight">
                    {kit.title}
                  </h3>

                  <p className="text-charcoal leading-7">
                    {kit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Learning Philosophy"
              title="Designed for experiential and inclusive education"
              description="The ISIR Ghana STEAM learning ecosystem integrates curriculum development, design thinking, creativity, coding, sustainability, and inquiry-based learning into practical educational experiences."
            />
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-softGray">
            <ul className="space-y-5 text-lg text-charcoal leading-8">
              {principles.map((principle) => (
                <li key={principle}>• {principle}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width max-w-5xl text-center">
          <SectionHeader
            eyebrow="Coming Soon"
            title="Educational kits for schools, learners, and innovation programs"
            description="ISIR Ghana is currently developing and refining educational kits and learning resources that will eventually support schools, innovation clubs, outreach programs, and underserved communities through accessible and practical STEAM education systems."
            center
          />

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <Link href="/contact" className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">
              Join the Waitlist
            </Link>

            <Link href="/partners" className="bg-darkNavy text-white px-8 py-4 rounded-full font-semibold text-lg">
              Partner With ISIR Ghana
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering learners through practical innovation and creativity
          </h2>

          <p className="text-lg leading-8 text-gray-300 mb-10">
            ISIR Ghana believes every child and young person should have access to hands-on learning experiences that develop creativity, confidence, technical skills, leadership, and innovation capacity for the future.
          </p>

          <Link href="/contact" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">
            Contact ISIR Ghana
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
