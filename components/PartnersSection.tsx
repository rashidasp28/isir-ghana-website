import { partners } from '@/data/partners'

export default function PartnersSection() {
  return (
    <section className="py-24 bg-lightGreen">
      <div className="container-width">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-sm mb-4 text-primaryGreen font-semibold">
            Strategic Partners
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-darkNavy mb-6">
            Collaborating for sustainable impact
          </h2>
          <p className="text-lg text-charcoal leading-8">
            ISIR Ghana works with organizations, institutions, foundations, community groups, and development actors to strengthen innovation, education, health, climate resilience, and sustainable development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-softGray rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition min-h-[220px] text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primaryBlue to-primaryGreen text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                {partner.name.charAt(0)}
              </div>

              <h3 className="text-lg font-bold text-darkNavy leading-6">
                {partner.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
