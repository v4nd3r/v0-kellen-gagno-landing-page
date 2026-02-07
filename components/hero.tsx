"use client"

import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-gray-50 flex items-center pt-20">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23c49b63' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-tight mb-4">
              Kellen Gagno
            </h1>
            <p className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-[#c49b63] mb-6">
              Consultora Imobiliária
            </p>
            <p className="font-[family-name:var(--font-body)] text-base md:text-lg text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Especialista em imóveis de médio e alto padrão. Experiência e dedicação para encontrar o imóvel ideal para você e sua família.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contato"
                className="bg-[#c49b63] text-white px-8 py-3.5 rounded font-[family-name:var(--font-body)] font-semibold hover:bg-[#b38a52] transition-colors text-center"
              >
                Entre em Contato
              </Link>
              <Link
                href="#imoveis"
                className="border-2 border-[#c49b63] text-[#c49b63] px-8 py-3.5 rounded font-[family-name:var(--font-body)] font-semibold hover:bg-[#c49b63] hover:text-white transition-colors text-center"
              >
                Ver Imoveis
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-[#c49b63]/30 rounded-lg transform rotate-3" />
              <div className="absolute -inset-4 border-2 border-[#c49b63]/20 rounded-lg transform -rotate-3" />
              
              <Image
                src="/images/Profissional-3.png"
                alt="Kellen Gagno - Corretora de Imoveis"
                width={450}
                height={550}
                className="rounded-lg shadow-2xl relative z-10 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#c49b63]/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#c49b63] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
