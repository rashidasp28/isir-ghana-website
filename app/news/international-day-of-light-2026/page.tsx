import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'International Day of Light: Celebrating Science, Innovation and Discovery',
  description:
    'ISIR Ghana joins the world in celebrating the International Day of Light, highlighting science, STEM education, innovation, climate-tech, and sustainable development.',
  keywords: [
    'International Day of Light',
    'UNESCO International Day of Light',
    'STEM education Ghana',
    'STEAM education Ghana',
    'science education Ghana',
    'ISIR Ghana',
    'youth innovation Ghana',
    'climate tech Ghana',
  ],
  openGraph: {
    title: 'International Day of Light: Celebrating Science, Innovation and Discovery',
    description:
      'ISIR Ghana joins the world in celebrating light as a symbol of knowledge, discovery, hope, and innovation for sustainable development.',
    type: 'article',
    url: '/news/international-day-of-light-2026',
    images: ['/og-image.png?v=5'],
  },
}

export default function InternationalDayOfLightPage() {
  return (
    <main>
      <Navbar />

      <article>
        <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
          <div className="container-width max-w-5xl">
            <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">
              Science Education | International Day of Light
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Celebrating Light as a Symbol of Science, Discovery, and Sustainable Innovation
            </h1>
            <p className="text-xl leading-9 max-w-4xl text-gray-100">
              Today, 16 May, ISIR Ghana joins the world in celebrating the International Day of Light and the power of science to transform lives, communities, and the future of sustainable development.
            </p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container-width max-w-4xl">
            <div className="mb-10 text-sm text-primaryGreen font-semibold uppercase tracking-wide">
              Published by ISIR Ghana | 16 May
            </div>

            <div className="prose prose-lg max-w-none text-charcoal prose-headings:text-darkNavy prose-a:text-primaryBlue">
              <p>
                Today, 16 May, ISIR Ghana joins the global community in celebrating the International Day of Light. This day reminds us that light is not only a natural phenomenon, but also a powerful foundation for scientific progress, technological advancement, education, communication, medicine, and sustainable development.
              </p>

              <p>
                According to UNESCO, the International Day of Light commemorates the anniversary of the first successful laser operation in 1960 by physicist and engineer Theodore Maiman. That scientific breakthrough transformed the way the world understands and uses light, opening new possibilities across medicine, communication, industry, research, education, and modern technology.
              </p>

              <h2>Why Light Matters</h2>

              <p>
                The study of light has shaped some of the most important advances in human history. From medical diagnostics and lifesaving treatments to renewable energy technologies, high-speed communication, imaging systems, and scientific discovery, light-based science continues to influence how societies learn, heal, connect, and innovate.
              </p>

              <p>
                Light has contributed to lifesaving medical innovations, renewable energy technologies, light-speed internet and communication systems, and scientific discoveries that continue to expand our understanding of the universe. These contributions show why science education must be accessible, practical, inclusive, and connected to real-world challenges.
              </p>

              <h2>Science for Peace and Sustainable Development</h2>

              <p>
                UNESCO also uses the International Day of Light to call for stronger scientific cooperation and the use of science to promote peace and sustainable development. This message strongly aligns with the mission of ISIR Ghana: to bridge knowledge and action through research, innovation, education, and community-centered solutions.
              </p>

              <p>
                At ISIR Ghana, we believe that science, innovation, and STEM education are powerful tools for building resilient and sustainable communities. When young people are exposed to science early, they begin to see themselves not only as learners, but as problem-solvers, creators, innovators, and future leaders.
              </p>

              <h2>How ISIR Ghana Is Advancing Science and Innovation</h2>

              <p>
                Through initiatives such as the Brick STEAM Discovery Caravan, ISIR Ghana introduces young learners to hands-on science, engineering, creativity, teamwork, and problem-solving. The program helps children explore science through building, experimentation, and practical learning experiences that make abstract ideas visible and exciting.
              </p>

              <p>
                Through the SheSTEAM Project, ISIR Ghana supports young people, especially girls, to explore electronics, coding, sensors, Arduino systems, and innovation-driven learning. The project promotes confidence, creativity, gender inclusion, and practical technology skills among students who may not otherwise have access to such opportunities.
              </p>

              <p>
                Our emerging climate-tech solutions, including concepts such as ClimaSense, further reflect our commitment to using science and technology to address local development challenges. From climate resilience to education, from health to sustainable innovation, ISIR Ghana sees science as a pathway to dignity, opportunity, and transformation.
              </p>

              <h2>Light as Knowledge, Discovery, and Hope</h2>

              <p>
                Light represents more than illumination. It represents knowledge. It represents discovery. It represents hope. It represents the power of innovation to transform lives.
              </p>

              <p>
                On this International Day of Light, we celebrate the scientists, educators, students, innovators, researchers, and communities working to make science meaningful and accessible. We also reaffirm our commitment to inspiring young people in Ghana to explore science, ask questions, build solutions, and imagine a more sustainable future.
              </p>

              <p>
                Happy International Day of Light from ISIR Ghana.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-3 text-sm">
              {[
                'International Day of Light',
                'UNESCO',
                'STEM Education',
                'STEAM',
                'Innovation',
                'Science Education',
                'ClimateTech',
                'Youth Empowerment',
                'Sustainability',
                'Africa Innovation',
              ].map((tag) => (
                <span key={tag} className="bg-lightGreen text-primaryGreen px-4 py-2 rounded-full font-semibold">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-16 bg-lightBlue rounded-3xl p-8 border border-softGray">
              <h2 className="text-3xl font-bold text-darkNavy mb-4">
                Explore ISIR Ghana’s science and innovation work
              </h2>
              <p className="text-charcoal leading-8 mb-8">
                Learn more about our STEAM education, youth innovation, climate-tech, and community-centered development programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/programs" className="inline-flex bg-primaryGreen text-white px-6 py-3 rounded-full font-semibold">
                  Explore Programs
                </Link>
                <Link href="/stem-kits" className="inline-flex border border-primaryGreen text-primaryGreen px-6 py-3 rounded-full font-semibold hover:bg-primaryGreen hover:text-white transition">
                  View STEM Kits
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}
