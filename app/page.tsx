import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'
import FocusCard from '@/components/FocusCard'
import ProgramCard from '@/components/ProgramCard'
import ImpactSlider from '@/components/ImpactSlider'
import ImpactDashboard from '@/components/ImpactDashboard'

const heroSlides = [
  '/images/homepage/hero.png',
  '/images/gallery/steam/brick-steam-building-session-1.png',
  '/images/gallery/steam/shesteam-girls-coding-1.png',
  '/images/gallery/health/maternal-health-session-1.png',
  '/images/gallery/community/isir-team-outreach-1.png',
  '/images/gallery/research/scientific-presentation-1.png',
]

const featuredVideos = [
  {
    title: 'Innovation in Action',
    description: 'A visual glimpse into ISIR Ghana’s community-centered innovation, education, research, and outreach activities across Northern Ghana.',
    src: '/videos/hero/isir-hero-video.mp4',
  },
  {
    title: 'Brick STEAM Discovery Caravan',
    description: 'Children exploring engineering, creativity, robotics, and hands-on learning through ISIR Ghana’s mobile STEAM outreach initiative.',
    src: '/videos/programs/lego-building-activity-1.mp4',
  },
  {
    title: 'Future Innovators in Action',
    description: 'Students building confidence, teamwork, coding skills, and problem-solving abilities through practical experiential learning.',
    src: '/videos/programs/lego-building-activity-1.mp4',
  },
]

