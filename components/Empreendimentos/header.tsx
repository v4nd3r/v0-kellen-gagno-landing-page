"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <main>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-black hover:text-[#c49b63] transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="font-[family-name:var(--font-body)] text-sm font-medium">Voltar</span>
            </Link>
            <Image
                src="/images/logo.png"
                alt="Kellen Gagno Corretora"
                width={100}
                height={50}
                className="h-10 w-auto"
            />
            <Link
                href="https://wa.me/5527992743485?text=Olá! Tenho interesse no Macan Residence."
                target="_blank"
                className="bg-[#c49b63] text-white px-4 py-2 rounded font-[family-name:var(--font-body)] text-sm font-semibold hover:bg-[#b38a52] transition-colors"
            >
                Fale Comigo
            </Link>
            </div>
        </header>

        {/* Hero Section */}
        <section className="pt-18">
            <div className="relative h-[60vh] lg:h-[70vh]">
            <Image
                src="/images/macan/fachada.jpg"
                alt="Macan Residence"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
                <div className="container mx-auto">
                <span className="inline-block bg-[#c49b63] text-white px-4 py-1 rounded text-sm font-[family-name:var(--font-body)] font-medium mb-4">
                    Lançamento
                </span>
                <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl text-white font-semibold mb-4">
                    Macan Residence
                </h1>
                <p className="font-[family-name:var(--font-body)] text-lg lg:text-xl text-white/90 max-w-2xl">
                    Seu refúgio de conforto e tranquilidade em Jardim Camburi. Apartamentos de 2 quartos com suíte e opções Garden.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded">
                    <span className="text-white font-[family-name:var(--font-body)] text-sm">2 Quartos c/ Suíte</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded">
                    <span className="text-white font-[family-name:var(--font-body)] text-sm">À partir de 59,83 m²</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded">
                    <span className="text-white font-[family-name:var(--font-body)] text-sm">Jardim Camburi</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </main>
  )
}
