import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const values = ['Evidence', 'Innovation', 'Inclusion', 'Integrity', 'Collaboration', 'Sustainability']

const teamMembers = [
  ['Abdul-Rashid Iddi', 'Executive Director and Co-Founder'],
  ['Kisa Owusu Ansah', 'Deputy Director'],
  ['Bashiru Aminu', 'Programs Manager'],
  ['Mubarik H. Iddrisu', 'Monitoring, Evaluation, Accountability and Learning Lead'],
  ['Yasmin Fatai', 'Project Manager, Education'],
  ['Iren Assina Gai', 'Project Manager, Agriculture'],
  ['Tamimu Mustapha', 'Project Manager, Climate Resilience'],
  ['Hawa Ibrahim', 'Project Manager, Health'],
  ['Dr. Manfred Anim', 'Partnerships and Grant Manager'],
  ['Khadija Ibrahim', 'Volunteer, Education'],
  ['Kennedy', 'Web Volunteer'],
  ['Emmanuel', 'Web Volunteer'],
  ['Abdul-Majeed Yakubu', 'Volunteer'],
  ['Rebecca', 'Volunteer, Health'],
]

const partners = [
  ['Eco Empower Alliance', 'https://ecoempoweralliance.org/'],
  ['Herpol Africa', 'https://herpolafrica.org/'],
  ['GEM Ghana', 'https://gemghana.org'],
  ['Masjid EAl Emaan', '#'],
  ['STEM Rising Mind Foundation', '#'],
]

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-lightBlue py-24">
        <div className="container-width max-w-5xl">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">About ISIR Ghana</p>
          <h1 className="text-5xl md:text-7xl font-bold text-darkNavy leading-tight mb-8">
            Bridging knowledge and action for sustainable development.
          </h1>
          <p className="text-xl text-charcoal leading-9 max-w-3xl">
            The Institute for Sustainable and Innovative Research Ghana is a multidisciplinary research, consultancy, and development organization advancing evidence-based solutions across Ghana.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeader
              eyebrow="Who We Are"
              title="A research and innovation institute rooted in community impact."
              description="We work at the intersection of research, innovation, policy, and community action across child and maternal health, STEAM education, agriculture, and climate change."
            />
            <p className="text-charcoal leading-8 text-lg">
              Through applied research, practical programs, capacity building, and strategic partnerships, ISIR Ghana helps communities, institutions, NGOs, schools, and development partners transform knowledge into measurable impact.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden min-h-[420px] shadow-lg bg-lightBlue">
            <Image
              src="/images/about/community.png"
              alt="ISIR Ghana facilitators, students, teachers, volunteers, and partner representatives after a school-based STEAM outreach session"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Our Purpose"
            title="Why We Exist"
            description="Ghana faces connected development challenges in health, education, agriculture, and climate resilience. ISIR Ghana exists to close the gap between research, policy, and implementation."
            center
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-darkNavy mb-4">Vision</h3>
              <p className="leading-7 text-charcoal">To be a leading center of excellence in applied research and policy innovation for sustainable development in Ghana and beyond.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-darkNavy mb-4">Mission</h3>
              <p className="leading-7 text-charcoal">To empower governments, NGOs, communities, schools, and development partners through evidence-based research, policy support, innovation, and capacity building.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-darkNavy mb-4">Motto</h3>
              <p className="leading-7 text-primaryGreen font-bold text-xl">Sustainability Through Innovation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Leadership and Team"
            title="The people driving ISIR Ghana forward"
            description="ISIR Ghana brings together researchers, educators, development practitioners, project managers, volunteers, and community leaders committed to sustainable development and innovation."
            center
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(([name, role]) => (
              <div key={name} className="bg-white border border-softGray rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="h-56 bg-gradient-to-br from-primaryBlue to-primaryGreen flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-white/95 flex items-center justify-center text-3xl font-bold text-primaryBlue shadow-lg">
                    {initials(name)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-darkNavy mb-2">{name}</h3>
                  <p className="text-primaryGreen font-medium leading-6">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Our Values"
            title="The principles that guide our work"
            description="Our values shape how we research, design programs, collaborate, communicate, and serve communities."
            center
          />
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value} className="border border-softGray rounded-3xl p-8 bg-white shadow-sm">
                <h3 className="text-2xl font-bold text-darkNavy mb-3">{value}</h3>
                <p className="text-charcoal leading-7">We place {value.toLowerCase()} at the center of our institutional practice and community engagement.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Strategic Partners"
            title="Collaborating for sustainable impact"
            description="ISIR Ghana works with organizations, institutions, foundations, community groups, and development actors to strengthen innovation, education, health, climate resilience, and sustainable development."
            center
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {partners.map(([name, website]) => (
              <a
                key={name}
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-softGray rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition min-h-[220px] text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primaryBlue to-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                  {name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-darkNavy leading-6">{name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Work With Us</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">
            ISIR Ghana welcomes collaboration with donors, schools, NGOs, government agencies, researchers, companies, foundations, and community organizations.
          </p>
          <button className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Partner With ISIR Ghana</button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
