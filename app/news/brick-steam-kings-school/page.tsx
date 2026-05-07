import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const careerAspirations = [
  ['Medical Doctor', '13'],
  ['Nurse', '3'],
  ['Engineer', '2'],
  ['Teacher', '2'],
  ['Farmer', '2'],
  ['Surgeon', '1'],
  ['Soldier', '1'],
  ['Lawyer', '1'],
  ['Firefighter', '1'],
  ['Footballer', '1'],
  ['Journalist', '1'],
  ['Banker', '1'],
  ['Undecided', '1'],
]

const partners = ['GEM Ghana', 'STEM Rising Mind Foundation']

export default function BrickSteamKingsSchoolPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-lightBlue py-24">
        <div className="container-width max-w-5xl">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
            Program Update
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-darkNavy leading-tight mb-8">
            ISIR Ghana Expands Brick STEAM Discovery Caravan to The Kings School in Northern Ghana
          </h1>
          <p className="text-xl text-charcoal leading-9 max-w-3xl">
            On 12 January 2026, ISIR Ghana held another impactful Brick STEAM Discovery Caravan session at The Kings School, inspiring young learners through hands-on STEAM education, creativity, and practical problem-solving.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-width max-w-5xl">
          <div className="relative h-[520px] rounded-3xl overflow-hidden bg-lightBlue border border-softGray mb-12">
            <Image
              src="/images/news/kings-school-brick-steam-featured.png"
              alt="Students, facilitators, teachers, volunteers, and partners after the Brick STEAM Discovery Caravan session at The Kings School"
              fill
              className="object-cover"
              priority
            />
          </div>

          <article className="space-y-8 text-lg leading-9 text-charcoal">
            <p>
              The Institute for Sustainable and Innovative Research Ghana successfully held another session of its flagship Brick STEAM Discovery Caravan at The Kings School in Northern Ghana, continuing its mission to inspire young learners through practical Science, Technology, Engineering, Arts, and Mathematics education.
            </p>

            <p>
              The outreach formed part of ISIR Ghana’s growing effort to promote creativity, innovation, and practical problem-solving among basic school students through engaging, play-based learning activities using LEGO-style building kits and collaborative engineering challenges.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-darkNavy pt-8">Warm Reception and Institutional Support</h2>

            <p>
              Upon arrival, the ISIR Ghana team was warmly welcomed by the Assistant Headmaster and ICT Master for the Junior High School department, Mr. Mohammed Yakubu, who later introduced the team to the Headmaster, Mr. Konlan Isaac Yennunaami.
            </p>

            <p>
              The Headmaster commended ISIR Ghana for the initiative and expressed appreciation for the organization’s commitment to empowering students through practical STEAM learning. He further emphasized his hope that the program would become a long-term educational engagement at the school before officially granting approval for the session to begin.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-lightBlue rounded-3xl p-8 border border-softGray">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">School Support</h3>
                <ul className="space-y-3 list-disc pl-6">
                  <li>Mr. Mohammed Yakubu, Assistant Headmaster and ICT Master</li>
                  <li>Mr. Job Ayuba Seidu, ICT Master</li>
                </ul>
              </div>

              <div className="bg-lightGreen rounded-3xl p-8 border border-softGray">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">Student Participation</h3>
                <ul className="space-y-3 list-disc pl-6">
                  <li>30 students engaged directly</li>
                  <li>16 female students</li>
                  <li>14 male students</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-darkNavy pt-8">Student Participation and Gender Inclusion</h2>

            <p>
              The strong participation of girls highlights ISIR Ghana’s ongoing commitment to promoting inclusive STEAM education and encouraging greater female involvement in innovation and technology-related learning.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-darkNavy pt-8">Exploring Career Aspirations</h2>

            <p>
              At the beginning of the session, students were asked to indicate the careers they hoped to pursue in the future. Their responses reflected a diverse range of aspirations and provided valuable insight into the ambitions of young learners.
            </p>

            <div className="bg-white border border-softGray rounded-3xl overflow-hidden shadow-sm">
              <div className="p-8 border-b border-softGray">
                <h3 className="text-2xl font-bold text-darkNavy">Career Aspirations Before the Session</h3>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-0">
                {careerAspirations.map(([career, count]) => (
                  <div key={career} className="p-5 border-b border-r border-softGray flex justify-between gap-4">
                    <span>{career}</span>
                    <span className="font-bold text-primaryGreen">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-darkNavy pt-8">Growing Interest in Engineering and Innovation</h2>

            <p>
              During the session, students participated in practical building activities designed to stimulate creativity, teamwork, engineering thinking, and problem-solving skills. Using LEGO-style bricks and interactive challenges, students explored concepts related to design, innovation, and critical thinking in a fun and engaging learning environment.
            </p>

            <div className="bg-darkNavy text-white rounded-3xl p-8 md:p-10">
              <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-3">Observed Shift</p>
              <h3 className="text-3xl font-bold mb-4">Engineering interest increased from 2 to 5 students</h3>
              <p className="text-gray-300 leading-8">
                This immediate shift demonstrates how practical STEAM exposure can influence career awareness, confidence, and curiosity among young learners.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-darkNavy pt-8">Partnerships Strengthening Community Impact</h2>

            <p>
              Following the success of the first Brick STEAM Discovery Caravan session at Bethany MA Junior High School, the initiative attracted additional partner organizations committed to advancing STEM and youth empowerment in Northern Ghana.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner) => (
                <div key={partner} className="bg-lightGreen rounded-3xl p-8 border border-softGray">
                  <h3 className="text-2xl font-bold text-darkNavy">{partner}</h3>
                </div>
              ))}
            </div>

            <p>
              Volunteer support for the session included two volunteers from ISIR Ghana, two volunteers from GEM Ghana, and four volunteers from STEM Rising Mind Foundation. This collaboration reflects a growing ecosystem of organizations working together to improve access to practical and innovative education opportunities for young people.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-darkNavy pt-8">Advancing STEAM Education in Northern Ghana</h2>

            <p>
              The Brick STEAM Discovery Caravan continues to serve as a transformative platform for exposing students to experiential learning opportunities that encourage creativity, innovation, and future-ready skills.
            </p>

            <ul className="space-y-4 list-disc pl-6">
              <li>Increase student interest in STEAM education</li>
              <li>Encourage innovation and critical thinking</li>
              <li>Promote inclusive participation among girls and boys</li>
              <li>Build confidence and teamwork</li>
              <li>Inspire future engineers, scientists, and problem-solvers</li>
            </ul>

            <h2 className="text-3xl md:text-4xl font-bold text-darkNavy pt-8">Looking Ahead</h2>

            <p>
              ISIR Ghana plans to continue expanding the Brick STEAM Discovery Caravan to additional schools and underserved communities across Northern Ghana while strengthening partnerships and increasing access to STEAM learning materials and resources.
            </p>

            <p>
              The organization remains committed to its vision of empowering the next generation through innovation, practical learning, and sustainable community development.
            </p>
          </article>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Building Future Innovators Through Practical Learning</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">
            ISIR Ghana continues to work with schools and partners to expand access to hands-on STEAM learning across Northern Ghana.
          </p>
          <Link href="/programs" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">
            Explore Our Programs
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
