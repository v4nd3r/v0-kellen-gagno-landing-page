"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Bed, Car, Maximize } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Cyan Ocean Front",
    location: "Enseada do Suá, Vitoria- ES",
    bedrooms: "4 quartos c/ 4 Suítes",
    parking: 4,
    area: "249 a 536m2",
    price: "À partir de R$ x.000.000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    tag: "Lançamento"
  },
  {
    id: 2,
    title: "Reserva Vitória",
    location: "Enseada do Suá, Vitoria- ES",
    bedrooms: "4 quartos c/ 4 Suítes",
    parking: 4,
    area: "177 a 311m2",
    price: "À partir de R$ x.000.000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    tag: "Exclusivo"
  },
  {
    id: 3,
    title: "Youniverse",
    location: "Enseada do Suá, Vitoria- ES",
    bedrooms: "Studio, 2 e 3 quartos",
    parking: 4,
    area: "38 a 94m2",
    price: "À partir de R$ x.000.000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    tag: "Lancamento"
  },
  {
    id: 4,
    title: "Vive Le Vin",
    location: "Domingos Martins - ES",
    bedrooms: "1, 2 ou 3 quartos",
    parking: 3,
    area: "56 a 86m2",
    price: "À partir de R$ x.000.000",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    tag: "Novo"
  },
]

function getTagColor(tag: string) {
  switch (tag) {
    case "Destaque":
      return "bg-[#c49b63] text-white"
    case "Exclusivo":
      return "bg-black text-white"
    case "Lancamento":
      return "bg-emerald-600 text-white"
    case "Novo":
      return "bg-sky-600 text-white"
    default:
      return "bg-[#c49b63] text-white"
  }
}

export function Properties() {
  const handleWhatsApp = (property: typeof properties[0]) => {
    const message = `Ola! Tenho interesse no imóvel: ${property.title} - ${property.location} (${property.price}). Gostaria de mais informações.`
    const whatsappUrl = `https://wa.me/5527992743485?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="imoveis" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4">
            Imoveis Selecionados
          </h2>
          <div className="w-20 h-1 bg-[#c49b63] mx-auto mb-8" />
          <p className="font-[family-name:var(--font-body)] text-gray-600 text-lg">
            Confira alguns imóveis exclusivos da minha carteira. Todos cuidadosamente selecionados para oferecer o melhor em qualidade e localização.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded text-xs font-semibold font-[family-name:var(--font-body)] ${getTagColor(property.tag)}`}>
                  {property.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-black mb-2 line-clamp-1">
                  {property.title}
                </h3>
                
                <div className="flex items-center gap-1 text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 text-[#c49b63]" />
                  <span className="font-[family-name:var(--font-body)] text-sm">{property.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Bed className="w-4 h-4" />
                    <span className="font-[family-name:var(--font-body)] text-sm">{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Car className="w-4 h-4" />
                    <span className="font-[family-name:var(--font-body)] text-sm">{property.parking}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Maximize className="w-4 h-4" />
                    <span className="font-[family-name:var(--font-body)] text-sm">{property.area}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-black">
                    {property.price}
                  </span>
                  <button
                    onClick={() => handleWhatsApp(property)}
                    className="bg-[#c49b63] text-white px-4 py-2 rounded font-[family-name:var(--font-body)] text-sm font-medium hover:bg-[#b38a52] transition-colors"
                  >
                    Saiba Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="https://wa.me/5527992743485?text=Ola! Gostaria de conhecer mais imoveis disponiveis."
            target="_blank"
            className="inline-block bg-[#c49b63] text-white px-8 py-3.5 rounded font-[family-name:var(--font-body)] font-semibold hover:bg-[#b38a52] transition-colors"
          >
            Ver Mais Imoveis
          </Link>
        </div>
      </div>
    </section>
  )
}
