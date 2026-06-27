import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Brick STEAM Discovery Caravan Inspires 40 Girls at Zosimli Girls Model JHS | ISIR Ghana',
  description:
    'ISIR Ghana and GEM-GHANA delivered the Brick STEAM Discovery Caravan at Zosimli Girls Model JHS, directly engaging 40 girls and reaching 15 additional learners through hands-on STEAM and life skills learning.',
}

export default function ZosimliGirlsModelJHSPage() {
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
              Brick STEAM Discovery Caravan Inspires 40 Girls at Zosimli Girls Model JHS
            </h1>
            <p className="text-xl leading-9 max-w-4xl text-gray-100">
              ISIR Ghana and GEM-GHANA expanded practical STEAM learning to Zosimli Girls Model JHS, where learner excitement turned a planned one-hour session into an extended hands-on experience.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width max-w-5xl">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-softGray shadow-sm bg-lightBlue mb-12">
              <Image
                src="/images/news/zosimli-girls-model-jhs.PNG"
                alt="Brick STEAM Discovery Caravan session at Zosimli Girls Model JHS"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="bg-lightBlue rounded-3xl p-8 border border-softGray mb-12">
              <h2 className="text-3xl font-bold text-darkNavy mb-6">Session at a Glance</h2>
              <div className="grid sm:grid-cols-2 gap-6 text-charcoal leading-7">
                <p><strong>School:</strong> Zosimli Girls Model JHS</p>
                <p><strong>Date:</strong> 24 June 2026</p>
                <p><strong>Time:</strong> 10:00 AM – 12:45 PM</p>
                <p><strong>Direct participants:</strong> 40 girls</p>
                <p><strong>Indirect participants:</strong> 15 learners</p>
                <p><strong>Implementation partner:</strong> GEM-GHANA</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:text-darkNavy prose-p:text-charcoal prose-p:leading-8">
              <p>
                The Institute for Sustainable and Innovative Research (ISIR Ghana), in partnership with GEM-GHANA (Girls Empowerment Mission), successfully delivered another edition of the Brick STEAM Discovery Caravan at Zosimli Girls Model Junior High School on 24 June 2026.
              </p>

              <p>
                The session directly engaged 40 girls and reached 15 additional learners indirectly. Although the outreach was originally planned for one hour, the excitement, focus, and determination of the students extended the session to 12:45 PM as learners insisted on completing and improving their builds.
              </p>

              <h2>Learning Through Building</h2>
              <p>
                Learners worked in teams using LEGO-based learning materials to design and construct fire trucks, harvesters, speedsters, motorcycles, flowers, rockets, and other creative models. Through the building process, students explored engineering design, teamwork, communication, creativity, and practical problem-solving.
              </p>

              <p>
                The session showed how quickly learners can move from curiosity to confidence when they are given access to practical materials, patient facilitation, and a supportive learning environment.
              </p>

              <h2>Life Skills Session Led by GEM-GHANA</h2>
              <p>
                In addition to the practical STEAM activities, learners participated in an engaging life skills session facilitated by GEM-GHANA, focusing on staying safe in an increasingly vulnerable environment.
              </p>

              <p>
                The interactive discussion encouraged students to think critically about personal safety, responsible decision-making, self-confidence, and protecting themselves both within and beyond the school environment. By combining practical STEAM education with life skills and girls’ empowerment, the partnership between ISIR Ghana and GEM-GHANA provided learners with a more holistic educational experience.
              </p>

              <h2>Partnership That Made the Session Work</h2>
              <p>
                The success of the session reflected the complementary strengths of both organizations. ISIR Ghana led the hands-on Brick STEAM activities through its STEAM Trainer, Khadija Ibrahim, who guided learners in engineering design, creativity, teamwork, and problem-solving using LEGO-based learning.
              </p>

              <p>
                GEM-GHANA was fully represented by its Founder, Abdul-Rafiu, and STEAM Volunteers Faaliha and Swaad, who supported implementation and led the life skills component. Teachers from Zosimli Girls Model JHS also actively supported their students and expressed satisfaction at seeing the excitement and confidence on the faces of the learners.
              </p>

              <h2>Expanding Opportunities for Girls in STEAM</h2>
              <p>
                The Zosimli Girls Model JHS session represents another important step in expanding the Brick STEAM Discovery Caravan to more girls’ schools in Tamale. It reflects ISIR Ghana and GEM-GHANA’s shared commitment to helping girls see themselves as future innovators, engineers, scientists, and leaders.
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
