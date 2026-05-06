import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const categories = [
  'Program Updates',
  'Field Stories',
  'Research Insights',
  'Partner Spotlights',
  'Youth Innovation',
  'Donor Updates',
]

const stories = [
  'Brick STEAM Discovery Caravan launches hands-on learning for young innovators',
  'Why girls in STEAM need more than inspiration',
  'How LEGO-based learning can build creativity and problem-solving',
]

export default function NewsPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-5xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">News and Stories</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Latest updates, field stories, and impact moments.</h1>
          <p className="text-xl leading-9 max-w-3xl text-gray-100">Follow ISIR Ghana’s journey as we work with schools, communities, partners, youth, women, farmers, and development actors across Ghana.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Stories in Motion"
            title="Stories that show impact in motion"
            description="This space shares school visits, community engagements, research updates, donor contributions, volunteer activities, and lessons from the field."
            center
          />

          <div className="bg-lightBlue rounded-3xl p-10 md:p-14 border border-softGray">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Featured Story</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy mb-6">Inside the Brick STEAM Discovery Caravan</h2>
            <p className="text-lg text-charcoal leading-8 mb-8 max-w-3xl">Through hands-on activities, teamwork, and creative problem-solving, the Brick STEAM Discovery Caravan is helping students in Northern Ghana experience science and engineering in a practical and exciting way.</p>
            <button className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Read Featured Story</button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <SectionHeader
            eyebrow="Categories"
            title="Explore stories by category"
            description="Browse updates across programs, field engagement, research, partnerships, youth innovation, and donor communication."
            center
          />
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category} className="bg-white rounded-3xl p-8 shadow-sm border border-softGray">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{category}</h3>
                <p className="text-charcoal leading-7">Updates and stories that communicate ISIR Ghana’s work, learning, and growing impact.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Latest Updates"
            title="Latest stories"
            description="Initial story ideas and future updates will appear here as ISIR Ghana publishes field reports, insights, and impact stories."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <article key={story} className="bg-white border border-softGray rounded-3xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gradient-to-r from-primaryBlue to-primaryGreen"></div>
                <div className="p-8">
                  <p className="text-primaryGreen text-sm font-semibold uppercase tracking-wide mb-3">Program Update</p>
                  <h3 className="text-2xl font-bold text-darkNavy mb-4">{story}</h3>
                  <p className="text-charcoal leading-7 mb-6">A short preview of this story will appear here once the article is prepared and published.</p>
                  <button className="text-primaryBlue font-semibold">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Every Story Is a Step Toward Impact</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Follow, share, and support ISIR Ghana as we continue building practical solutions for sustainable development across Ghana.</p>
          <button className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Support Our Work</button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
