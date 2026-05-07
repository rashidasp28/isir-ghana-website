import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const careerData = [
  ['Nursing', '7'],
  ['Midwifery', '6'],
  ['Teaching', '3'],
  ['Medicine', '3'],
  ['Farming', '2'],
  ['Journalism', '2'],
  ['Pilot', '1'],
  ['Welding', '1'],
  ['Architecture', '1'],
  ['Not yet decided', '4'],
]

const impactData = [
  ['30', 'Students directly engaged'],
  ['18', 'Girls directly engaged'],
  ['12', 'Boys directly engaged'],
  ['30+', 'Additional students indirectly reached'],
  ['8', 'Students newly excited by engineering-related fields'],
  ['5', 'Students who saw engineering as interesting but demanding'],
]

export default function BrickSteamBethanyLaunchPage() {
  return (
    <main>
      <Navbar />

      <article>
        <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
          <div className="container-width max-w-5xl">
            <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Program Update</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">ISIR Ghana Launches Brick STEAM Discovery Caravan at Bethany MA Junior High School</h1>
            <p className="text-xl leading-9 max-w-3xl text-gray-100">On 8 December 2025, ISIR Ghana launched its flagship hands-on STEAM education initiative in Tamale, Northern Region, Ghana.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-width max-w-5xl">
            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-lg mb-10">
              <Image
                src="/images/programs/brick-steam.png"
                alt="Students, teachers, volunteers, facilitators, and ISIR Ghana leaders after the Brick STEAM Discovery Caravan launch at Bethany MA Junior High School"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 mb-12">Students, teachers, volunteers, facilitators, and ISIR Ghana leaders after the Brick STEAM Discovery Caravan launch at Bethany MA Junior High School.</p>

            <div className="prose prose-lg max-w-none text-charcoal leading-8">
              <p>
                On 8 December 2025, the Institute for Sustainable and Innovative Research Ghana successfully launched its flagship education initiative, the Brick STEAM Discovery Caravan, at Bethany MA Junior High School in Tamale, Northern Region, Ghana.
              </p>
              <p>
                The session marked the beginning of ISIR Ghana’s mission to bring hands-on Science, Technology, Engineering, Arts, and Mathematics learning directly to schools through interactive, play-based educational activities using building bricks, creative problem-solving exercises, and innovation-centered learning experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-lightBlue">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-3">Impact Data</p>
              <h2 className="text-4xl md:text-5xl font-bold text-darkNavy">Direct reach, gender inclusion, and early career-interest shifts</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactData.map(([number, label]) => (
                <div key={label} className="bg-white rounded-3xl p-8 text-center border border-softGray shadow-sm">
                  <h3 className="text-5xl font-bold text-primaryGreen mb-4">{number}</h3>
                  <p className="text-charcoal leading-7">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-3">Career Aspirations Baseline</p>
              <h2 className="text-4xl font-bold text-darkNavy mb-6">Understanding students before the session</h2>
              <p className="text-lg text-charcoal leading-8">
                Before the session began, questionnaires were distributed to students to understand their future career interests. The results showed diverse ambitions, while also highlighting limited exposure to engineering and innovation-related pathways.
              </p>
            </div>
            <div className="bg-lightGreen rounded-3xl p-8 border border-softGray">
              <div className="space-y-4">
                {careerData.map(([career, count]) => (
                  <div key={career} className="flex items-center justify-between bg-white rounded-2xl px-5 py-4">
                    <span className="font-semibold text-darkNavy">{career}</span>
                    <span className="text-primaryGreen font-bold">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-lightGreen">
          <div className="container-width max-w-5xl">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-3">What Happened</p>
            <h2 className="text-4xl font-bold text-darkNavy mb-8">Hands-on STEAM learning and inspiration</h2>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-softGray shadow-sm text-lg text-charcoal leading-8 space-y-6">
              <p>
                During the session, students participated in practical STEAM activities using LEGO-style building bricks to solve challenges, create structures, and explore engineering concepts through collaborative learning and creativity.
              </p>
              <p>
                The engagement also included motivational discussions focused on confidence, initiative, and taking advantage of opportunities. A symbolic “10-cedi challenge” was used to teach students the importance of stepping forward and taking action when opportunities arise.
              </p>
              <p>
                At the end of the session, 8 students shared that engineering-related fields now appeared exciting, promising, and interesting to them. Another 5 students indicated that they would have considered engineering careers but perceived them as demanding and requiring a lot of thinking.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-3">MEAL Information</p>
              <h2 className="text-4xl font-bold text-darkNavy mb-6">Monitoring, Evaluation, Accountability and Learning insights</h2>
              <p className="text-lg text-charcoal leading-8">
                The launch provides useful evidence for tracking participation, gender inclusion, learner exposure, career-interest shifts, and future program improvement.
              </p>
            </div>
            <div className="grid gap-6">
              {[
                ['Monitoring', '30 direct participants, 18 girls, 12 boys, 30+ indirect reach, 3 volunteers, 4 trainee teachers, and 2 school teachers engaged.'],
                ['Evaluation', 'The session showed immediate change in how students viewed engineering, with 8 students describing engineering-related fields as exciting or promising after participation.'],
                ['Accountability', 'The programme documented participant numbers, gender distribution, volunteer support, teacher engagement, and student career reflections for reporting and improvement.'],
                ['Learning', 'Hands-on, play-based activities can increase curiosity and reduce distance between students and engineering concepts, especially where prior exposure is limited.'],
              ].map(([title, text]) => (
                <div key={title} className="bg-lightBlue rounded-3xl p-7 border border-softGray">
                  <h3 className="text-2xl font-bold text-darkNavy mb-3">{title}</h3>
                  <p className="text-charcoal leading-7">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-darkNavy text-white">
          <div className="container-width max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Looking Ahead</h2>
            <p className="text-lg text-gray-300 leading-8 mb-10">
              Following the successful launch at Bethany MA Junior High School, ISIR Ghana plans to expand the Brick STEAM Discovery Caravan to more schools and underserved communities across Northern Ghana through partnerships, donations, and institutional collaboration.
            </p>
            <Link href="/get-involved" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Support the Caravan</Link>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}
