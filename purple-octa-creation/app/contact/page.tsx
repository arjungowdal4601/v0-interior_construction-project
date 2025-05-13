"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // This would be replaced with your actual form submission logic
      // For example, using a service like Formspree, SheetDB, or a custom API
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulating API call

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
      setSubmitStatus("success")
    } catch (error) {
      setSubmitStatus("error")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Contact Hero */}
      <section className="relative h-[50vh]">
        <Image src="/images/contact-hero.jpg" alt="Contact Purple Octa Creation" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-center">
            Contact <span className="text-purple-500">Us</span>
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Let's Transform <span className="text-purple-500">Your Space</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Tell us what you're dreaming of. Whether it's a cozy home renovation, a complete office redesign, or
              custom furniture pieces, we're here to bring your vision to life.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-purple-900/30 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-300">info@purpleoctacreation.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900/30 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-900/30 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-gray-300">
                    123 Design Avenue, Suite 500
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 p-8 rounded-lg">
            <h3 className="font-playfair text-2xl font-bold mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </span>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-900/30 border border-green-500 text-green-200 px-4 py-3 rounded-md">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-900/30 border border-red-500 text-red-200 px-4 py-3 rounded-md">
                  There was an error sending your message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 md:px-8 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
            Find <span className="text-purple-500">Us</span>
          </h2>

          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            {/* Map placeholder */}
            <div className="absolute inset-0 bg-zinc-800">
              <div className="relative w-full h-full">
                {/* Stylized map placeholder */}
                <div className="absolute inset-0 bg-zinc-800 overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(128, 90, 213, 0.3)" strokeWidth="1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Roads */}
                  <div className="absolute left-0 top-1/2 w-full h-6 bg-zinc-700 transform -translate-y-1/2"></div>
                  <div className="absolute left-1/2 top-0 w-6 h-full bg-zinc-700 transform -translate-x-1/2"></div>

                  {/* Location pin */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 rotate-45 w-8 h-8 bg-purple-600"></div>
                    </div>
                  </div>

                  {/* Building blocks */}
                  <div className="absolute left-1/4 top-1/4 w-12 h-12 bg-zinc-700 rounded-sm"></div>
                  <div className="absolute left-1/4 top-2/3 w-16 h-16 bg-zinc-700 rounded-sm"></div>
                  <div className="absolute left-2/3 top-1/4 w-20 h-14 bg-zinc-700 rounded-sm"></div>
                  <div className="absolute left-3/4 top-3/4 w-14 h-14 bg-zinc-700 rounded-sm"></div>
                </div>

                {/* Overlay with address */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-6">
                  <h3 className="font-playfair text-xl font-bold mb-2">Purple Octa Creation</h3>
                  <p className="text-gray-300">123 Design Avenue, Suite 500, New York, NY 10001</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

