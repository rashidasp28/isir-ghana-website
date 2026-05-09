const sdgs = [
  {
    number: '2',
    title: 'Zero Hunger',
    symbol: '🌾',
    color: 'bg-[#DDA63A]',
    focus: 'Climate-smart agriculture, food systems, nutrition, and community resilience.',
  },
  {
    number: '3',
    title: 'Good Health and Well-being',
    symbol: '⚕️',
    color: 'bg-[#4C9F38]',
    focus: 'Maternal health, community health engagement, nutrition, and health access.',
  },
  {
    number: '4',
    title: 'Quality Education',
    symbol: '📘',
    color: 'bg-[#C5192D]',
    focus: 'STEAM education, curriculum development, digital literacy, and youth learning.',
  },
  {
    number: '5',
    title: 'Gender Equality',
    symbol: '♀',
    color: 'bg-[#FF3A21]',
    focus: 'SheSTEAM, girls’ participation, leadership, confidence, and inclusive learning.',
  },
  {
    number: '6',
    title: 'Clean Water and Sanitation',
    symbol: '💧',
    color: 'bg-[#26BDE2]',
    focus: 'Water access, hygiene, health-linked infrastructure, and community well-being.',
  },
  {
    number: '7',
    title: 'Affordable and Clean Energy',
    symbol: '☀️',
    color: 'bg-[#FCC30B]',
    focus: 'Solar-powered solutions, renewable energy learning, and sustainable infrastructure.',
  },
  {
    number: '8',
    title: 'Decent Work and Economic Growth',
    symbol: '📈',
    color: 'bg-[#A21942]',
    focus: 'Youth skills, entrepreneurship, innovation readiness, and employability pathways.',
  },
  {
    number: '9',
    title: 'Industry, Innovation and Infrastructure',
    symbol: '⚙️',
    color: 'bg-[#FD6925]',
    focus: 'Innovation hubs, STEM kits, research systems, technology, and practical prototyping.',
  },
  {
    number: '10',
    title: 'Reduced Inequalities',
    symbol: '🤝',
    color: 'bg-[#DD1367]',
    focus: 'Inclusive access for underserved learners, women, youth, and communities.',
  },
  {
    number: '13',
    title: 'Climate Action',
    symbol: '🌍',
    color: 'bg-[#3F7E44]',
    focus: 'Climate resilience, sustainability education, adaptation, and environmental action.',
  },
  {
    number: '17',
    title: 'Partnerships for the Goals',
    symbol: '🔗',
    color: 'bg-[#19486A]',
    focus: 'Partnerships with schools, NGOs, communities, researchers, and development actors.',
  },
]

export default function SDGSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-width">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
            Institutional SDG Framework
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-darkNavy leading-tight mb-6">
            Our contribution to the Sustainable Development Goals
          </h2>

          <p className="text-lg text-charcoal leading-8">
            ISIR Ghana aligns its research, programs, curriculum innovation, community engagement, and sustainability initiatives with the United Nations Sustainable Development Goals, contributing to inclusive, evidence-driven, and practical development across Ghana.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sdgs.map((sdg) => (
            <article
              key={sdg.number}
              className="bg-white border border-softGray rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <div className={`${sdg.color} text-white p-6 min-h-[170px] flex flex-col justify-between`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide opacity-90">SDG</p>
                    <p className="text-6xl font-black leading-none">{sdg.number}</p>
                  </div>
                  <div className="text-5xl" aria-hidden="true">{sdg.symbol}</div>
                </div>

                <h3 className="text-2xl font-bold leading-tight mt-6">
                  {sdg.title}
                </h3>
              </div>

              <div className="p-6">
                <p className="text-charcoal leading-7 text-sm">
                  {sdg.focus}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
