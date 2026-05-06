export default function Footer() {
  return (
    <footer className="bg-darkNavy text-white py-16 mt-20">
      <div className="container-width grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-4">ISIR Ghana</h3>
          <p className="text-sm leading-7 text-gray-300">
            Bridging research, innovation, and community action for sustainable development in Ghana.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About</li>
            <li>Programs</li>
            <li>Research</li>
            <li>Impact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Focus Areas</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>STEAM Education</li>
            <li>Maternal Health</li>
            <li>Agriculture</li>
            <li>Climate Change</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm text-gray-300 leading-7">
            Tamale, Ghana
            <br />
            isirghana@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}
