import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NewsArticle() {
  return (
    <main>
      <Navbar />

      <section className="bg-lightBlue py-24">
        <div className="container-width max-w-4xl">
          <p className="text-primaryGreen font-semibold uppercase mb-4">Policy Insight</p>
          <h1 className="text-4xl md:text-6xl font-bold text-darkNavy mb-6">
            Africa’s Youth Boom: Opportunity or Crisis?
          </h1>
          <p className="text-lg text-charcoal">
            Published by ISIR Ghana
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-width max-w-4xl">
          <div className="relative h-[400px] mb-10 rounded-2xl overflow-hidden">
            <Image
              src="/images/news/africa-youth-boom-cover.png"
              alt="Africa youth population report cover"
              fill
              className="object-cover"
            />
          </div>

          <article className="prose max-w-none">
            <p>
              Africa is entering one of the most important demographic transitions in modern history. With a rapidly growing youth population, the continent stands at a critical crossroads between opportunity and systemic strain.
            </p>

            <p>
              By 2050, the majority of the world’s young people will live in low- and lower-middle-income countries. This shift places Africa at the center of global development, but also highlights deep structural challenges in employment, education, healthcare, and innovation systems.
            </p>

            <p>
              A youth boom only becomes a demographic dividend when young people are healthy, educated, skilled, and productively employed. Without these conditions, population growth alone does not translate into economic progress.
            </p>

            <p>
              The report emphasizes that investment in girls’ education, reproductive health, and economic participation is not optional. These are core development strategies that directly influence national productivity and long-term resilience.
            </p>

            <p>
              It also highlights the urgent need to prioritize STEAM education, digital skills, green jobs, and entrepreneurship. These must move beyond pilot initiatives and become central pillars of national development frameworks.
            </p>

            <p>
              At ISIR Ghana, these insights align directly with our work. Through programs such as the Brick STEAM Discovery Caravan and the SheSTEAM Project, we are actively building practical, inclusive, and future-ready systems that empower young people.
            </p>

            <p>
              The future of Africa will be shaped by the decisions made today. The question is not whether Africa has a youth population boom, but whether institutions are prepared to invest in unlocking its potential.
            </p>

            <div className="mt-10">
              <Link
                href="/documents/africa-youth-boom-report.pdf"
                className="bg-primaryGreen text-white px-6 py-3 rounded-full font-semibold"
              >
                Download Full Report
              </Link>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
