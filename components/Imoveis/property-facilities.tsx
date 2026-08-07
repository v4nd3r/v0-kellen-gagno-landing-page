import React from "react"
import Image from "next/image"
import Link from "next/link"

const WHATSAPP_NUMBER = "5527992743485"

type Facility = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  text: string
}

type FacilitiesProps = {
  itensLazer: Facility[]
  titulo: string
  descricao: string
  urlImage: string
  altUrlImage: string
  whatsappMessage: string
}

export function PropertyFacilities({ itensLazer, titulo, descricao, urlImage, altUrlImage, whatsappMessage }: FacilitiesProps) {

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={urlImage}
              alt={altUrlImage}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-4">
              {titulo}
            </h2>
            <div className="w-20 h-1 bg-[#c49b63] mb-4" />
            <p className="font-[family-name:var(--font-body)] text-gray-700 text-sm mb-6">
              {descricao}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {itensLazer.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#c49b63]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#c49b63]" />
                  </div>
                  <span className="font-[family-name:var(--font-body)] text-gray-700 text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              className="inline-block mt-8 bg-[#c49b63] text-white px-8 py-3 rounded font-[family-name:var(--font-body)] font-semibold hover:bg-[#b38a52] transition-colors"
            >
              Agendar Visita
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
