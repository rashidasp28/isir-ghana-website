import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const counters = [
  ['90', 'Students directly reached through Brick STEAM Discovery Caravan sessions'],
  ['54', 'Girls directly engaged through Brick STEAM sessions'],
  ['36', 'Boys directly engaged through Brick STEAM sessions'],
  ['60%', 'Female participation across direct Brick STEAM learners'],
  ['20', 'Additional students indirectly reached during Bethany Session Two'],
  ['3', 'Brick STEAM sessions delivered'],
  ['2', 'Schools engaged through Brick STEAM activities'],
  ['60%', 'Bethany Session Two learners experiencing this type of hands-on material for the first time'],
  ['15', 'Students directly engaged through SheSTEAM at Anbariya SHS'],
  ['35', 'Women engaged through Mother First Health Initiative outreach'],
  ['12', 'Mothers directly supported with essential baby supplies'],
  ['4', 'Strategic development focus areas'],
]

const areas = [
  {
    title: 'Child and Maternal Health',
    description:
      'Through the Mother First Health Initiative, ISIR Ghana engaged about 35 women at King’s Health Center in Kumbungu and directly supported 12 mothers, including 6 pregnant women and 6 new mothers, with essential baby supplies, maternal health education, antenatal care encouragement, and nutrition-focused engagement.',
  },
  {
    title: 'STEAM Education',
    description:
      'ISIR Ghana has delivered 3 Brick STEAM Discovery Caravan sessions across 2 schools, directly reaching 90 learners: 54 girls and 36 boys. Bethany Session Two engaged 30 direct students, including 20 girls and 10 boys, and reached 20 additional students indirectly. Across the Brick STEAM sessions, female participation is now 60%.',
  },
  {
    title: 'Agriculture',
    description:
      'ISIR Ghana’s AgriSTEAM Innovation Hub is being positioned to connect youth, smart agriculture, climate-smart farming, IoT systems, automation, and agri-tech entrepreneurship. This work builds on the organization’s commitment to food security, sustainable farming systems, and rural innovation capacity.',
  },
  {
    title: 'Climate Change',
    description:
      'Through Solar4Change and related climate-tech concepts, ISIR Ghana is advancing renewable energy, clean water access, climate resilience, and community-centered sustainability. The current Solar4Change borehole project has an estimated cost of €3,500, with €1,100 raised and €2,400 remaining.',
  },
]

const programEvidence = [
  {
    title: 'Brick STEAM Discovery Caravan',
    metrics: '3 sessions | 90 direct learners | 54 girls | 36 boys | 60% female participation | 20 indirect learners from Session Two',
    description:
      'Sessions have been delivered at Bethany MA JHS and The Kings School, using LEGO-based learning to strengthen creativity, teamwork, engineering thinking, problem-solving, and learner confidence.',
  },
  {
    title: 'SheSTEAM Ghana',
    metrics: '15 direct students | 10 girls | 5 boys | 60 indirect students at Anbariya SHS',
    description:
      'SheSTEAM introduced students to electronics, coding, Arduino/ESP32 systems, and practical innovation, while strengthening girls’ confidence in technology pathways.',
  },
  {
    title: 'Mother First Health Initiative',
    metrics: '35 women engaged | 12 mothers directly supported | 6 pregnant women | 6 new mothers',
    description:
      'The initiative supported maternal health education, antenatal care encouragement, nutrition awareness, and practical support at King’s Health Center in Kumbungu.',
  },
  {
    title: 'Solar4Change Initiative',
    metrics: '€3,500 estimated project cost | €1,100 raised | €2,400 remaining',
    description:
      'Solar4Change supports sustainable clean water access using solar-powered infrastructure to strengthen health, dignity, and climate resilience in underserved communities.',
  },
]

const impactVisuals = [
  {
    image: '/images/field/brick-steam-1.jpg',
    title: 'STEAM Education Outreach',
  },
  {
    image: '/images/field/health-outreach-1.jpg',
    title: 'Maternal Health Community Engagement',
  },
  {
    image: '/images/field/community-engagement-1.jpeg',
    title: 'Community Participation and Learning',
  },
]

export default function ImpactPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-5xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Our Impact</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Measuring progress and building sustainable change.</h1>
          <p className="text-xl leading-9 max-w-3xl text-gray-100">At ISIR Ghana, impact means lives reached, systems strengthened, knowledge shared, skills developed, and communities empowered.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Impact Snapshot"
            title="Impact that can be seen, measured, and sustained"
            description="We track both numbers and stories to understand reach, learning, confidence, behavior change, and community transformation."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {counters.map(([number, label]) => (
              <div key={label} className="bg-lightBlue rounded-3xl p-8 text-center border border-softGray shadow-sm">
                <h3 className="text-5xl font-bold text-primaryGreen mb-4">{number}</h3>
                <p className="text-charcoal leading-7">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Focus Areas"
            title="Where our impact happens"
            description="ISIR Ghana’s impact is organized across four interconnected areas that reflect the needs and opportunities of Ghanaian communities."
            center
          />
          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area) => (
              <div key={area.title} className="bg-white rounded-3xl p-8 shadow-sm border border-softGray">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{area.title}</h3>
                <p className="text-charcoal leading-7">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Program Evidence"
            title="What the data currently shows"
            description="These figures are based on ISIR Ghana’s documented field sessions, outreach activities, and active fundraising records."
            center
          />
          <div className="grid md:grid-cols-2 gap-8">
            {programEvidence.map((item) => (
              <article key={item.title} className="bg-lightBlue rounded-3xl p-8 border border-softGray shadow-sm">
                <h3 className="text-2xl font-bold text-darkNavy mb-3">{item.title}</h3>
                <p className="text-primaryGreen font-semibold leading-7 mb-4">{item.metrics}</p>
                <p className="text-charcoal leading-7">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="MEL"
              title="How we measure impact"
              description="ISIR Ghana uses Monitoring, Evaluation and Learning to track progress, improve programs, and communicate results transparently."
            />
            <ul className="space-y-4 text-charcoal text-lg leading-8">
              <li>Direct and indirect participant counts by session and program</li>
              <li>Gender-disaggregated participation data, including female participation rates</li>
              <li>School and community engagement records</li>
              <li>Output tracking for activities, materials used, and projects completed</li>
              <li>Outcome monitoring for skills, confidence, awareness, teamwork, and behavior change</li>
              <li>Learning and adaptation to improve implementation</li>
              <li>Reporting and accountability for partners, donors, schools, and communities</li>
            </ul>
          </div>

          <div className="space-y-6">
            {impactVisuals.map((visual) => (
              <div
                key={visual.title}
                className="relative overflow-hidden rounded-3xl shadow-lg border border-softGray"
              >
                <div className="relative h-64 md:h-72">
                  <Image
                    src={visual.image}
                    alt={visual.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkNavy/80 via-darkNavy/10 to-transparent"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold leading-tight">
                    {visual.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Help Us Scale What Works</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">With the right partners, ISIR Ghana’s solutions can reach more schools, families, farmers, and communities across Ghana.</p>
          <Link href="/partners#partner-form" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition">
            Become an Impact Partner
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
