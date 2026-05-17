import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const learningModel = [
  {
    title: 'Electronics and components',
    description:
      'Students learn the purpose and function of basic electronic components including LEDs, resistors, breadboards, wires, and microcontrollers.',
  },
  {
    title: 'Coding and debugging',
    description:
      'Learners write, test, correct, and improve simple code while building confidence in computational thinking and problem-solving.',
  },
  {
    title: 'Arduino and ESP32 systems',
    description:
      'The project introduces students to practical microcontroller-based systems that connect coding to real-world electronic outputs.',
  },
  {
    title: 'Girls-centered STEAM confidence',
    description:
      'SheSTEAM creates supportive learning spaces where girls can explore technology, ask questions, lead teams, and imagine STEM careers.',
  },
  {
    title: 'Innovation through practical projects',
    description:
      'Students move from theory to hands-on prototypes that connect electronics, sensors, creativity, and community problem-solving.',
  },
  {
    title: 'Career exposure and aspiration change',
    description:
      'The program helps learners discover engineering, artificial intelligence, coding, and technology pathways through direct experience.',
  },
]

const impactSnapshot = [
  {
    value: '15',
    label: 'Direct students engaged',
    description: 'The launch session at Anbariya Senior High School directly engaged 15 students in hands-on electronics and coding.',
  },
  {
    value: '10',
    label: 'Female students directly engaged',
    description: 'Girls formed the majority of direct participants, strengthening SheSTEAM’s focus on gender-responsive technology learning.',
  },
  {
    value: '5',
    label: 'Male students directly engaged',
    description: 'The session also included boys, supporting inclusive learning while keeping girls at the center of the intervention.',
  },
  {
    value: '60',
    label: 'Indirect students reached',
    description: 'Approximately 60 students were indirectly reached through the school-based launch and wider learning environment.',
  },
  {
    value: '6',
    label: 'Students interested in engineering',
    description: 'After the session, 6 students indicated they would consider engineering if they had more opportunities like SheSTEAM.',
  },
  {
    value: '1',
    label: 'AI career interest sparked',
    description: 'One student expressed interest in an AI-related career after using AI support to rectify a coding issue.',
  },
]

const sdgAlignment = [
  {
    title: 'SDG 4',
    subtitle: 'Quality Education',
    icon: '/images/sdgs/sdg-04.svg',
    description: 'Improves access to practical technology, coding, electronics, and innovation learning for young people.',
  },
  {
    title: 'SDG 5',
    subtitle: 'Gender Equality',
    icon: '/images/sdgs/sdg-05.svg',
    description: 'Creates girls-centered pathways into STEM, engineering, coding, leadership, and technology confidence.',
  },
  {
    title: 'SDG 8',
    subtitle: 'Decent Work and Economic Growth',
    icon: '/images/sdgs/sdg-08.svg',
    description: 'Builds future-ready digital, technical, and problem-solving skills linked to employability and innovation.',
  },
  {
    title: 'SDG 9',
    subtitle: 'Industry, Innovation and Infrastructure',
    icon: '/images/sdgs/sdg-09.svg',
    description: 'Introduces practical innovation through microcontrollers, electronics, coding, and prototype development.',
  },
  {
    title: 'SDG 10',
    subtitle: 'Reduced Inequalities',
    icon: '/images/sdgs/sdg-10.svg',
    description: 'Expands access to practical technology learning for students who may otherwise lack such opportunities.',
  },
]

const resources = [
  {
    title: 'SheSTEAM Program Brief',
    description: 'A donor-facing overview of SheSTEAM’s girls-centered technology learning model, objectives, and implementation approach.',
    href: '/downloads',
    cta: 'Request Copy',
  },
  {
    title: 'Curriculum Snapshot',
    description: 'A short overview of electronics, coding, Arduino, ESP32, and innovation learning activities for ages 16 to 20.',
    href: '/stem-kits',
    cta: 'View STEM Kits',
  },
  {
    title: 'Impact Snapshot',
    description: 'A summary of students reached, gender participation, career interest changes, and early learning outcomes.',
    href: '#impact',
    cta: 'View Impact Snapshot',
  },
  {
    title: 'Partner With SheSTEAM',
    description: 'Information for schools, donors, CSR partners, mentors, and technology supporters interested in scaling SheSTEAM.',
    href: '/partners#partner-form',
    cta: 'Become a Partner',
  },
]

export const metadata: Metadata = {
  title: 'SheSTEAM Ghana | Girls in STEM and Technology Education',
  description:
    'SheSTEAM Ghana is ISIR Ghana’s girls-centered technology and innovation initiative equipping students with coding, electronics, Arduino, ESP32, and practical STEM skills.',
}

