import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Brick STEAM Discovery Caravan Reaches 46 Girls at Tamale Metro Girls Model JHS | ISIR Ghana',
  description:
    'ISIR Ghana and GEM-GHANA delivered the Brick STEAM Discovery Caravan at Tamale Metro Girls Model JHS, directly engaging 46 girls and reaching 10 additional learners through practical STEAM and life skills learning.',
}

export default function TamaleMetroGirlsModelJHSPage() {
  return (
    <main>
      <Navbar />

      <article>
        <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
          <div className="container-width max-w-5xl">
            <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
              Field Story | Girls in STEAM | Partnership
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Brick STEAM Discovery Caravan Reaches 46 Girls at Tamale Metro Girls Model JHS
            </h1>
            <p className="text-xl leading-9 max-w-4xl text-gray-100">
              ISIR Ghana and GEM-GHANA continued the Brick STEAM Discovery Caravan expansion at Tamale Metro Girls Model JHS, creating another practical learning experience for girls in Tamale.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width max-w-5xl">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-softGray shadow-sm bg-lightBlue mb-12">
              <Image
                src="/images/news/tamale-metro-girls-model-jhs.PNG"
                alt="Brick STEAM Discovery Caravan session at Tamale Metro Girls Model JHS"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="bg-lightBlue rounded-3xl p-8 border border-softGray mb-12">
              <h2 className="text-3xl font-bold text-darkNavy mb-6">Session at a Glance</h2>
              <div className="grid sm:grid-cols-2 gap-6 text-charcoal leading-7">
                <p><strong>School:</strong> Tamale Metro Girls Model JHS</p>
                <p><strong>Date:</strong> 24 June 2026</p>
                <p><strong>Time:</strong> 1:00 PM – 3:00 PM</p>
                <p><strong>Direct participants:</strong> 46 girls</p>
                <p><strong>Indirect participants:</strong> 10 learners</p>
                <p><strong>Implementation partner:</strong> GEM-GHANA</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:text-darkNavy prose-p:text-charcoal prose-p:leading-8">
              <p>
                The Institute for Sustainable and Innovative Research (ISIR Ghana), in partnership with GEM-GHANA (Girls Empowerment Mission), successfully delivered another Brick STEAM Discovery Caravan session at Tamale Metro Girls Model Junior High School on 24 June 2026.
              </p>

              <p>
                The session directly engaged 46 girls and reached 10 additional learners indirectly. Although the outreach was originally planned for one hour, the enthusiasm of the learners transformed it into a longer, richer learning experience that continued until 3:00 PM.
              </p>

              <h2>Learning Through Building</h2>
              <p>
                Students worked in teams to design and build fire trucks, harvesters, speedsters, motorcycles, flowers, rockets, and other creative engineering models using LEGO-based learning materials.
              </p>

              <p>
                Through these hands-on activities, learners explored teamwork, engineering design, creativity, communication, resilience, and practical problem-solving. The session created space for girls to test ideas, improve their designs, and present what they had built with confidence.
              </p>

              <h2>Life Skills Session Led by GEM-GHANA</h2>
              <p>
                In addition to the practical STEAM activities, learners participated in an engaging life skills session facilitated by GEM-GHANA, focusing on staying safe in an increasingly vulnerable environment.
              </p>

              <p>
                The discussion encouraged students to reflect on personal safety, responsible decision-making, self-confidence, and protecting themselves both within and beyond the school environment. This life skills component strengthened the session by combining girls’ empowerment with practical STEAM learning.
              </p>

              <h2>Partnership Driving Greater Impact</h2>
              <p>
                The session was delivered through collaboration between ISIR Ghana, GEM-GHANA, and Tamale Metro Girls Model JHS. ISIR Ghana’s STEAM Trainer, Khadija Ibrahim, led the practical Brick STEAM activities and supported learners through the engineering and design challenges.
              </p>

              <p>
                GEM-GHANA was represented by its Founder, Abdul-Rafiu, and STEAM Volunteers Faaliha and Swaad, who supported implementation and led the life skills session. Teachers from the school also supported the session, helping learners stay engaged and confident throughout the activities.
              </p>

              <h2>Growing the Brick STEAM Discovery Caravan</h2>
              <p>
                The Tamale Metro Girls Model JHS session, together with the session at Zosimli Girls Model JHS, marks a significant expansion of the Brick STEAM Discovery Caravan into two new girls’ schools in Tamale.
              </p>

              <p>
                ISIR Ghana and GEM-GHANA remain committed to expanding access to practical STEAM education and empowering more girls to see themselves as future innovators, engineers, scientists, and leaders.
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
