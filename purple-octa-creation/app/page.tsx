import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Compass, Heart, Layers } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/images/hero-interior.jpg"
          alt="Elegant interior design showcase"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Where Every Detail <span className="text-purple-500">Tells a Story</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Interior Consultant & Contractor</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center"
            >
              Book an Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="bg-transparent border border-white hover:border-purple-500 hover:text-purple-500 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
          Our Design <span className="text-purple-500">Philosophy</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="0">
            <div className="bg-purple-900/30 p-6 rounded-full mb-6">
              <Compass className="h-10 w-10 text-purple-500" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-3">Design</h3>
            <p className="text-gray-300">
              We create spaces that reflect your personality and meet your functional needs through thoughtful design.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="150">
            <div className="bg-purple-900/30 p-6 rounded-full mb-6">
              <Heart className="h-10 w-10 text-purple-500" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-3">Emotion</h3>
            <p className="text-gray-300">
              We believe spaces should evoke feelings and create memorable experiences for those who inhabit them.
            </p>
          </div>

          <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-purple-900/30 p-6 rounded-full mb-6">
              <Layers className="h-10 w-10 text-purple-500" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-3">Execution</h3>
            <p className="text-gray-300">
              We bring designs to life with meticulous attention to detail and premium craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
            Featured <span className="text-purple-500">Services</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="/images/residential-interior.jpg"
                  alt="Residential Interior Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-2">Residential Interiors</h3>
                <p className="text-gray-300 mb-4">
                  Transform your home into a sanctuary that reflects your personal style.
                </p>
                <Link href="/services" className="text-purple-500 hover:text-purple-400 flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="/images/commercial-interior.jpg"
                  alt="Commercial Interior Design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-2">Commercial Design</h3>
                <p className="text-gray-300 mb-4">
                  Create productive and inspiring workspaces that elevate your brand.
                </p>
                <Link href="/services" className="text-purple-500 hover:text-purple-400 flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="h-64 relative">
                <Image src="/images/custom-furniture.jpg" alt="Custom Furniture Design" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold mb-2">Custom Furniture</h3>
                <p className="text-gray-300 mb-4">
                  Bespoke furniture pieces designed specifically for your space and needs.
                </p>
                <Link href="/services" className="text-purple-500 hover:text-purple-400 flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

