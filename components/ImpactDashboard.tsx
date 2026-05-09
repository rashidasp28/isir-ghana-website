import Image from 'next/image'

const impactMetrics = [
  {
    value: '500+',
    label: 'Students Reached',
    description: 'Students engaged through STEAM and innovation-focused outreach programs.',
  },
  {
    value: '3+',
    label: 'Schools Engaged',
    description: 'Basic schools reached through practical community-centered education programs.',
  },
  {
    value: '53%',
    label: 'Female Participation',
    description: 'Girls actively participating in ISIR Ghana educational initiatives.',
  },
  {
    value: '35+',
    label: 'Women Engaged',
    description: 'Women reached through maternal health and community health activities.',
  },
  {
    value: '12',
    label: 'Mothers Supported',
    description: 'Mothers directly supported through the Mother First Health Initiative.',
  },
  {
    value: '4+',
    label: 'Publications & Reports',
    description: 'Research outputs, reports, and institutional knowledge products published.',
  },
  {
    value: '5+',
    label: 'Strategic Partners',
    description: 'Organizations collaborating with ISIR Ghana on education, health, and innovation.',
  },
  {
    value: '15+',
    label: 'Volunteers Mobilized',
    description: 'Dedicated volunteers supporting outreach, education, and health programs.',
  },
]

const sdgs = [
  {
    title: 'SDG 2',
    subtitle: 'Zero Hunger',
    icon: '/images/sdgs/sdg-02.svg',
  },
  {
    title: 'SDG 3',
    subtitle: 'Good Health and Well-being',
    icon: '/images/sdgs/sdg-03.svg',
  },
  {
    title: 'SDG 4',
    subtitle: 'Quality Education',
    icon: '/images/sdgs/sdg-04.svg',
  },
  {
    title: 'SDG 5',
    subtitle: 'Gender Equality',
    icon: '/images/sdgs/sdg-05.svg',
  },
  {
    title: 'SDG 6',
    subtitle: 'Clean Water and Sanitation',
    icon: '/images/sdgs/sdg-06.svg',
  },
  {
    title: 'SDG 7',
    subtitle: 'Affordable and Clean Energy',
    icon: '/images/sdgs/sdg-07.svg',
  },
  {
    title: 'SDG 8',
    subtitle: 'Decent Work and Economic Growth',
    icon: '/images/sdgs/sdg-08.svg',
  },
  {
    title: 'SDG 9',
    subtitle: 'Industry, Innovation and Infrastructure',
    icon: '/images/sdgs/sdg-09.svg',
  },
  {
    title: 'SDG 10',
    subtitle: 'Reduced Inequalities',
    icon: '/images/sdgs/sdg-10.svg',
  },
  {
    title: 'SDG 13',
    subtitle: 'Climate Action',
    icon: '/images/sdgs/sdg-13.svg',
  },
  {
    title: 'SDG 17',
    subtitle: 'Partnerships for the Goals',
    icon: '/images/sdgs/sdg-17.svg',
  },
]

export default function ImpactDashboard() {
  return (
    <section className="py-24 bg-white">
      <div className="container-width">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
            Impact Dashboard
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-darkNavy leading-tight mb-6">
            Measuring sustainable impact through research, innovation, and community action.
          </h2>

          <p className="text-lg text-charcoal leading-8">
            ISIR Ghana combines practical outreach, research-driven interventions, partnerships, and evidence-based community engagement to create measurable outcomes across Northern Ghana.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impactMetrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-lightBlue border border-softGray rounded-3xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <p className="text-5xl font-bold text-primaryGreen mb-4">
                {metric.value}
              </p>

              <h3 className="text-2xl font-bold text-darkNavy mb-4">
                {metric.label}
              </h3>

              <p className="text-charcoal leading-7">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-darkNavy rounded-3xl p-10 md:p-14 text-white">
          <div className="max-w-4xl mb-12">
            <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
              Sustainable Development Goals
            </p>

            <h3 className="text-4xl font-bold leading-tight mb-6">
              Aligning local action with global development priorities.
            </h3>

            <p className="text-lg text-gray-300 leading-8">
              ISIR Ghana’s programs and research activities contribute directly to internationally recognized Sustainable Development Goals through education, health, partnerships, innovation, and community resilience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sdgs.map((sdg) => (
              <div
                key={sdg.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
              >
                <div className="bg-white rounded-2xl p-3 mb-5 inline-flex">
                  <Image
                    src={sdg.icon}
                    alt={sdg.subtitle}
                    width={88}
                    height={88}
                  />
                </div>

                <p className="text-primaryGreen font-bold text-2xl mb-3">
                  {sdg.title}
                </p>

                <p className="text-white font-medium leading-6">
                  {sdg.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
