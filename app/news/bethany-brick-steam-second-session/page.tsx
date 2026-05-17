import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Brick STEAM Discovery Caravan Returns to Bethany MA JHS | ISIR Ghana',
  description:
    'ISIR Ghana returns to Bethany MA Junior High School for the second session of the Brick STEAM Discovery Caravan, expanding hands-on engineering, creativity, and practical STEAM learning.',
}

export default function BethanyBrickSteamSecondSessionPage() {
  return (
    <main>
      <Navbar />

      <article>
        <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
          <div className="container-width max-w-5xl">
            <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
              Program Update | STEAM Education
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              ISIR Ghana Returns to Bethany MA JHS for the Second Session of the Brick STEAM Discovery Caravan
            </h1>
            <p className="text-xl leading-9 max-w-4xl text-gray-100">
              On 19 May 2026, ISIR Ghana continues its hands-on STEAM learning journey with learners at Bethany MA Junior High School through the second Brick STEAM Discovery Caravan session.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width max-w-5xl">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-softGray shadow-sm bg-lightBlue mb-12">
              <Image
                src="/images/news/bethany-brick-steam-second-session.jpg"
                alt="Brick STEAM Discovery Caravan second session flyer for Bethany MA Junior High School"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none prose-headings:text-darkNavy prose-p:text-charcoal prose-p:leading-8">
              <p>
                ISIR Ghana is pleased to feature the upcoming second session of the Brick STEAM Discovery Caravan at Bethany MA Junior High School. The session forms part of ISIR Ghana’s commitment to making practical STEAM education more accessible, exciting, and relevant for learners in underserved school communities.
              </p>

              <p>
                The Brick STEAM Discovery Caravan introduces learners to engineering thinking, creativity, teamwork, and problem-solving through hands-on building activities. Rather than learning science and technology only as abstract ideas, students are encouraged to build, test, explore, and explain their creations.
              </p>

              <h2>Building confidence through hands-on learning</h2>
              <p>
                The Bethany MA Junior High School session will give learners another opportunity to work with building materials, explore simple engineering concepts, and experience the joy of creating something with their own hands. Activities such as building rockets, vehicles, and other structures help students connect imagination with design, balance, structure, and motion.
              </p>

              <p>
                This second session also reinforces one of the core goals of the program: helping young learners see themselves as future innovators, builders, engineers, scientists, and problem-solvers.
              </p>

              <h2>Why Bethany MA JHS matters to the Caravan journey</h2>
              <p>
                Bethany MA Junior High School holds a special place in the Brick STEAM Discovery Caravan journey because it served as one of the earliest implementation sites for the program. Returning to the school allows ISIR Ghana to deepen engagement, strengthen continuity, and build on the curiosity already sparked among learners.
              </p>

              <p>
                Through repeated exposure, students are more likely to gain confidence, improve teamwork, ask better questions, and begin to understand how practical STEAM skills can connect to future careers and community solutions.
              </p>

              <h2>A wider vision for STEAM education in Northern Ghana</h2>
              <p>
                The Brick STEAM Discovery Caravan is part of ISIR Ghana’s broader vision to transform access to practical STEAM learning across Northern Ghana. The program uses a mobile outreach model to bring creative engineering, robotics exposure, and problem-solving activities to schools that may have limited access to laboratories, technology tools, or practical learning materials.
              </p>

              <p>
                By working with schools, volunteers, education stakeholders, and community partners, ISIR Ghana is building a pathway toward a stronger STEAM learning ecosystem that can inspire learners from an early age.
              </p>

              <h2>Looking ahead</h2>
              <p>
                ISIR Ghana will continue documenting the outcomes, stories, and learning moments from the Brick STEAM Discovery Caravan as the program expands. Each session provides valuable insight into how young learners respond to practical education and how schools can be supported to make science, technology, engineering, arts, and mathematics more engaging.
              </p>

              <p>
                The second session at Bethany MA Junior High School is another step toward unlocking creativity and building the future through practical, inclusive, and community-centered STEAM education.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/programs/brick-steam-discovery-caravan" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">
                Explore Brick STEAM
              </Link>
              <Link href="/partners#partner-form" className="inline-flex bg-darkNavy text-white px-8 py-4 rounded-full font-semibold text-lg">
                Partner With ISIR Ghana
              </Link>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}