export default function SheSteamProgramPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-6xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Girls in STEAM | Technology Education</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">SheSTEAM Ghana</h1>
          <p className="text-xl leading-9 max-w-4xl text-gray-100">A girls-centered innovation and technology initiative equipping young people with practical skills in electronics, coding, microcontrollers, creativity, and community-centered problem-solving.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[520px] rounded-3xl overflow-hidden border border-softGray shadow-sm bg-lightBlue">
            <Image src="/images/programs/shesteam.png" alt="Students participating in SheSTEAM Ghana electronics and coding session" fill className="object-cover" />
          </div>
          <div>
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Program Overview</p>
            <h2 className="text-4xl font-bold text-darkNavy mb-6">Building girls’ confidence in technology, engineering, and innovation</h2>
            <p className="text-charcoal leading-8 text-lg mb-6">SheSTEAM Ghana helps students, especially girls, move from passive exposure to active creation. Through electronics, coding, sensors, Arduino systems, and practical innovation tasks, learners begin to see technology as something they can understand, build, and use to solve problems.</p>
            <p className="text-charcoal leading-8 text-lg">The program creates a pathway into ISIR Ghana’s future STEAM Innovation Hub while promoting gender inclusion, confidence, leadership, and future-ready skills.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Learning Model</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">How SheSTEAM builds practical technology confidence</h2>
            <p className="text-lg text-charcoal leading-8">SheSTEAM combines hands-on electronics, coding, guided experimentation, peer learning, and real-world problem-solving to help young people build technical and creative confidence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {learningModel.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{item.title}</h3>
                <p className="text-charcoal leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="py-24 bg-white scroll-mt-24">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Early Impact From the Field</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Evidence of practical learning and changing career aspirations</h2>
            <p className="text-lg text-charcoal leading-8">The SheSTEAM launch at Anbariya Senior High School generated early evidence of student curiosity, technical confidence, engineering interest, and AI-related career awareness.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactSnapshot.map((metric) => (
              <div key={metric.label} className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm">
                <p className="text-5xl font-bold text-primaryGreen mb-4">{metric.value}</p>
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{metric.label}</h3>
                <p className="text-charcoal leading-7">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightBlue">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">SheSTEAM in Action</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">From components to confidence</h2>
            <p className="text-lg text-charcoal leading-8">Practical sessions help students connect electronics, coding, debugging, teamwork, and creativity in ways that make technology visible and achievable.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { src: '/images/news/shesteam-anbariya-led-breadboard.jpg', caption: 'Students working with breadboards and electronic components during SheSTEAM.' },
              { src: '/images/programs/shesteam.png', caption: 'Girls and young people participating in practical coding and electronics learning.' },
            ].map((image) => (
              <figure key={image.src} className="bg-white rounded-3xl overflow-hidden border border-softGray shadow-sm">
                <div className="relative h-80 bg-white">
                  <Image src={image.src} alt={image.caption} fill className="object-cover" />
                </div>
                <figcaption className="p-6 text-charcoal leading-7 font-medium">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Education Partnership and Implementation Site</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Working through schools and education stakeholders</h2>
            <p className="text-lg text-charcoal leading-8">SheSTEAM is designed to complement Ghana’s education priorities by strengthening practical technology learning, gender inclusion, and future-ready skills among students.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6">✓</div>
              <p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Institutional education alignment</p>
              <h3 className="text-2xl font-bold text-darkNavy mb-4">Ghana Education Service</h3>
              <p className="text-charcoal leading-7">SheSTEAM is positioned to support practical STEAM learning, girls’ participation in STEM, and technology confidence within Ghana’s education ecosystem.</p>
            </article>
            <article className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6">✓</div>
              <p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">Launch implementation site</p>
              <h3 className="text-2xl font-bold text-darkNavy mb-4">Anbariya Senior High School</h3>
              <p className="text-charcoal leading-7">Anbariya SHS hosted the SheSTEAM launch session, directly engaging students in practical electronics, coding, and innovation learning.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">SDG Alignment</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Advancing gender-responsive technology education</h2>
            <p className="text-lg text-charcoal leading-8">SheSTEAM contributes to quality education, gender equality, decent work, innovation, and reduced inequalities through practical and inclusive STEAM learning.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdgAlignment.map((sdg) => (
              <article key={sdg.title} className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                <div className="bg-lightBlue rounded-2xl p-4 inline-flex mb-6">
                  <Image src={sdg.icon} alt={sdg.subtitle} width={80} height={80} />
                </div>
                <p className="text-primaryGreen font-bold text-xl mb-2">{sdg.title}</p>
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{sdg.subtitle}</h3>
                <p className="text-charcoal leading-7">{sdg.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Resources and Program Documents</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">Tools for schools, donors, mentors, and partners</h2>
            <p className="text-lg text-charcoal leading-8">Access or request key documents that explain the SheSTEAM model, learning approach, impact evidence, and partnership opportunities.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource) => (
              <article key={resource.title} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm flex flex-col">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{resource.title}</h3>
                <p className="text-charcoal leading-7 mb-8 flex-grow">{resource.description}</p>
                <Link href={resource.href} className="inline-flex items-center justify-center gap-2 bg-primaryGreen text-white px-5 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition duration-300">
                  {resource.cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Support girls in STEAM</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Partner with ISIR Ghana to help more girls and young people build practical confidence in coding, electronics, innovation, and technology careers.</p>
          <Link href="/partners#partner-form" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Partner With Us</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
