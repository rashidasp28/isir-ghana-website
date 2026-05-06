import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const waysToSupport = [
  {
    title: 'Donate',
    description: 'Support ISIR Ghana’s programs with a one-time or recurring donation for learning materials, outreach, health education, and sustainability programs.',
  },
  {
    title: 'Volunteer',
    description: 'Contribute your time, skills, knowledge, or professional experience in education, research, health, climate action, design, technology, or communication.',
  },
  {
    title: 'Sponsor a School Outreach',
    description: 'Help us bring hands-on STEAM learning to schools in Northern Ghana through the Brick STEAM Discovery Caravan.',
  },
  {
    title: 'Support Girls in STEAM',
    description: 'Help girls gain confidence and practical skills in electronics, coding, sensors, creativity, and innovation through SheSTEAM.',
  },
  {
    title: 'Donate Materials',
    description: 'Provide useful learning resources such as LEGO sets, laptops, tablets, electronics kits, sensors, books, projectors, and stationery.',
  },
  {
    title: 'Partner With Us',
    description: 'Work with ISIR Ghana to co-design, fund, implement, or scale programs across education, health, agriculture, climate, and research.',
  },
]

export default function GetInvolvedPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-5xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">Get Involved</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Join us in building sustainable, innovative, and community-driven solutions.</h1>
          <p className="text-xl leading-9 max-w-3xl text-gray-100">Whether you are an individual, donor, school, company, researcher, volunteer, or development partner, there is a meaningful way to support ISIR Ghana’s mission.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Support ISIR Ghana"
            title="Your support can create real impact"
            description="Every contribution can help a student discover science, support a girl to explore technology, strengthen maternal health awareness, support farmer resilience, or bring sustainable solutions to communities."
            center
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {waysToSupport.map((item) => (
              <div key={item.title} className="bg-white border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 rounded-2xl bg-lightGreen flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-primaryGreen"></div>
                </div>
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{item.title}</h3>
                <p className="text-charcoal leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightBlue">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Volunteer"
              title="Become a Volunteer"
              description="Volunteers are important to ISIR Ghana’s mission. You can volunteer in person, remotely, or through specific projects depending on your availability and expertise."
            />
          </div>

          <form className="bg-white border border-softGray rounded-3xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Full name" />
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Email address" />
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Phone number" />
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Location" />
              <input className="border border-softGray rounded-2xl px-5 py-4 md:col-span-2" placeholder="Area of expertise" />
              <textarea className="border border-softGray rounded-2xl px-5 py-4 md:col-span-2 min-h-[160px]" placeholder="Why do you want to volunteer with ISIR Ghana?" />
            </div>
            <button className="mt-8 bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Submit Volunteer Interest</button>
          </form>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Be Part of the Change</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Your support can help young people learn, women thrive, communities adapt, and ideas become sustainable solutions.</p>
          <button className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Partner With ISIR Ghana</button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
