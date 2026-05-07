import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const services = [
  ['Research Design and Field Studies', 'Study design, surveys, interviews, field coordination, data analysis, and research report writing.'],
  ['Needs Assessments', 'Community consultations, stakeholder interviews, gap analysis, opportunity mapping, and needs assessment reports.'],
  ['Monitoring, Evaluation and Learning', 'Theory of change, indicators, logframes, baseline and endline planning, learning reports, and dashboards.'],
  ['Program Design and Strategy', 'Program architecture, objectives, implementation roadmaps, sustainability plans, risk analysis, and partner engagement strategy.'],
  ['Policy Briefs and Development Advisory', 'Evidence synthesis, policy analysis, stakeholder mapping, strategic recommendations, and decision-maker reports.'],
  ['Impact Reporting and Communication', 'Annual reports, donor reports, impact briefs, field stories, case studies, and social impact narratives.'],
  ['STEAM Education Program Design', 'Hands-on STEAM curriculum, coding and electronics programs, innovation clubs, teacher training, and student challenges.'],
  ['Training and Capacity Building', 'Training needs assessments, workshop design, facilitation guides, training delivery, and post-training reports.'],
]

export default function ConsultancyPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-5xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Consultancy Services</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Evidence-based support for stronger development programs.</h1>
          <p className="text-xl leading-9 max-w-3xl text-gray-100">ISIR Ghana supports NGOs, schools, companies, foundations, public institutions, and development partners with research, strategy, MEL, program design, training, and impact communication services.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Our Consultancy Approach"
            title="From ideas to structured, fundable, and measurable interventions"
            description="Development programs succeed when they are built on evidence, designed with communities, implemented with clarity, and measured with accountability."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map(([title, description]) => (
              <div key={title} className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
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

      <section className="py-24 bg-lightBlue">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Who We Support"
              title="Consultancy for institutions working toward sustainable impact"
              description="Our services are designed for NGOs, civil society organizations, schools, foundations, CSR teams, public institutions, universities, and research partners working across education, health, agriculture, climate action, youth development, and community resilience."
            />
          </div>

          <div className="bg-white border border-softGray rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-darkNavy mb-6">Request Consultancy Support</h3>
            <div className="grid md:grid-cols-2 gap-5">
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Full name" />
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Email address" />
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Organization" />
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Country" />
              <select className="border border-softGray rounded-2xl px-5 py-4 md:col-span-2">
                <option>Research design</option>
                <option>Needs assessment</option>
                <option>MEL support</option>
                <option>Program design</option>
                <option>Policy brief</option>
                <option>Impact reporting</option>
                <option>Training and capacity building</option>
              </select>
              <textarea className="border border-softGray rounded-2xl px-5 py-4 md:col-span-2 min-h-[160px]" placeholder="Briefly describe the support you need" />
            </div>
            <button className="mt-8 bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Submit Consultancy Request</button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Turn Your Development Idea Into a Stronger Program</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">ISIR Ghana can help you design, research, evaluate, document, and communicate development work that is practical, fundable, and impact-driven.</p>
          <button className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Request Consultancy Support</button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
