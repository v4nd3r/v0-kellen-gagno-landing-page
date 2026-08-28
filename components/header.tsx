"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre" },
    { href: "#imoveis", label: "Imóveis" },
    { href: "#contato", label: "Contato" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        <Link href="#inicio" className="flex items-center">
          <Image
            src="/images/logo-horizontal.webp"
            alt="Kellen Gagno Corretora"
            width={120}
            height={60}
            className="h-14 w-auto"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black font-[family-name:var(--font-body)] text-sm font-medium tracking-wide hover:text-[#c49b63] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button - Right aligned */}
        <Link
          href="https://wa.me/5527992743485?text=Olá! Vi o seu site e gostaria de saber mais sobre os imóveis disponíveis."
          target="_blank"
          className="hidden md:block bg-[#c49b63] text-white px-6 py-2.5 rounded font-[family-name:var(--font-body)] text-sm font-semibold hover:bg-[#b38a52] transition-colors"
        >
          Agendar atendimento
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-black p-2"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black font-[family-name:var(--font-body)] text-sm font-medium tracking-wide hover:text-[#c49b63] transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/5527992743485?text=Olá! Vi o seu site e gostaria de saber mais sobre os imóveis disponíveis."
              target="_blank"
              className="bg-[#c49b63] text-white px-6 py-2.5 rounded font-[family-name:var(--font-body)] text-sm font-semibold hover:bg-[#b38a52] transition-colors text-center mt-2"
            >
              Agendar atendimento
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
