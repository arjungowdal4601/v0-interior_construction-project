import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 text-gray-300">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-playfair text-2xl font-bold">
                <span className="text-purple-500">Purple</span> Octa
              </span>
            </Link>
            <p className="mb-4 text-gray-400">Where Every Detail Tells a Story</p>
            <p className="text-sm text-gray-400">
              Interior Consultant & Contractor for Residential and Commercial spaces
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-purple-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-purple-400 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Design Avenue, Suite 500</p>
              <p>New York, NY 10001</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@purpleoctacreation.com</p>
            </address>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="mailto:info@purpleoctacreation.com"
                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Purple Octa Creation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

