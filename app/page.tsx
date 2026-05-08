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
    description: 'A short visual glimpse of ISIR Ghana’s field engagement and community-centered work.',
    src: '/videos/hero/isir-hero-video.mp4',
  },
  {
    title: 'Brick STEAM Discovery Caravan',
    description: 'Students exploring creativity, teamwork, and engineering thinking through hands-on LEGO-style building activities.',
    src: '/videos/programs/lego-building-activity-1.mp4',
  },
  {
    title: 'Hands-on Learning Moments',
    description: 'Young learners building, testing, collaborating, and discovering practical STEAM concepts through play.',
    src: '/videos/programs/lego-building-activity-1.mp4',
  },
]

const latestStories = [
  {
    title: 'Brick STEAM Discovery Caravan reaches The Kings School',
    category: 'Program Update',
    href: '/news/brick-steam-kings-school',
    image: '/images/field/brick-steam-1.jpg',
  },
  {
    title: 'Africa’s Youth Boom: Opportunity or Crisis?',
    category: 'Policy Insight',
    href: '/news/africa-youth-boom',
    image: '/images/news/africa-youth-boom-cover.png',
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
            Bridging Research, Innovation, and Community Action.
          </h1>

          <p className="text-xl leading-9 max-w-3xl text-gray-100 mb-10">
            ISIR Ghana advances sustainable development through evidence-based research, practical programs, STEAM education, public health, climate resilience, agriculture, and community-centered innovation.
          </p>

          <div className="flex flex-wrap gap-5 mb-12">
            <Link href="/programs" className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition">
              Explore Our Work
            </Link>

            <Link href="/research" className="bg-white text-darkNavy px-8 py-4 rounded-full font-semibold text-lg hover:bg-lightBlue transition">
              View Research
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
            {['Research', 'Innovation', 'Community Impact'].map((item) => (
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
              See innovation in action
            </h2>
            <p className="text-lg text-white leading-8">
              Short field videos from ISIR Ghana programs show how students, volunteers, educators, and communities engage with practical innovation, learning, and sustainable development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <article key={video.title} className="bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-lg">
                <div className="relative aspect-video bg-black">
                  <video
                    className="w-full h-full object-cover"
                    src={video.src}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  />
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

          <div className="grid md:grid-cols-3 gap-10">
            <ProgramCard
              title="Brick STEAM Discovery Caravan"
              description="A mobile hands-on STEAM outreach initiative bringing practical science and engineering learning to schools in Northern Ghana."
              imageSrc="/images/field/brick-steam-2.png"
              imageAlt="Students participating in a Brick STEAM Discovery Caravan activity"
            />

            <ProgramCard
              title="SheSTEAM Project"
              description="An innovation-focused program empowering girls and young people with coding, electronics, and creative technology skills."
              imageSrc="/images/programs/shesteam.png"
              imageAlt="Girls and young people participating in coding and innovation activities"
            />

            <ProgramCard
              title="Mothers First Health Initiative"
              description="A community-centered health initiative promoting maternal and child health education, wellbeing, and practical health awareness."
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
              title="Evidence that informs action"
              description="ISIR Ghana connects research, policy insight, and community experience to support practical development solutions."
            />
            <p className="text-charcoal leading-8 text-lg mb-8">
              From peer-reviewed mental health research to policy insights on Africa’s youth future, ISIR Ghana uses evidence to strengthen programs, partnerships, and public understanding.
            </p>
            <Link href="/research" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">
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
            eyebrow="Latest News"
            title="Stories, research, and field updates"
            description="Follow ISIR Ghana’s latest program updates, publications, and community stories."
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner With Us to Scale Community Innovation</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">
            ISIR Ghana welcomes collaboration with schools, donors, researchers, foundations, companies, and community organizations working toward sustainable impact.
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
