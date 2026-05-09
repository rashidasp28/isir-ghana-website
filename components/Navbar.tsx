'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/stem-kits', label: 'STEM Kits' },
  { href: '/research', label: 'Research' },
  { href: '/impact', label: 'Impact' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/consultancy', label: 'Consultancy' },
  { href: '/partners', label: 'Partners' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="w-full bg-white border-b border-softGray sticky top-0 z-50">
      <div className="container-width flex items-center justify-between py-3">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 text-primaryBlue font-bold text-2xl">
          <Image
            src="/logo/isir-logo.PNG"
            alt="ISIR Ghana logo"
            width={120}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
          <span className="sr-only">ISIR Ghana</span>
        </Link>

        <div className="hidden xl:flex gap-4 text-charcoal font-medium text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primaryBlue transition whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/get-involved"
          className="hidden xl:inline-flex bg-primaryGreen text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition"
        >
          Get Involved
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="xl:hidden text-darkNavy font-semibold border border-softGray rounded-full px-4 py-2 flex items-center gap-2"
        >
          <span>{isOpen ? 'Close' : 'Menu'}</span>
          <span aria-hidden="true" className="text-lg leading-none">
            {isOpen ? '×' : '☰'}
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`xl:hidden overflow-hidden border-t border-softGray bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="container-width py-4 grid grid-cols-2 gap-4 text-sm font-medium text-charcoal">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu} className="hover:text-primaryBlue transition">
              {link.label}
            </Link>
          ))}
          <Link href="/get-involved" onClick={closeMenu} className="text-primaryGreen font-bold">
            Get Involved
          </Link>
        </div>
      </div>
    </nav>
  )
}
