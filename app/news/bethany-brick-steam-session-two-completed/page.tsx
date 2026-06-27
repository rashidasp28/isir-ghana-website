import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Brick STEAM Session Two Completed at Bethany MA JHS | ISIR Ghana',
  description:
    'ISIR Ghana and GEM-Ghana completed the second Brick STEAM Discovery Caravan session at Bethany MA Junior High School, directly engaging 30 students and reaching 20 more indirectly through hands-on STEAM learning.',
}

export default function BethanyBrickSteamSessionTwoCompletedPage() {
  return (
    <main>
      <Navbar />

      <article>
        <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
          <div className="container-width max-w-5xl">
            <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
              Field Story | STEAM Education | Partnership
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Session Two of the Brick STEAM Discovery Caravan Completed at Bethany MA Junior High School
            </h1>
            <p className="text-xl leading-9 max-w-4xl text-gray-100">
              ISIR Ghana and GEM-Ghana completed the second Brick STEAM Discovery Caravan session at Bethany MA JHS, giving learners another practical opportunity to build, test, improve, and showcase creative STEAM models.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width max-w-5xl">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-softGray shadow-sm bg-lightBlue mb-12">
              <Image
                src="/images/news/bethany-session-two-completed-field-photo.PNG"
                alt="Brick STEAM Discovery Caravan second session at Bethany MA Junior High School"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none prose-headings:text-darkNavy prose-p:text-charcoal prose-p:leading-8">
              <p>
                Session two of the Brick STEAM Discovery Caravan has been completed at Bethany MA Junior High School. The session directly engaged 30 students, made up of 20 girls and 10 boys, while another 20 students were pulled in indirectly before the day was over.
              </p>

              <p>
                For 60 percent of the participating students, this was their first time working with this kind of hands-on building material. It did not take long before that stopped being obvious. Once the activity began, learners quickly moved from observation to experimentation, teamwork, design, problem-solving, and confident presentation.
              </p>

              <h2>Building, testing, improving</h2>
              <p>
                Students worked in teams to build fire trucks, harvesters, speedsters, motorcycles, and nature models using LEGO-based learning materials. Some teams completed their first designs early and began improving them without being asked. Others ran into problems, debated possible solutions, tested ideas, and fixed their models together.
              </p>

              <p>
                Every build survived the final showcase. That outcome matters because the goal was not only to complete a model. The goal was to help learners experience what it means to design, test, fail safely, improve, and explain their thinking.
              </p>

              <h2>Learning through teamwork and discovery</h2>
              <p>
                The session showed how quickly learners can adapt when they are given the right environment, materials, and encouragement. Students negotiated roles, shared pieces, corrected mistakes, and supported one another as their models took shape.
              </p>

              <p>
                These moments are central to the Brick STEAM Discovery Caravan. Hands-on STEAM learning helps students connect creativity with engineering thinking, motion, structure, design, nature observation, and real-world problem-solving.
              </p>

              <h2>Partnership made the session work</h2>
              <p>
                The session was delivered through collaboration between ISIR Ghana, GEM-Ghana, Bethany MA Junior High School teachers, and ISIR Ghana volunteers. It worked because everyone in the room showed up prepared, including the students.
              </p>

              <p>
                GEM-Ghana’s involvement strengthened the implementation process and reflected the importance of partnership in expanding practical learning opportunities for young people in underserved school communities.
              </p>

              <h2>Why this session matters</h2>
              <p>
                Returning to Bethany MA Junior High School allowed ISIR Ghana and its partners to build continuity with learners and deepen the impact of the Brick STEAM Discovery Caravan. Repeated exposure matters because confidence grows when students have more than one opportunity to explore, ask questions, build, improve, and present their ideas.
              </p>

              <p>
                This second session adds another layer of evidence to ISIR Ghana’s belief that children learn deeply when education is active, practical, inclusive, and connected to creativity.
              </p>

              <h2>Looking ahead</h2>
              <p>
                ISIR Ghana will continue documenting the outcomes, stories, and learning moments from the Brick STEAM Discovery Caravan as the program expands to more schools and communities. Each session provides valuable evidence on how learners respond to practical STEAM education and how schools can be supported to make science, technology, engineering, arts, and mathematics more engaging.
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
