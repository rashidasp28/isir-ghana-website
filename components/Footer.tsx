import Image from 'next/image'
import Link from 'next/link'

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

          <p className="text-sm leading-7 text-gray-300">
            Bridging research, innovation, and community action for sustainable development in Ghana.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/about" className="hover:text-primaryGreen transition">About</Link></li>
            <li><Link href="/programs" className="hover:text-primaryGreen transition">Programs</Link></li>
            <li><Link href="/research" className="hover:text-primaryGreen transition">Research</Link></li>
            <li><Link href="/impact" className="hover:text-primaryGreen transition">Impact</Link></li>
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
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm text-gray-300 leading-7 mb-4">
            Tamale, Ghana
            <br />
            isirghana@gmail.com
          </p>
          <Link href="/contact" className="inline-flex bg-primaryGreen text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="container-width border-t border-white/10 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} ISIR Ghana. All rights reserved.</p>
        <p>Sustainability Through Innovation</p>
      </div>
    </footer>
  )
}
