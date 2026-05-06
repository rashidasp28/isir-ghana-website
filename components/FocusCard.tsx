type FocusCardProps = {
  title: string
  description: string
}

export default function FocusCard({ title, description }: FocusCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-softGray p-8 shadow-sm hover:shadow-lg transition duration-300">
      <div className="w-14 h-14 rounded-2xl bg-lightGreen mb-6 flex items-center justify-center">
        <div className="w-6 h-6 rounded-full bg-primaryGreen"></div>
      </div>

      <h3 className="text-2xl font-bold text-darkNavy mb-4">{title}</h3>

      <p className="text-charcoal leading-7">{description}</p>
    </div>
  )
}
