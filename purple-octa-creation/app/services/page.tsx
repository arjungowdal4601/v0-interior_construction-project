import Image from "next/image"
import { Compass, PlaneTakeoffIcon as LayoutPlaneTakeoff, Home, Building2, Hammer, Sofa } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Services Hero */}
      <section className="relative h-[50vh]">
        <Image src="/images/services-hero.jpg" alt="Purple Octa Creation services" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-center">
            Our <span className="text-purple-500">Services</span>
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
          What We <span className="text-purple-500">Offer</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-zinc-800 rounded-lg p-8 transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Compass className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-3">Interior Design Consultation</h3>
            <p className="text-gray-300">
              Professional guidance on space planning, color schemes, material selection, and overall design direction
              tailored to your preferences and needs.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-zinc-800 rounded-lg p-8 transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <LayoutPlaneTakeoff className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-3">Space Planning</h3>
            <p className="text-gray-300">
              Strategic arrangement of furniture and elements to optimize flow, functionality, and aesthetics while
              maximizing the potential of your space.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-zinc-800 rounded-lg p-8 transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Home className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-3">Residential Interiors</h3>
            <p className="text-gray-300">
              Complete design solutions for homes, apartments, and living spaces that balance comfort, style, and
              functionality to create your ideal living environment.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-zinc-800 rounded-lg p-8 transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-3">Office/Commercial Design</h3>
            <p className="text-gray-300">
              Innovative workspace designs that enhance productivity, reflect your brand identity, and create impressive
              environments for clients and employees.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-zinc-800 rounded-lg p-8 transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Hammer className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-3">Turnkey Execution</h3>
            <p className="text-gray-300">
              End-to-end project management from concept to completion, handling all aspects of construction,
              installation, and finishing for a seamless experience.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-zinc-800 rounded-lg p-8 transition-transform duration-300 hover:scale-105">
            <div className="bg-purple-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Sofa className="h-8 w-8 text-purple-500" />
            </div>
            <h3 className="font-playfair text-2xl font-bold mb-3">Custom Furniture & Styling</h3>
            <p className="text-gray-300">
              Bespoke furniture design and creation, along with curated styling services to add the perfect finishing
              touches to your space.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
            How We <span className="text-purple-500">Work</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-zinc-800 rounded-lg p-8 h-full">
                <div className="absolute -top-5 -left-5 bg-purple-700 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4 mt-4">Consult</h3>
                <p className="text-gray-300">
                  We begin with an in-depth consultation to understand your vision, requirements, lifestyle, and budget.
                  This forms the foundation of our design approach.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-zinc-800 rounded-lg p-8 h-full">
                <div className="absolute -top-5 -left-5 bg-purple-700 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4 mt-4">Design</h3>
                <p className="text-gray-300">
                  Our team develops detailed design concepts, including space planning, material selections, color
                  schemes, and 3D visualizations for your approval.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-zinc-800 rounded-lg p-8 h-full">
                <div className="absolute -top-5 -left-5 bg-purple-700 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-4 mt-4">Execute</h3>
                <p className="text-gray-300">
                  We manage the entire implementation process, coordinating with contractors, craftsmen, and vendors to
                  bring your design to life with precision and care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] group overflow-hidden rounded-lg">
            <Image
              src="/images/project-1.jpg"
              alt="Luxury Residential Project"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="font-playfair text-2xl font-bold mb-2">Modern Minimalist Home</h3>
                <p className="text-gray-200">Residential Interior Design</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] group overflow-hidden rounded-lg">
            <Image
              src="/images/project-2.jpg"
              alt="Contemporary Office Space"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="font-playfair text-2xl font-bold mb-2">Creative Agency Headquarters</h3>
                <p className="text-gray-200">Commercial Interior Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

