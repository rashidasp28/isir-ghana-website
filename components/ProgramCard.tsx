type ProgramCardProps = {
  title: string
  description: string
}

export default function ProgramCard({ title, description }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-softGray shadow-sm hover:shadow-xl transition duration-300">
      <div className="h-52 bg-gradient-to-r from-primaryBlue to-primaryGreen"></div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-darkNavy mb-4">{title}</h3>

        <p className="text-charcoal leading-7 mb-6">{description}</p>

        <button className="bg-primaryGreen text-white px-5 py-3 rounded-full font-semibold hover:opacity-90 transition">
          Learn More
        </button>
      </div>
    </div>
  )
}
