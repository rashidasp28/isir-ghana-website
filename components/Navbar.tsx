import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-softGray sticky top-0 z-50">
      <div className="container-width flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/isir-logo.png"
            alt="ISIR Ghana logo"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="sr-only">ISIR Ghana</span>
        </Link>

        <div className="hidden md:flex gap-6 text-charcoal font-medium">
          <Link href="/about" className="hover:text-primaryBlue transition">About</Link>
          <Link href="/programs" className="hover:text-primaryBlue transition">Programs</Link>
          <Link href="/research" className="hover:text-primaryBlue transition">Research</Link>
          <Link href="/impact" className="hover:text-primaryBlue transition">Impact</Link>
          <Link href="/partners" className="hover:text-primaryBlue transition">Partners</Link>
          <Link href="/contact" className="hover:text-primaryBlue transition">Contact</Link>
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
