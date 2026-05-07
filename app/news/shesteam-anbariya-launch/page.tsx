import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const careerData = [
  ['Nursing', '9'],
  ['Teaching', '3'],
  ['Civil Engineering', '1'],
  ['Medicine', '2'],
]

const impactData = [
  ['15', 'Students directly engaged'],
  ['10', 'Female students directly engaged'],
  ['5', 'Male students directly engaged'],
  ['60+', 'Additional students indirectly reached'],
  ['6', 'Students strongly considering engineering with continued exposure'],
  ['1', 'Student demonstrating AI curiosity during coding'],
]

export default function SheSTEAMAnbariyaLaunchPage() {
  return (
    <main>
      <Navbar />

      <article>
        <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
          <div className="container-width max-w-5xl">
            <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Program Update</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">SheSTEAM Project Launch Inspires Students at Anbariya Senior High School</h1>
            <p className="text-xl leading-9 max-w-3xl text-gray-100">On 13 January 2026, ISIR Ghana launched its flagship SheSTEAM Project, introducing students to practical electronics, coding, and innovation-driven learning.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container-width max-w-5xl">
            <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-lg mb-10">
              <Image
                src="/images/programs/shesteam.png"
                alt="Students, volunteers, and teachers gathered after the SheSTEAM session at Anbariya Senior High School"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-gray-500 mb-12">Students, volunteers, facilitators, and teachers gathered after the SheSTEAM session at Anbariya Senior High School.</p>

            <div className="prose prose-lg max-w-none text-charcoal leading-8">
              <p>
                On 13 January 2026, the Institute for Sustainable and Innovative Research Ghana successfully launched its flagship SheSTEAM Project at Anbariya Senior High School, introducing students to practical electronics, coding, and innovation-driven learning.
              </p>
              <p>
                The programme directly engaged 15 students, including 10 female students and 5 male students, through an intensive hands-on STEAM training session. Beyond the direct participants, the outreach indirectly reached approximately 60 students through peer engagement, classroom interactions, and school-wide visibility.
              </p>
              <p>
                During the session, students were introduced to fundamental electronic components and their functions, including breadboards, resistors, LEDs, connecting wires, and ESP32 microcontrollers. The training combined theory with practical demonstrations to help students understand how electronic systems work and how technology can be applied to solve real-world problems.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-lightBlue">
          <div className="container-width">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-3">Impact Data</p>
              <h2 className="text-4xl md:text-5xl font-bold text-darkNavy">Participation, gender inclusion, and early STEAM interest shifts</h2>
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
                Before the training began, students were asked about their future career aspirations. The responses highlighted diverse ambitions and limited prior exposure to engineering and technology-related pathways.
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
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-3">What Changed</p>
            <h2 className="text-4xl font-bold text-darkNavy mb-8">Hands-on electronics, coding, and AI curiosity</h2>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-softGray shadow-sm text-lg text-charcoal leading-8 space-y-6">
              <p>
                Following the session, the programme recorded a significant shift in student interest toward engineering and technology careers. Six students shared that they would strongly consider pursuing careers in engineering if given continued exposure to practical STEAM learning opportunities.
              </p>
              <p>
                One student expressed interest in pursuing an artificial intelligence-related career after independently using AI tools to identify and correct a coding issue during the practical exercises. Reflecting on the experience, the student remarked that it was “cool to see how computers can help solve problems.”
              </p>
              <p>
                This moment highlighted the growing curiosity and excitement around emerging technologies among young learners when they are given practical tools, mentorship, and a supportive environment.
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
                The SheSTEAM launch provides useful evidence for tracking gender inclusion, learner exposure, career-interest shifts, practical skills development, and future program improvement.
              </p>
            </div>
            <div className="grid gap-6">
              {[
                ['Monitoring', '15 direct participants, 10 female students, 5 male students, approximately 60 indirect students reached, and 2 ISIR Ghana volunteers engaged.'],
                ['Evaluation', 'The session recorded increased student interest in engineering and technology, with 6 students strongly considering engineering if given continued practical exposure.'],
                ['Accountability', 'The programme documented participant numbers, gender distribution, career aspirations, volunteer support, and student reflections for reporting and improvement.'],
                ['Learning', 'Hands-on electronics and coding can shift student perceptions of engineering and emerging technologies, especially when learners are supported to solve practical problems.'],
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
              ISIR Ghana plans to scale the SheSTEAM Project to additional schools and communities through strategic partnerships, donor support, and stakeholder collaboration.
            </p>
            <Link href="/get-involved" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Support SheSTEAM</Link>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}
