import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-softGray sticky top-0 z-50">
      <div className="container-width flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-primaryBlue">
          ISIR Ghana
        </Link>

        <div className="hidden md:flex gap-6 text-charcoal font-medium">
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/research">Research</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <Link
          href="/get-involved"
          className="bg-primaryGreen text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
        >
          Get Involved
        </Link>
      </div>
    </nav>
  )
}
