import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const values = ['Evidence', 'Innovation', 'Inclusion', 'Integrity', 'Collaboration', 'Sustainability']

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

          <div className="rounded-3xl bg-gradient-to-br from-primaryBlue to-primaryGreen min-h-[420px]"></div>
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
