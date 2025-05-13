"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-black/90 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-playfair text-2xl font-bold">
            <span className="text-purple-500">Purple</span> Octa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/about" active={pathname === "/about"}>
            About
          </NavLink>
          <NavLink href="/services" active={pathname === "/services"}>
            Services
          </NavLink>
          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <MobileNavLink href="/" active={pathname === "/"}>
              Home
            </MobileNavLink>
            <MobileNavLink href="/about" active={pathname === "/about"}>
              About
            </MobileNavLink>
            <MobileNavLink href="/services" active={pathname === "/services"}>
              Services
            </MobileNavLink>
            <MobileNavLink href="/contact" active={pathname === "/contact"}>
              Contact
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

// Desktop NavLink component
function NavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`relative font-medium transition-colors duration-300 hover:text-purple-400 ${
        active ? "text-purple-500" : "text-white"
      }`}
    >
      {children}
      {active && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-purple-500"></span>}
    </Link>
  )
}

// Mobile NavLink component
function MobileNavLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={`block py-2 px-4 text-lg font-medium transition-colors duration-300 ${
        active ? "text-purple-500" : "text-white hover:text-purple-400"
      }`}
    >
      {children}
    </Link>
  )
}

