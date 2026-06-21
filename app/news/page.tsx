import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const internationalDayOfLightImage = '/images/news/international-day-of-light-isir-ghana.PNG'
const brickSteamExpansionImage = '/images/news/brick-steam-zosimli-tamale-metro-june-2026.svg'

const categories = [
  'Program Updates',
  'Field Stories',
  'Research Insights',
  'Partner Spotlights',
  'Youth Innovation',
  'Donor Updates',
]

const latestStories = [
  {
    title: "Brick STEAM Discovery Caravan Expands to Two New Girls' Schools in Tamale",
    category: 'Program Expansion',
    summary:
      'ISIR Ghana, in partnership with GEM-GHANA, will implement the Brick STEAM Discovery Caravan at Zosimli Girls JHS and Tamale Metro Girls Model JHS on 24 June 2026.',
    href: '/news/brick-steam-expands-to-two-new-girls-schools-in-tamale',
    image: brickSteamExpansionImage,
  },
  {
    title: 'Session Two of the Brick STEAM Discovery Caravan Completed at Bethany MA Junior High School',
    category: 'Field Story',
    summary:
      'ISIR Ghana and GEM-Ghana completed the second Brick STEAM Discovery Caravan session at Bethany MA JHS, directly engaging 30 students and reaching 20 more indirectly.',
    href: '/news/bethany-brick-steam-session-two-completed',
    image: '/images/news/bethany-brick-steam-second-session.jpg',
  },
  {
    title: 'ISIR Ghana Returns to Bethany MA JHS for the Second Session of the Brick STEAM Discovery Caravan',
    category: 'Field Story',
    summary:
      'ISIR Ghana continues its practical STEAM learning journey at Bethany MA Junior High School through the second session of the Brick STEAM Discovery Caravan.',
    href: '/news/bethany-brick-steam-second-session',
    image: '/images/news/bethany-brick-steam-second-session.jpg',
  },
  {
    title: 'International Day of Light: Celebrating Science, Innovation and Discovery',
    category: 'Science Education',
    summary:
      'ISIR Ghana joins the world in celebrating the International Day of Light, highlighting science, STEM education, innovation, and sustainable development.',
    href: '/news/international-day-of-light-2026',
    image: internationalDayOfLightImage,
  },
  {
    title: 'SheSTEAM Project Launch Inspires Students at Anbariya Senior High School',
    category: 'Program Update',
    summary:
      'ISIR Ghana launched its flagship SheSTEAM Project at Anbariya Senior High School, directly engaging 15 students in hands-on electronics, coding, and innovation-driven learning.',
    href: '/news/shesteam-anbariya-launch',
    image: '/images/news/shesteam-anbariya-led-breadboard.jpg',
  },
  {
    title: 'ISIR Ghana Launches Brick STEAM Discovery Caravan at Bethany MA Junior High School',
    category: 'Program Update',
    summary:
      'ISIR Ghana launched the Brick STEAM Discovery Caravan in Tamale, directly engaging 30 students through hands-on engineering, creativity, and innovation-centered learning activities.',
    href: '/news/brick-steam-bethany-launch',
    image: '/images/news/brick-steam-bethany-brick-selection.png',
  },
  {
    title: 'Africa’s Youth Boom: Opportunity or Crisis?',
    category: 'Policy Insight',
    summary:
      'ISIR Ghana explores why Africa’s growing youth population is not a problem, but a test of leadership, investment, education, health, and inclusive systems.',
    href: '/news/africa-youth-boom',
    image: '/images/news/africa-youth-boom-cover.png',
  },
]

export default function NewsPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-5xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">News and Stories</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Latest updates, field stories, and policy insights.</h1>
          <p className="text-xl leading-9 max-w-3xl text-gray-100">Follow ISIR Ghana’s journey as we work with schools, communities, partners, youth, women, farmers, and development actors across Ghana.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Featured Story"
            title="Field stories and impact moments from ISIR Ghana"
            description="ISIR Ghana documents program learning, field outcomes, and practical development insights for communities, partners, donors, and decision-makers."
            center
          />

          <div className="grid lg:grid-cols-2 gap-10 items-center bg-lightBlue rounded-3xl p-8 md:p-12 border border-softGray">
            <div className="relative aspect-[9/13] rounded-3xl overflow-hidden bg-white border border-softGray">
              <Image
                src={brickSteamExpansionImage}
                alt="Brick STEAM Discovery Caravan expansion flyer for two girls schools in Tamale"
                fill
                className="object-contain"
              />
            </div>

            <div>
              <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Program Expansion</p>
              <h2 className="text-4xl md:text-5xl font-bold text-darkNavy mb-6">Brick STEAM Discovery Caravan Expands to Two New Girls&apos; Schools in Tamale</h2>
              <p className="text-lg text-charcoal leading-8 mb-8">ISIR Ghana, in partnership with GEM-GHANA, will implement the Brick STEAM Discovery Caravan at Zosimli Girls JHS and Tamale Metro Girls Model JHS on 24 June 2026.</p>
              <Link href="/news/brick-steam-expands-to-two-new-girls-schools-in-tamale" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition">
                Read Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Categories"
            title="Explore stories by category"
            description="Browse updates across programs, field engagement, research, partnerships, youth innovation, and donor communication."
            center
          />
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category} className="bg-white rounded-3xl p-8 shadow-sm border border-softGray">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{category}</h3>
                <p className="text-charcoal leading-7">Updates and stories that communicate ISIR Ghana’s work, learning, and growing impact.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Latest Updates"
            title="Latest stories"
            description="Read the latest ISIR Ghana insights, field updates, program stories, and development reflections."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {latestStories.map((story) => (
              <article key={story.title} className="bg-white border border-softGray rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative h-72 bg-white border-b border-softGray">
                  <Image src={story.image} alt={story.title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-primaryGreen text-sm font-semibold uppercase tracking-wide mb-3">{story.category}</p>
                  <h3 className="text-2xl font-bold text-darkNavy mb-4">{story.title}</h3>
                  <p className="text-charcoal leading-7 mb-6">{story.summary}</p>
                  <Link href={story.href} className="text-primaryBlue font-semibold">
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Every Story Is a Step Toward Impact</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Follow, share, and support ISIR Ghana as we continue building practical solutions for sustainable development across Ghana.</p>
          <Link href="/get-involved" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">
            Support Our Work
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
