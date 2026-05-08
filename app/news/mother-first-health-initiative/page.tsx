import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function MotherFirstHealthInitiativePage() {
  return (
    <main>
      <Navbar />

      <article className="bg-white">
        <section className="bg-lightBlue py-24">
          <div className="container-width max-w-5xl">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
              Maternal Health Initiative
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-darkNavy leading-tight mb-8">
              ISIR Ghana Launches Mother First Health Initiative at King’s Health Center, Kumbungu
            </h1>
            <p className="text-xl text-charcoal leading-9 max-w-4xl">
              The initiative combines compassionate maternal support with evidence-based community health engagement to improve maternal well-being and pregnancy outcomes in underserved communities across Northern Ghana.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-width max-w-6xl">
            <div className="relative rounded-3xl overflow-hidden min-h-[500px] shadow-xl mb-16">
              <Image
                src="/images/field/mother-first-health-initiative.jpg"
                alt="ISIR Ghana team engaging mothers during the Mother First Health Initiative in Kumbungu"
                fill
                className="object-cover"
              />
            </div>

            <div className="max-w-4xl mx-auto space-y-8 text-lg leading-9 text-charcoal">
              <p>
                On 22 December 2025, the Institute for Sustainable and Innovative Research Ghana officially launched the Mother First Health Initiative at King’s Health Center in Kumbungu, Northern Ghana.
              </p>

              <p>
                The initiative was developed as a maternal health support and research-driven intervention aimed at improving maternal well-being, antenatal care participation, maternal nutrition awareness, and community-centered healthcare support systems.
              </p>

              <p>
                The ISIR Ghana delegation included the Executive Director, the Finance and Administrative Manager, health volunteer Rebecca, and practicing nurse Raphael. The team departed Tamale at 9:00 am and arrived at the facility by 9:40 am, where they were warmly welcomed by health staff, mothers, and community representatives.
              </p>

              <p>
                During the engagement session, expectant mothers and new mothers participated in discussions focused on maternal care, nutrition, antenatal attendance, newborn well-being, and healthcare access.
              </p>

              <div className="bg-lightGreen rounded-3xl p-10 my-12">
                <h2 className="text-3xl font-bold text-darkNavy mb-6">Program Reach</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-5xl font-bold text-primaryGreen mb-2">35+</p>
                    <p className="font-medium text-darkNavy">Women Engaged</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-primaryGreen mb-2">12</p>
                    <p className="font-medium text-darkNavy">Mothers Supported Directly</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-primaryGreen mb-2">6</p>
                    <p className="font-medium text-darkNavy">Pregnant Women Reached</p>
                  </div>
                </div>
              </div>

              <p>
                In total, approximately 35 women were engaged during the outreach activity. Twelve women, consisting of pregnant women and mothers who had recently delivered, received essential baby supplies in recognition of their commitment to regular antenatal care attendance.
              </p>

              <p>
                ISIR Ghana explained that the approach was intentionally designed to encourage sustained antenatal care participation and strengthen positive maternal health behaviors within the community.
              </p>

              <p>
                Beyond immediate support, the Mother First Health Initiative also incorporates ethical and facility-approved community data engagement focused on maternal nutrition, anaemia, maternal health trends, and birth outcomes.
              </p>

              <p>
                The initiative further aims to support vulnerable mothers through health insurance renewal assistance and practical nutrition education using locally available foods to improve maternal nutrition and birth outcomes.
              </p>

              <p>
                ISIR Ghana emphasized that sustainable maternal health interventions must move beyond short-term assistance and instead focus on long-term systems rooted in research, community trust, education, partnerships, and dignity-centered healthcare.
              </p>

              <div className="bg-darkNavy text-white rounded-3xl p-10 mt-14">
                <h2 className="text-3xl font-bold mb-6">Guiding Principle</h2>
                <p className="text-3xl font-semibold text-primaryGreen italic">
                  “Because every mother matters.”
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-lightBlue">
          <div className="container-width text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy mb-6">
              Advancing Community Health Through Compassion and Research
            </h2>
            <p className="text-lg text-charcoal leading-8 mb-10">
              ISIR Ghana remains committed to strengthening maternal health systems, supporting vulnerable communities, and promoting evidence-based interventions across Northern Ghana.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link href="/programs" className="bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">
                Explore Our Programs
              </Link>
              <Link href="/contact" className="bg-white text-darkNavy px-8 py-4 rounded-full font-semibold text-lg border border-softGray">
                Partner With Us
              </Link>
            </div>
          </div>
        </section>

      </article>

      <Footer />
    </main>
  )
}
