import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-300">
              Professional web development services to transform your business online.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-primary">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-primary">Web Design</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-primary">E-commerce</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-primary">SEO Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-primary">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-primary">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@setgalaxy.com</p>
              <p>Phone: +91 9411253874</p>
              <p>Address: D5-3-GF, BPTP PARKLAND D BLOCK, SECTOR 85, FARIDABAD</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 SetGalaxy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}