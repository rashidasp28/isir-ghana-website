import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

const steamGallery = [
  '/images/gallery/steam/brick-steam-kings-school-1.jpg',
  '/images/gallery/steam/brick-steam-kings-school-2.jpg',
  '/images/gallery/steam/shesteam-electronics-session-1.jpg',
  '/images/gallery/steam/shesteam-girls-coding-1.jpg',
]

const healthGallery = [
  '/images/gallery/health/mother-first-outreach-1.jpg',
  '/images/gallery/health/maternal-health-session-1.jpg',
  '/images/gallery/health/women-health-engagement-1.jpg',
  '/images/gallery/health/health-center-visit-1.jpg',
]

const researchGallery = [
  '/images/gallery/research/research-conference-1.jpg',
  '/images/gallery/research/scientific-presentation-1.jpg',
  '/images/gallery/research/workshop-session-1.jpg',
  '/images/gallery/research/research-collaboration-1.jpg',
]

const communityGallery = [
  '/images/gallery/community/community-engagement-1.jpg',
  '/images/gallery/community/volunteer-session-1.jpg',
  '/images/gallery/community/partnership-meeting-1.jpg',
  '/images/gallery/community/isir-team-outreach-1.jpg',
]

function GallerySection({ title, description, images }: { title: string; description: string; images: string[] }) {
  return (
    <section className="py-20 bg-white">
      <div className="container-width">
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl font-bold text-darkNavy mb-4">{title}</h2>
          <p className="text-lg text-charcoal leading-8">{description}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden min-h-[320px] bg-lightBlue shadow-sm hover:shadow-xl transition"
            >
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function GalleryPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-lightBlue py-24">
        <div className="container-width max-w-5xl">
          <p className="text-primaryGreen font-semibold uppercase tracking-wide mb-4">
            Media and Gallery
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-darkNavy leading-tight mb-8">
            Documenting impact through stories, images, and community engagement.
          </h1>

          <p className="text-xl text-charcoal leading-9 max-w-4xl">
            Explore ISIR Ghana’s field activities, educational outreach, maternal health programs, research engagements, partnerships, and community-centered initiatives across Northern Ghana.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-width">
          <SectionHeader
            eyebrow="Institutional Storytelling"
            title="Capturing sustainable impact across communities"
            description="ISIR Ghana believes that visual storytelling is an important part of documenting development, innovation, learning, partnerships, and community transformation."
            center
          />
        </div>
      </section>

      <GallerySection
        title="STEAM Education and Innovation"
        description="Hands-on educational outreach programs designed to inspire creativity, engineering thinking, coding skills, innovation, and inclusive learning opportunities for students across Northern Ghana."
        images={steamGallery}
      />

      <GallerySection
        title="Maternal and Community Health"
        description="Community-centered health outreach and maternal support initiatives focused on dignity, awareness, nutrition, antenatal care, and sustainable health engagement."
        images={healthGallery}
      />

      <GallerySection
        title="Research and Knowledge Exchange"
        description="Scientific engagement, presentations, workshops, conferences, and collaborative knowledge-sharing activities supporting evidence-based development and innovation."
        images={researchGallery}
      />

      <GallerySection
        title="Community Engagement and Partnerships"
        description="Volunteerism, partnerships, outreach programs, and institutional collaboration activities supporting sustainable development and community resilience."
        images={communityGallery}
      />

      <section className="py-24 bg-darkNavy text-white">
        <div className="container-width text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building sustainable futures through research, innovation, and community action.
          </h2>

          <p className="text-lg leading-8 text-gray-300 mb-10">
            ISIR Ghana continues to document and share impactful stories from communities, schools, health facilities, research engagements, and development initiatives across Ghana.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