const latestStories = [
  {
    title: 'ISIR Ghana Launches Mother First Health Initiative',
    category: 'Maternal Health',
    href: '/news/mother-first-health-initiative',
    image: '/images/field/mother-first-health-initiative.jpg',
  },
  {
    title: 'Brick STEAM Discovery Caravan reaches The Kings School',
    category: 'STEAM Education',
    href: '/news/brick-steam-kings-school',
    image: '/images/field/brick-steam-1.jpg',
  },
  {
    title: 'Community Storytelling and Mental Health in Northern Ghana',
    category: 'Research Publication',
    href: '/news/community-storytelling-mental-health-ghana',
    image: '/images/field/community-engagement-1.jpeg',
  },
]

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden text-white min-h-[760px] flex items-center">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div key={slide} className="hero-slide">
              <Image
                src={slide}
                alt={`ISIR Ghana impact image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-darkNavy/95 via-darkNavy/75 to-primaryBlue/35"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-darkNavy/85 via-transparent to-transparent"></div>

        <div className="container-width relative z-10 max-w-6xl py-32">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
            Sustainability Through Innovation
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 max-w-5xl">
            Building research-driven solutions for resilient communities.
          </h1>

          <p className="text-xl leading-9 max-w-4xl text-gray-100 mb-10">
            ISIR Ghana is a multidisciplinary research and innovation institute advancing STEAM education, maternal health, climate resilience, agriculture, renewable energy, and community-centered development through evidence-based programs, practical learning, and sustainable partnerships.
          </p>

          <div className="flex flex-wrap gap-5 mb-12">
            <Link href="/programs" className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition">
              Explore Our Programs
            </Link>

            <Link href="/publications" className="bg-white text-darkNavy px-8 py-4 rounded-full font-semibold text-lg hover:bg-lightBlue transition">
              View Research
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-5xl">
            {['Research and Innovation', 'Community Health and Education', 'Sustainable Development Partnerships'].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-5 py-4 text-sm font-semibold text-white">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImpactDashboard />

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
              Video Stories
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Innovation, learning, and impact in action
            </h2>
            <p className="text-lg text-white leading-8">
              Explore short visual stories documenting ISIR Ghana’s educational outreach, maternal health engagement, youth innovation activities, and community-centered development initiatives.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <article key={video.title} className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-lg">
                <div className="relative aspect-video bg-black">
                  <video className="w-full h-full object-cover" src={video.src} controls muted playsInline preload="metadata" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-3">{video.title}</h3>
                  <p className="text-gray-300 leading-7">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Strategic Focus Areas"
            title="Integrated solutions for sustainable development"
            description="ISIR Ghana operates across interconnected sectors to strengthen innovation ecosystems, improve livelihoods, and build resilient communities across Northern Ghana."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FocusCard title="STEAM Education and Innovation" description="Hands-on learning ecosystems using coding, robotics, electronics, engineering, and play-based learning to inspire future innovators." />
            <FocusCard title="Maternal and Community Health" description="Research-informed maternal health outreach, NHIS support, nutrition awareness, and dignity-centered healthcare engagement." />
            <FocusCard title="Climate-Smart Agriculture" description="Technology-driven agricultural innovation supporting youth entrepreneurship, smart farming, and climate resilience." />
            <FocusCard title="Renewable Energy and Water Access" description="Sustainable solar-powered community solutions improving access to clean water, sanitation, and environmental resilience." />
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightBlue">
        <div className="container-width">
          <SectionHeader
            eyebrow="Flagship Initiatives"
            title="Programs designed for measurable and scalable impact"
            description="ISIR Ghana’s flagship initiatives combine research, innovation, training, sustainability, and community engagement to solve practical development challenges."
          />

          <div className="grid md:grid-cols-3 gap-10">
            <ProgramCard
              title="Brick STEAM Discovery Caravan"
              description="A mobile STEAM learning initiative bringing practical engineering, robotics, creativity, and hands-on problem-solving opportunities to underserved schools across Northern Ghana."
              imageSrc="/images/field/brick-steam-2.png"
              imageAlt="Students participating in a Brick STEAM Discovery Caravan activity"
            />

            <ProgramCard
              title="SheSTEAM Ghana"
              description="A gender-inclusive innovation initiative empowering students, especially girls, through coding, electronics, Arduino and ESP32 projects, and technology-driven problem-solving."
              imageSrc="/images/programs/shesteam.png"
              imageAlt="Girls and young people participating in coding and innovation activities"
            />

            <ProgramCard
              title="Mother First Health Initiative"
              description="A maternal health and community support initiative improving healthcare access, maternal education, NHIS coverage, and maternal well-being in underserved communities."
              imageSrc="/images/field/health-outreach-1.jpg"
              imageAlt="Health outreach session with mothers and community health workers"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Research and Publications"
              title="Knowledge that drives action and innovation"
              description="ISIR Ghana produces research, policy insights, impact stories, and evidence-based learning products that support sustainable development and community transformation."
            />
            <p className="text-charcoal leading-8 text-lg mb-8">
              From peer-reviewed mental health research to innovation concept notes, maternal health initiatives, climate resilience solutions, and youth-focused STEAM programs, ISIR Ghana uses evidence to strengthen policy, practice, and public understanding.
            </p>
            <Link href="/publications" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">
              Explore Publications
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-72 rounded-3xl overflow-hidden bg-lightBlue">
              <Image src="/images/field/community-engagement-2.jpeg" alt="Community engagement activity" fill className="object-cover" />
            </div>
            <div className="relative h-72 rounded-3xl overflow-hidden bg-lightBlue mt-10">
              <Image src="/images/field/health-outreach-2.jpg" alt="Health outreach activity" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Latest News and Field Updates"
            title="Stories from communities, classrooms, and research activities"
            description="Follow ISIR Ghana’s latest outreach activities, research publications, maternal health initiatives, educational programs, and institutional developments."
            center
          />

          <div className="grid md:grid-cols-3 gap-8">
            {latestStories.map((story) => (
              <article key={story.title} className="bg-white border border-softGray rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative h-60 bg-white">
                  <Image src={story.image} alt={story.title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-primaryGreen text-sm font-semibold uppercase tracking-wide mb-3">{story.category}</p>
                  <h3 className="text-2xl font-bold text-darkNavy mb-6">{story.title}</h3>
                  <Link href={story.href} className="text-primaryBlue font-semibold">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImpactSlider />

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner With ISIR Ghana to Build Sustainable Futures</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">
            ISIR Ghana welcomes collaboration with development agencies, foundations, researchers, schools, private sector actors, NGOs, and community organizations committed to innovation, sustainability, and inclusive development.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href="/partners" className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">
              Partner With Us
            </Link>
            <Link href="/get-involved" className="bg-white text-darkNavy px-8 py-4 rounded-full font-semibold text-lg">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
