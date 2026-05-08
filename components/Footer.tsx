import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/institute-for-sustainable-and-innovative-research/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.32 8.04h4.36V23H.32V8.04ZM7.53 8.04h4.18v2.04h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.9 5.21 6.66V23h-4.35v-7.56c0-1.8-.03-4.12-2.51-4.12-2.52 0-2.9 1.97-2.9 4V23H7.53V8.04Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/isir.ghana',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.3A4.7 4.7 0 1 1 12 16.7a4.7 4.7 0 0 1 0-9.4Zm0 2A2.7 2.7 0 1 0 12 14.7a2.7 2.7 0 0 0 0-5.4Zm5.05-2.65a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@isir.ghana',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M16.7 2c.35 2.72 1.86 4.34 4.58 4.52v3.06a8.2 8.2 0 0 1-4.46-1.38v6.87c0 3.49-2.23 6.93-6.77 6.93-3.54 0-6.33-2.55-6.33-6.05 0-4.06 3.63-6.84 7.67-6.05v3.23c-1.85-.58-4.1.47-4.1 2.7 0 1.52 1.19 2.67 2.8 2.67 1.85 0 3.09-1.19 3.09-3.57V2h3.52Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@isirghana',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M23.5 6.2a3.02 3.02 0 0 0-2.13-2.14C19.49 3.56 12 3.56 12 3.56s-7.49 0-9.37.5A3.02 3.02 0 0 0 .5 6.2 31.49 31.49 0 0 0 0 12a31.49 31.49 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.13 2.14c1.88.5 9.37.5 9.37.5s7.49 0 9.37-.5a3.02 3.02 0 0 0 2.13-2.14A31.49 31.49 0 0 0 24 12a31.49 31.49 0 0 0-.5-5.8ZM9.75 15.57V8.43L16 12l-6.25 3.57Z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/ISIRGhana',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-6.4L6.45 22H3.34l7.25-8.29L2.94 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.84h1.72L8.4 4.05H6.55L17.8 19.84Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-darkNavy text-white py-16 mt-20">
      <div className="container-width grid md:grid-cols-4 gap-10">
        <div>
          <Link href="/">
            <Image
              src="/logo/isir-logo-white.png"
              alt="ISIR Ghana white logo"
              width={140}
              height={60}
              className="h-14 w-auto object-contain mb-5"
            />
          </Link>

          <p className="text-sm leading-7 text-gray-300 mb-6">
            Bridging research, innovation, and community action for sustainable development in Ghana.
          </p>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow ISIR Ghana on ${social.name}`}
                title={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:border-primaryGreen hover:bg-primaryGreen hover:text-white transition"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/about" className="hover:text-primaryGreen transition">About</Link></li>
            <li><Link href="/programs" className="hover:text-primaryGreen transition">Programs</Link></li>
            <li><Link href="/stem-kits" className="hover:text-primaryGreen transition">STEM Kits</Link></li>
            <li><Link href="/research" className="hover:text-primaryGreen transition">Research</Link></li>
            <li><Link href="/impact" className="hover:text-primaryGreen transition">Impact</Link></li>
            <li><Link href="/gallery" className="hover:text-primaryGreen transition">Gallery</Link></li>
            <li><Link href="/consultancy" className="hover:text-primaryGreen transition">Consultancy</Link></li>
            <li><Link href="/partners" className="hover:text-primaryGreen transition">Partners</Link></li>
            <li><Link href="/news" className="hover:text-primaryGreen transition">News</Link></li>
            <li><Link href="/contact" className="hover:text-primaryGreen transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Focus Areas</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/programs" className="hover:text-primaryGreen transition">STEAM Education</Link></li>
            <li><Link href="/programs" className="hover:text-primaryGreen transition">Maternal Health</Link></li>
            <li><Link href="/programs" className="hover:text-primaryGreen transition">Agriculture</Link></li>
            <li><Link href="/programs" className="hover:text-primaryGreen transition">Climate Change</Link></li>
            <li><Link href="/consultancy" className="hover:text-primaryGreen transition">Research and MEL Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm text-gray-300 leading-7 mb-4">
            Building #NL148 Blk A
            <br />
            North Lamashegu – Tamale, Ghana
            <br />
            Digital Address: NT-0047-6051
            <br />
            +233 20 743 6517
            <br />
            isirghana@gmail.com
          </p>

          <div className="flex flex-col gap-3 items-start">
            <Link href="/contact" className="inline-flex bg-primaryGreen text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
              Contact Us
            </Link>
            <Link href="/consultancy" className="inline-flex border border-white/30 text-white px-5 py-2 rounded-full text-sm font-semibold hover:border-primaryGreen hover:text-primaryGreen transition">
              Request Consultancy
            </Link>
          </div>
        </div>
      </div>

      <div className="container-width border-t border-white/10 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} ISIR Ghana. All rights reserved.</p>
        <p>Sustainability Through Innovation</p>
      </div>
    </footer>
  )
}
