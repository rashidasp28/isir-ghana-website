import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CommunityStorytellingMentalHealthPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-lightBlue py-24">
        <div className="container-width max-w-5xl">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
            Research Publication
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-darkNavy leading-tight mb-8">
            Community Storytelling as a Mental Health Promotion Strategy: Evidence from Northern Ghana
          </h1>

          <div className="space-y-2 text-lg text-charcoal">
            <p>
              <span className="font-semibold">Authors:</span> Hassan Mubarik Iddrisu and Abdul-Rashid Iddi
            </p>
            <p>
              <span className="font-semibold">Published:</span> January 2026
            </p>
            <p>
              <span className="font-semibold">DOI:</span>{' '}
              <a
                href="https://doi.org/10.1177/08901171261417440"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primaryBlue font-medium hover:underline"
              >
                10.1177/08901171261417440
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-width max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-lightGreen rounded-3xl p-8 md:p-12 border border-softGray">
            <div className="relative h-[500px] rounded-3xl overflow-hidden bg-white border border-softGray">
              <Image
                src="/images/news/community-storytelling-cover.png"
                alt="Community storytelling and mental health publication cover"
                fill
                className="object-contain p-4"
              />
            </div>

            <div>
              <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
                Research Insight
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-darkNavy mb-6">
                Storytelling, culture, and mental wellbeing
              </h2>

              <p className="text-lg text-charcoal leading-8 mb-8">
                This study explores how culturally grounded storytelling interventions can strengthen emotional wellbeing, social support, resilience, and interpersonal trust within communities in Northern Ghana.
              </p>

              <a
                href="https://doi.org/10.1177/08901171261417440"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition"
              >
                Read Published Paper
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width max-w-4xl">
          <article className="space-y-8 text-lg leading-9 text-charcoal">
            <p>
              Mental health stigma, social isolation, and limited access to psychological support continue to affect many communities in low-resource settings. In Northern Ghana, these challenges often prevent individuals from openly discussing emotional struggles or seeking support.
            </p>

            <p>
              A newly published study by Hassan Mubarik Iddrisu and Abdul-Rashid Iddi examined how community storytelling can function as a culturally grounded mental health promotion strategy.
            </p>

            <p>
              The mixed-methods study involved 500 adult participants across five community centres in Northern Ghana together with virtual conference phone sessions. Participants engaged in structured storytelling sessions twice per week for six weeks.
            </p>

            <p>
              The intervention was facilitated by trained community mental health officers and local storytellers, integrating cultural narratives, shared experiences, empathy, dialogue, and collective reflection.
            </p>

            <div className="bg-lightBlue rounded-3xl p-8 border border-softGray">
              <h3 className="text-2xl font-bold text-darkNavy mb-6">Key Findings</h3>

              <ul className="space-y-4 list-disc pl-6">
                <li>Emotional relief increased from 20% to 70%</li>
                <li>Perceived social support increased from 30% to 80%</li>
                <li>Trust in sharing personal experiences increased from 25% to 65%</li>
                <li>Participants reported reduced stigma and strengthened belonging</li>
                <li>Communities demonstrated renewed resilience and openness</li>
              </ul>
            </div>

            <p>
              The findings suggest that storytelling is not only a cultural tradition but also a powerful low-cost public health strategy capable of strengthening emotional wellbeing and community cohesion.
            </p>

            <p>
              Importantly, the intervention leveraged existing community structures and local cultural practices, making it particularly relevant for low-resource environments where access to formal mental health services remains limited.
            </p>

            <p>
              The study recommends integrating storytelling approaches into public health campaigns, community leadership systems, digital engagement platforms, and local mental health education initiatives.
            </p>

            <p>
              For ISIR Ghana, this publication reflects a broader commitment to evidence-based, culturally grounded, and community-centered approaches to sustainable development and public wellbeing.
            </p>
          </article>
        </div>
      </section>

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Research That Strengthens Communities
          </h2>

          <p className="text-lg leading-8 text-gray-300 mb-10">
            ISIR Ghana continues to support interdisciplinary research that connects public health, culture, innovation, education, and community resilience.
          </p>

          <Link
            href="/news"
            className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg"
          >
            Explore More Insights
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
