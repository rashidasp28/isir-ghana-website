import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import FocusCard from '@/components/FocusCard'
import ProgramCard from '@/components/ProgramCard'
import ImpactSlider from '@/components/ImpactSlider'

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden text-white min-h-[720px] flex items-center">
        <Image
          src="/images/homepage/hero.png"
          alt="ISIR Ghana students, facilitators, or community members engaged in hands-on learning and innovation outreach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-darkNavy/95 via-darkNavy/75 to-primaryBlue/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-darkNavy/80 via-transparent to-transparent"></div>

        <div className="container-width relative z-10 max-w-5xl py-32">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
            Sustainability Through Innovation
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Bridging Research, Innovation, and Community Action.
          </h1>

          <p className="text-xl leading-9 max-w-3xl text-gray-100 mb-10">
            ISIR Ghana advances sustainable development through evidence-based research,
            practical programs, STEAM education, climate resilience, agriculture,
            and community-centered innovation.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/programs" className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition">
              Explore Our Work
            </Link>

            <Link href="/partners" className="bg-white text-darkNavy px-8 py-4 rounded-full font-semibold text-lg hover:bg-lightBlue transition">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Our Focus Areas"
            title="Building Sustainable Futures Across Ghana"
            description="ISIR Ghana works across interconnected sectors that shape resilient communities and long-term development."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FocusCard title="STEAM Education" description="Hands-on learning experiences that inspire creativity, innovation, and problem-solving among young people." />
            <FocusCard title="Maternal Health" description="Community-centered approaches that strengthen maternal and child health awareness and wellbeing." />
            <FocusCard title="Agriculture" description="Climate-smart agriculture and farmer resilience initiatives for sustainable livelihoods." />
            <FocusCard title="Climate Change" description="Renewable energy, resilience-building, and environmental sustainability initiatives." />
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightBlue">
        <div className="container-width">
          <SectionHeader
            eyebrow="Flagship Programs"
            title="Programs Creating Practical Impact"
            description="Our initiatives combine research, innovation, training, and community engagement to produce measurable outcomes."
          />

          <div className="grid md:grid-cols-2 gap-10">
            <ProgramCard
              title="Brick STEAM Discovery Caravan"
              description="A mobile hands-on STEAM outreach initiative bringing practical science and engineering learning to schools in Northern Ghana."
              imageSrc="/images/programs/brick-steam.png"
              imageAlt="Students actively participating in the ISIR Ghana Brick STEAM Discovery Caravan through hands-on collaborative learning and creativity"
            />

            <ProgramCard
              title="SheSTEAM Project"
              description="An innovation-focused program empowering girls and young people with coding, electronics, and creative technology skills."
              imageSrc="/images/programs/shesteam.png"
              imageAlt="Girls and young people participating in coding, electronics, and innovation activities during an ISIR Ghana SheSTEAM session"
            />
          </div>
        </div>
      </section>

      <ImpactSlider />

      <Footer />
    </main>
  )
}
