import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* About Hero */}
      <section className="relative h-[50vh]">
        <Image src="/images/about-hero.jpg" alt="Purple Octa Creation design studio" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-center">
            About <span className="text-purple-500">Us</span>
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Who We <span className="text-purple-500">Are</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Purple Octa Creation is a premium interior design studio specializing in creating spaces that blend
              functionality with aesthetic excellence. Founded on the principle that every space tells a story, we work
              closely with our clients to craft interiors that reflect their unique personalities and meet their
              specific needs.
            </p>
            <p className="text-gray-300 mb-4">
              Our team of experienced designers and craftsmen brings together diverse perspectives and expertise to
              deliver exceptional results. We believe that thoughtful design has the power to transform not just spaces,
              but the lives of those who inhabit them.
            </p>
            <p className="text-gray-300">
              Whether it's a cozy residential sanctuary or a dynamic commercial environment, we approach each project
              with the same level of dedication, creativity, and attention to detail.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="/images/design-team.jpg" alt="Purple Octa Creation design team" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-purple-500">Vision</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-800 p-8 rounded-lg">
              <h3 className="font-playfair text-2xl font-bold mb-4">Innovative Design</h3>
              <p className="text-gray-300">
                We push boundaries and challenge conventions to create spaces that are both timeless and
                forward-thinking.
              </p>
            </div>
            <div className="bg-zinc-800 p-8 rounded-lg">
              <h3 className="font-playfair text-2xl font-bold mb-4">Sustainable Practices</h3>
              <p className="text-gray-300">
                We are committed to environmentally responsible design, incorporating sustainable materials and
                practices whenever possible.
              </p>
            </div>
            <div className="bg-zinc-800 p-8 rounded-lg">
              <h3 className="font-playfair text-2xl font-bold mb-4">Client Collaboration</h3>
              <p className="text-gray-300">
                We believe the best designs emerge from a collaborative process that honors the client's vision while
                leveraging our expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-16">
          Our <span className="text-purple-500">Journey</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-700"></div>

          {/* Timeline items */}
          <div className="grid grid-cols-1 gap-12">
            <div className="relative flex items-center justify-end md:justify-start md:even:justify-end">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="w-full md:w-5/12 bg-zinc-800 p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-bold mb-2">2018</h3>
                <p className="text-gray-300">
                  Founded as a small residential design studio with a focus on personalized interiors.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-end md:justify-end">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="w-full md:w-5/12 bg-zinc-800 p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-bold mb-2">2020</h3>
                <p className="text-gray-300">
                  Expanded services to include commercial design and custom furniture creation.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-end md:justify-start">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="w-full md:w-5/12 bg-zinc-800 p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-bold mb-2">2022</h3>
                <p className="text-gray-300">
                  Established our full-service design studio and showroom in the heart of the city.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-end md:justify-end">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="w-full md:w-5/12 bg-zinc-800 p-6 rounded-lg">
                <h3 className="font-playfair text-xl font-bold mb-2">Present</h3>
                <p className="text-gray-300">
                  Continuing to grow our portfolio with innovative designs and satisfied clients across the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

