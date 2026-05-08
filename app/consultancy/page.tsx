import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const services = [
  ['Research Design and Field Studies', 'Study design, surveys, interviews, field coordination, data analysis, participatory research systems, and donor-grade research reporting.'],
  ['Community and Institutional Needs Assessments', 'Stakeholder consultations, systems mapping, educational gap analysis, opportunity identification, and evidence-driven intervention planning.'],
  ['Monitoring, Evaluation and Learning Systems', 'Theory of change development, indicators, logframes, baseline and endline systems, accountability frameworks, dashboards, and adaptive learning structures.'],
  ['Program Design and Sustainability Strategy', 'Program architecture, implementation frameworks, sustainability planning, innovation ecosystems, risk analysis, and partnership strategy development.'],
  ['Policy Briefs and Development Advisory', 'Evidence synthesis, policy analysis, strategic recommendations, systems thinking, and institutional advisory support for sustainable development initiatives.'],
  ['Impact Reporting and Communication', 'Annual reports, donor reports, visual storytelling, institutional documentation, case studies, and evidence-based impact communication.'],
  ['STEAM Curriculum Development and Educational Innovation', 'Inclusive and experiential STEAM curriculum systems integrating coding, robotics, electronics, engineering, creativity, design thinking, sustainability, and real-world problem solving for low-resource learning environments.'],
  ['Training and Capacity Building', 'Teacher training, facilitator development, workshop design, innovation bootcamps, leadership development, and community-centered learning systems.'],
]

export default function ConsultancyPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-6xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
            Consultancy and Innovation Services
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Evidence-driven systems for sustainable development and educational innovation.
          </h1>

          <p className="text-xl leading-9 max-w-5xl text-gray-100">
            ISIR Ghana supports NGOs, schools, governments, development agencies, research institutions, and private sector partners with interdisciplinary research, STEAM curriculum development, innovation systems, MEL frameworks, sustainability strategy, program design, and institutional impact communication.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#consultancy-form"
              className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition"
            >
              Request Support
            </a>

            <Link
              href="/contact"
              className="bg-white text-darkNavy px-8 py-4 rounded-full font-semibold text-lg hover:bg-lightBlue transition"
            >
              Contact ISIR Ghana
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Our Consultancy Philosophy"
            title="Transforming ideas into scalable, measurable, and sustainable systems"
            description="ISIR Ghana combines research, innovation, participatory learning, curriculum design, sustainability thinking, and evidence-based implementation to support institutions and communities solving real-world challenges."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(([title, description]) => (
              <div
                key={title}
                className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-lightGreen flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-primaryGreen"></div>
                </div>

                <h3 className="text-2xl font-bold text-darkNavy mb-4">{title}</h3>

                <p className="text-charcoal leading-7">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width max-w-6xl">
          <SectionHeader
            eyebrow="Educational Innovation Systems"
            title="STEAM curriculum development for future-ready learning"
            description="ISIR Ghana develops inclusive, experiential, and innovation-driven STEAM learning systems designed for schools, underserved communities, youth innovation programs, and low-resource educational environments."
            center
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-softGray">
              <h3 className="text-3xl font-bold text-darkNavy mb-6">
                Curriculum Philosophy and Learning Design
              </h3>

              <ul className="space-y-4 text-charcoal leading-8 text-lg">
                <li>• Experiential and hands-on learning systems</li>
                <li>• Inquiry-based and problem-solving pedagogy</li>
                <li>• Design thinking and innovation frameworks</li>
                <li>• Gender-responsive learning environments</li>
                <li>• Creativity, storytelling, and arts integration</li>
                <li>• Community-centered and sustainability-focused education</li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm border border-softGray">
              <h3 className="text-3xl font-bold text-darkNavy mb-6">
                Global Framework Alignment
              </h3>

              <ul className="space-y-4 text-charcoal leading-8 text-lg">
                <li>• UNESCO STEAM Education Framework</li>
                <li>• LEGO Education Learning Through Play</li>
                <li>• Arduino Education Framework</li>
                <li>• IB Approaches to Learning</li>
                <li>• Stanford d.school Design Thinking</li>
                <li>• SDG-aligned educational innovation systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="consultancy-form" className="py-24 bg-lightBlue">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Who We Support"
              title="Supporting institutions building sustainable impact"
              description="Our consultancy and innovation services are designed for NGOs, schools, development agencies, universities, CSR teams, governments, and organizations working across education, health, agriculture, climate resilience, youth empowerment, and sustainable development."
            />
          </div>

          <form action="mailto:isirghana@gmail.com" method="post" encType="text/plain" className="bg-white border border-softGray rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-darkNavy mb-6">
              Request Consultancy Support
            </h3>

            <div className="grid md:grid-cols-2 gap-5">
              <input name="Full name" className="border border-softGray rounded-2xl px-5 py-4" placeholder="Full name" />
              <input name="Email address" className="border border-softGray rounded-2xl px-5 py-4" placeholder="Email address" />
              <input name="Organization" className="border border-softGray rounded-2xl px-5 py-4" placeholder="Organization" />
              <input name="Country" className="border border-softGray rounded-2xl px-5 py-4" placeholder="Country" />

              <select name="Consultancy service" className="border border-softGray rounded-2xl px-5 py-4 md:col-span-2">
                <option>Research design and field studies</option>
                <option>Needs assessments</option>
                <option>MEL systems</option>
                <option>Program design and strategy</option>
                <option>STEAM curriculum development</option>
                <option>Educational innovation systems</option>
                <option>Policy advisory</option>
                <option>Impact reporting</option>
                <option>Training and capacity building</option>
              </select>

              <textarea
                name="Consultancy request"
                className="border border-softGray rounded-2xl px-5 py-4 md:col-span-2 min-h-[160px]"
                placeholder="Briefly describe the support you need"
              />
            </div>

            <button type="submit" className="mt-8 bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">
              Submit Consultancy Request
            </button>

            <p className="text-sm text-gray-500 mt-4">
              This will open your email app to send the request to ISIR Ghana.
            </p>
          </form>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building innovation ecosystems through research, learning, and sustainability
          </h2>

          <p className="text-lg leading-8 text-gray-300 mb-10">
            Partner with ISIR Ghana to develop evidence-based programs, STEAM learning systems, curriculum frameworks, sustainability strategies, and measurable community-centered impact models.
          </p>

          <a
            href="#consultancy-form"
            className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg"
          >
            Request Consultancy Support
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
