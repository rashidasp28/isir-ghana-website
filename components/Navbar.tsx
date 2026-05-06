import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/research', label: 'Research' },
  { href: '/impact', label: 'Impact' },
  { href: '/partners', label: 'Partners' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
]

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

        <div className="hidden lg:flex gap-6 text-charcoal font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primaryBlue transition">
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/get-involved"
          className="hidden sm:inline-flex bg-primaryGreen text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
        >
          Get Involved
        </Link>

        <div className="lg:hidden text-darkNavy font-semibold border border-softGray rounded-full px-4 py-2">
          Menu
        </div>
      </div>

      <div className="lg:hidden border-t border-softGray bg-white">
        <div className="container-width py-4 grid grid-cols-2 gap-4 text-sm font-medium text-charcoal">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primaryBlue transition">
              {link.label}
            </Link>
          ))}
          <Link href="/get-involved" className="text-primaryGreen font-bold">
            Get Involved
          </Link>
        </div>
      </div>
    </nav>
  )
}
