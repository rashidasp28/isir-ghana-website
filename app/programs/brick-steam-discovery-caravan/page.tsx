import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const learningModel = [
  {
    title: 'Hands-on engineering challenges',
    description:
      'Students build cars, rockets, motorbikes, and other structures to understand balance, motion, stability, design, and problem-solving through practical activity.',
  },
  {
    title: 'Creative problem-solving',
    description:
      'Learners are encouraged to test ideas, make mistakes, improve designs, and explain how their creations work.',
  },
  {
    title: 'Teamwork and confidence building',
    description:
      'Students work in groups, share roles, communicate ideas, and gain confidence as they complete tasks together.',
  },
  {
    title: 'Robotics and design exposure',
    description:
      'The sessions introduce learners to early engineering and robotics concepts in a simple, accessible, and playful way.',
  },
  {
    title: 'Low-resource learning model',
    description:
      'The Caravan uses mobile, reusable, hands-on learning materials that can work in underserved schools with limited laboratory infrastructure.',
  },
  {
    title: 'Future STEAM Hub pipeline',
    description:
      'The program identifies interested learners and schools that can later feed into innovation clubs, SheSTEAM pathways, and a future Northern Regional STEAM Discovery Hub.',
  },
]

export const metadata: Metadata = {
  title: 'Brick STEAM Discovery Caravan | Hands-on STEM Education in Ghana',
  description:
    'The Brick STEAM Discovery Caravan is ISIR Ghana’s mobile STEAM education initiative bringing hands-on engineering, creativity, robotics exposure, and problem-solving to underserved schools in Northern Ghana.',
}

export default function BrickSteamProgramPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white py-28">
        <div className="container-width max-w-6xl">
          <p className="uppercase tracking-widest text-sm mb-6 text-lightGreen font-semibold">STEAM Education</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">Brick STEAM Discovery Caravan</h1>
          <p className="text-xl leading-9 max-w-4xl text-gray-100">A mobile STEAM education initiative delivering hands-on learning, creative engineering challenges, robotics exposure, and play-based innovation activities to underserved schools and communities across Northern Ghana.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="container-width grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[520px] rounded-3xl overflow-hidden border border-softGray shadow-sm bg-lightBlue">
            <Image src="/images/programs/brick-steam.png" alt="Students participating in Brick STEAM Discovery Caravan" fill className="object-cover" />
          </div>
          <div>
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Program Overview</p>
            <h2 className="text-4xl font-bold text-darkNavy mb-6">Turning curiosity into confidence through practical learning</h2>
            <p className="text-charcoal leading-8 text-lg mb-6">The Brick STEAM Discovery Caravan helps children experience science, engineering, creativity, teamwork, and problem-solving through hands-on building activities. It is designed for low-resource school environments where learners often have limited access to practical STEM materials.</p>
            <p className="text-charcoal leading-8 text-lg">The program supports early exposure to engineering thinking, innovation mindsets, and confidence-building among children aged 6 to 15.</p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-lightGreen">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">Learning Model</p>
            <h2 className="text-4xl md:text-5xl font-bold text-darkNavy leading-tight mb-6">How the Caravan builds practical STEAM confidence</h2>
            <p className="text-lg text-charcoal leading-8">The Brick STEAM Discovery Caravan uses active learning, creativity, teamwork, and simple engineering challenges to make science and technology visible, enjoyable, and relevant to young learners.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {learningModel.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 border border-softGray shadow-sm">
                <h3 className="text-2xl font-bold text-darkNavy mb-4">{item.title}</h3>
                <p className="text-charcoal leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Support hands-on STEAM learning</h2>
          <p className="text-lg leading-8 text-gray-300 mb-10">Partner with ISIR Ghana to bring practical STEAM education to more schools and communities.</p>
          <Link href="/partners#partner-form" className="inline-flex bg-primaryGreen text-white px-8 py-4 rounded-full font-semibold text-lg">Partner With Us</Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}
