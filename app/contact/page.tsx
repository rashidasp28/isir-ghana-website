import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const inquiryTypes = [
  'General inquiry',
  'Partnership',
  'Donation or sponsorship',
  'Volunteer interest',
  'School invitation',
  'Consultancy request',
  'Research collaboration',
  'Media inquiry',
]

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-lightBlue py-24">
        <div className="container-width max-w-5xl">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Contact ISIR Ghana</p>
          <h1 className="text-5xl md:text-7xl font-bold text-darkNavy leading-tight mb-8">
            Let’s start a conversation about research, innovation, and sustainable development.
          </h1>
          <p className="text-xl text-charcoal leading-9 max-w-3xl">
            Whether you want to partner with us, support a program, invite ISIR Ghana to your school, request consultancy services, volunteer, or learn more about our work, we would be glad to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <SectionHeader
              eyebrow="Reach Us"
              title="We would love to hear from you"
              description="ISIR Ghana welcomes inquiries from donors, schools, NGOs, companies, researchers, volunteers, government agencies, media organizations, and community partners."
            />

            <div className="bg-lightGreen rounded-3xl p-8 space-y-5">
              <div>
                <h3 className="font-bold text-darkNavy mb-1">Email</h3>
                <p className="text-charcoal">isirghana@gmail.com</p>
              </div>
              <div>
                <h3 className="font-bold text-darkNavy mb-1">Location</h3>
                <p className="text-charcoal">Tamale, Ghana</p>
              </div>
              <div>
                <h3 className="font-bold text-darkNavy mb-1">Motto</h3>
                <p className="text-primaryGreen font-semibold">Sustainability Through Innovation</p>
              </div>
            </div>
          </div>

          <form className="lg:col-span-2 bg-white border border-softGray rounded-3xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Full name" />
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Email address" />
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Phone number" />
              <input className="border border-softGray rounded-2xl px-5 py-4" placeholder="Organization, optional" />
              <select className="border border-softGray rounded-2xl px-5 py-4 md:col-span-2">
                {inquiryTypes.map((type) => <option key={type}>{type}</option>)}
              </select>
              <input className="border border-softGray rounded-2xl px-5 py-4 md:col-span-2" placeholder="Subject" />
              <textarea className="border border-softGray rounded-2xl px-5 py-4 md:col-span-2 min-h-[180px]" placeholder="Message" />
            </div>
            <button className="mt-8 bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Submit Message</button>
          </form>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s Build Sustainable Futures Together</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Your message could begin a partnership, a school outreach, a research collaboration, a funded program, or a new opportunity for community impact.</p>
          <button className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Explore Our Programs</button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
