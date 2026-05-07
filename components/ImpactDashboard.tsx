const metrics = [
  {
    value: '500+',
    label: 'Students Reached',
    description: 'Students engaged through STEAM outreach and innovation programs.',
  },
  {
    value: '5+',
    label: 'Schools Engaged',
    description: 'Educational institutions reached through community-based learning initiatives.',
  },
  {
    value: '3',
    label: 'Research Publications',
    description: 'Research articles, policy insights, and development publications released.',
  },
  {
    value: '5+',
    label: 'Strategic Partners',
    description: 'Organizations and institutions collaborating with ISIR Ghana.',
  },
  {
    value: '60%',
    label: 'Girls Participation Goal',
    description: 'Target inclusion level for girls in STEAM-focused learning activities.',
  },
  {
    value: '10+',
    label: 'Community Initiatives',
    description: 'Programs supporting education, health, climate resilience, and innovation.',
  },
]

export default function ImpactDashboard() {
  return (
    <section className="py-24 bg-gradient-to-br from-darkNavy via-primaryBlue to-primaryGreen text-white overflow-hidden">
      <div className="container-width">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-sm mb-4 text-lightGreen font-semibold">
            Impact Dashboard
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Measuring impact through innovation and community action.
          </h2>

          <p className="text-xl leading-9 text-gray-100">
            ISIR Ghana combines research, education, innovation, and partnerships to create measurable and sustainable development outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-white/10 backdrop-blur border border-white/15 rounded-3xl p-8 hover:bg-white/15 transition"
            >
              <div className="text-5xl md:text-6xl font-bold text-lightGreen mb-4">
                {metric.value}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {metric.label}
              </h3>

              <p className="text-gray-200 leading-7 text-lg">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
