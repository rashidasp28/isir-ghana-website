import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, Globe2, ShieldCheck, UsersRound } from 'lucide-react'

const benefits = [
  {
    icon: UsersRound,
    title: 'No participant accounts',
    description: 'Share one link and let participants submit their availability immediately.',
  },
  {
    icon: Globe2,
    title: 'Time-zone aware',
    description: 'Plan confidently across Ghana, Europe, and international partner locations.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-first',
    description: 'Separate participant and organizer links protect meeting administration.',
  },
]

const steps = [
  'Create a meeting and select possible dates.',
  'Share the participant link with your team or partners.',
  'Review the availability heat map and confirm the strongest time.',
]

export default function MeetLandingPage() {
  return (
    <main className="min-h-screen bg-white text-charcoal">
      <header className="border-b border-softGray bg-white">
        <div className="container-width flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo/isir-logo.PNG" alt="ISIR Ghana" width={120} height={48} className="h-11 w-auto object-contain" priority />
            <span className="hidden sm:block border-l border-softGray pl-3 text-lg font-bold text-darkNavy">ISIR Meet</span>
          </Link>
          <Link href="/meet/create" className="inline-flex items-center gap-2 rounded-full bg-primaryGreen px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Create meeting
            <ArrowRight size={17} />
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-darkNavy via-[#073b6d] to-primaryBlue text-white">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/40" />
          <div className="absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full border border-white/25" />
        </div>
        <div className="container-width relative grid gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <CalendarDays size={17} />
              Professional scheduling by ISIR Ghana
            </div>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">Find the meeting time that works for everyone.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-50 md:text-xl">
              Create a scheduling poll, collect availability, and identify the strongest meeting time without long email or WhatsApp exchanges.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/meet/create" className="inline-flex items-center gap-2 rounded-full bg-primaryGreen px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:opacity-95">
                Create a meeting
                <ArrowRight size={20} />
              </Link>
              <a href="#how-it-works" className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/15">
                See how it works
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-blue-50">
              {['Free for the MVP', 'Mobile friendly', 'No participant sign-in'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-lightGreen" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
            <div className="rounded-[1.5rem] bg-white p-6 text-charcoal md:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-softGray pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primaryGreen">Sample poll</p>
                  <h2 className="mt-2 text-2xl font-bold text-darkNavy">Programme planning meeting</h2>
                </div>
                <Clock3 className="text-primaryBlue" />
              </div>
              <div className="mt-6 grid grid-cols-[70px_repeat(3,1fr)] gap-2 text-center text-xs sm:text-sm">
                <div />
                {['Tue 11', 'Wed 12', 'Thu 13'].map((day) => <div key={day} className="font-bold text-darkNavy">{day}</div>)}
                {['10:00', '11:00', '12:00', '13:00'].map((time, row) => (
                  <div key={time} className="contents">
                    <div className="flex items-center font-medium text-gray-500">{time}</div>
                    {[0, 1, 2].map((column) => {
                      const intensity = (row + column) % 4
                      const classes = ['bg-gray-100', 'bg-green-100', 'bg-green-300', 'bg-primaryGreen text-white']
                      return <div key={`${time}-${column}`} className={`h-12 rounded-lg ${classes[intensity]}`} />
                    })}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-lightGreen p-4">
                <p className="text-sm font-semibold text-primaryGreen">Best available time</p>
                <p className="mt-1 font-bold text-darkNavy">Thursday, 13 August at 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-width grid gap-7 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-3xl border border-softGray bg-white p-8 shadow-sm">
              <div className="mb-6 inline-flex rounded-2xl bg-lightBlue p-4 text-primaryBlue"><Icon size={28} /></div>
              <h2 className="text-2xl font-bold text-darkNavy">{title}</h2>
              <p className="mt-3 leading-7 text-gray-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-lightBlue py-20">
        <div className="container-width">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-primaryGreen">How it works</p>
            <h2 className="mt-3 text-4xl font-bold text-darkNavy md:text-5xl">From invitation to confirmed meeting in three steps</h2>
          </div>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-darkNavy text-lg font-bold text-white">{index + 1}</div>
                <p className="mt-6 text-lg font-semibold leading-8 text-charcoal">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/meet/create" className="inline-flex items-center gap-2 rounded-full bg-primaryGreen px-8 py-4 text-lg font-semibold text-white">
              Start planning
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-darkNavy py-8 text-white">
        <div className="container-width flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ISIR Ghana. Sustainability Through Innovation.</p>
          <Link href="/" className="font-semibold text-lightGreen">Return to ISIR Ghana</Link>
        </div>
      </footer>
    </main>
  )
}
