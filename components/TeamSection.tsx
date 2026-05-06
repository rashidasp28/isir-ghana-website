import Image from 'next/image'
import { teamMembers } from '@/data/team'

export default function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-width">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="uppercase tracking-widest text-sm mb-4 text-primaryGreen font-semibold">
            Leadership and Team
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-darkNavy mb-6">
            The people driving ISIR Ghana forward
          </h2>
          <p className="text-lg text-charcoal leading-8">
            ISIR Ghana brings together researchers, educators, development practitioners, project managers, volunteers, and community leaders committed to sustainable development and innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white border border-softGray rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="relative h-80 bg-lightBlue">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-darkNavy mb-2">
                  {member.name}
                </h3>
                <p className="text-primaryGreen font-medium leading-6">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
