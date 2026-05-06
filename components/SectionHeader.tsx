type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}

export default function SectionHeader({ eyebrow, title, description, center = false }: SectionHeaderProps) {
  return (
    <div className={center ? 'max-w-3xl mx-auto text-center mb-12' : 'max-w-3xl mb-12'}>
      {eyebrow && <p className="text-primaryGreen font-semibold uppercase tracking-wide text-sm mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-5xl font-bold text-darkNavy leading-tight mb-5">{title}</h2>
      {description && <p className="text-lg text-charcoal leading-8">{description}</p>}
    </div>
  )
}
