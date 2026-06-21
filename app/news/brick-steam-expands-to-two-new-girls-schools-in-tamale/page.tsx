import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Brick STEAM Discovery Caravan Expands to Two New Girls' Schools in Tamale | ISIR Ghana",
  description:
    "ISIR Ghana, in partnership with GEM-GHANA, will implement the Brick STEAM Discovery Caravan at Zosimli Girls Junior High School and Tamale Metro Girls Model JHS on 24 June 2026.",
}

export default function BrickSteamGirlsSchoolsExpansionPage() {
  return (
    <main>
      <Navbar />

      <article>
        <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
          <div className="container-width max-w-5xl">
            <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
              STEAM Education | Partnership | Program Expansion
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Brick STEAM Discovery Caravan Expands to Two New Girls&apos; Schools in Tamale
            </h1>
            <p className="text-xl leading-9 max-w-4xl text-gray-100">
              ISIR Ghana, in partnership with GEM-GHANA, is expanding the Brick STEAM Discovery Caravan to two new girls&apos; schools in Tamale on 24 June 2026.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width max-w-5xl">
            <div className="relative aspect-[9/13] md:aspect-[16/10] rounded-3xl overflow-hidden border border-softGray shadow-sm bg-white mb-12">
              <Image
                src="/images/news/brick-steam-zosimli-tamale-metro-june-2026.svg"
                alt="Brick STEAM Discovery Caravan flyer for Zosimli Girls Junior High School and Tamale Metro Girls Model JHS"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none prose-headings:text-darkNavy prose-p:text-charcoal prose-p:leading-8">
              <p>
                The Institute for Sustainable and Innovative Research Ghana, ISIR Ghana, in partnership with GEM-GHANA, Girls Empowerment Mission, is pleased to announce the upcoming implementation of the Brick STEAM Discovery Caravan at two new partner schools in Tamale on 24 June 2026.
              </p>

              <p>
                The outreach sessions will take place at Zosimli Girls Junior High School from 10:00 AM to 11:00 AM and Tamale Metro Girls Model JHS from 12:30 PM to 1:30 PM.
              </p>

              <h2>Expanding practical STEAM learning for girls</h2>
              <p>
                The Brick STEAM Discovery Caravan is designed to make Science, Technology, Engineering, Arts, and Mathematics education more accessible, engaging, and practical for young learners through hands-on building activities and collaborative problem-solving exercises.
              </p>

              <p>
                This expansion to two girls&apos; schools reflects a deliberate commitment to increasing girls&apos; exposure to practical STEAM learning and helping more learners see themselves as future innovators, engineers, scientists, designers, builders, and leaders.
              </p>

              <h2>What students will experience</h2>
              <p>
                Students will participate in brick-building challenges, engineering and design activities, teamwork exercises, creativity sessions, and career inspiration discussions. These experiences are intended to strengthen critical thinking, communication, collaboration, confidence, and innovation skills.
              </p>

              <p>
                The sessions will build on learning from previous Brick STEAM Discovery Caravan activities, including sessions at Bethany MA Junior High School and The Kings School. To date, the Caravan has directly reached 90 Brick STEAM learners, including 54 girls, representing 60 percent female participation across documented Brick STEAM sessions.
              </p>

              <h2>Partnership with GEM-GHANA</h2>
              <p>
                ISIR Ghana&apos;s partnership with GEM-GHANA continues to strengthen the reach and relevance of the Brick STEAM Discovery Caravan. The collaboration brings together shared commitments to education, empowerment, creativity, and practical learning for young people in Northern Ghana.
              </p>

              <p>
                As the program continues to grow, ISIR Ghana remains committed to building a stronger and more inclusive STEAM learning ecosystem across Northern Ghana.
              </p>

              <h2>Unlock Creativity. Build the Future.</h2>
              <p>
                The upcoming sessions at Zosimli Girls Junior High School and Tamale Metro Girls Model JHS represent another step toward making practical STEAM education more visible, inclusive, and inspiring for young learners.
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
