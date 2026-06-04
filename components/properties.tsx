"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Bed, Car, Maximize } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Macan Residence",
    location: "Jardim Camburi, Vitoria - ES",
    bedrooms: "2 Quartos c/ Suíte",
    area: "À partir de 59,83m2",
    image: "/images/macan/fachada.jpg",
    tag: "Lançamento",
    link: "/macan-residence"
  },
  {
    id: 2,
    title: "Reserva Vitória",
    location: "Enseada do Suá, Vitoria - ES",
    bedrooms: "4 Quartos c/ 4 Suítes",
    area: "177 à 311m2",
    image: "/images/reserva-vitoria.jpg",
    tag: "Lançamento"
  },
  {
    id: 3,
    title: "Youniverse",
    location: "Enseada do Suá, Vitoria - ES",
    bedrooms: "Studio, 2 e 3 Quartos",
    area: "38 a 94m2",
    image: "/images/youniverse.jpg",
    tag: "Lançamento"
  },
  {
    id: 4,
    title: "Hillside",
    location: "Santa Lúcia, Vitória-ES",
    bedrooms: "2 à 4 Quartos",
    area: "65 a 170m2",
    image: "/images/hillside.jpg",
    tag: "Destaque"
  },
  {
    id: 5,
    title: "Cidade Camburi",
    location: "Jardim Camburi, Vitória-ES",
    bedrooms: "1, 2 Quartos",
    area: "30 a 67m2",
    image: "/images/cidade-camburi.jpeg",
    tag: "Lançamento"
  },
  {
    id: 6,
    title: "Parque Flora",
    location: "Jardim Camburi, Vitória-ES",
    bedrooms: "2, 3 Quartos e 3 Suites",
    area: "64 a 227m2",
    image: "/images/parque-flora.png",
    tag: "Lançamento"
  },
]

function getTagColor(tag: string) {
  switch (tag) {
    case "Destaque":
      return "bg-[#c49b63] text-white"
    case "Exclusivo":
      return "bg-black text-white"
    case "Lançamento":
      return "bg-emerald-600 text-white"
    case "Novo":
      return "bg-sky-600 text-white"
    default:
      return "bg-[#c49b63] text-white"
  }
}

export function Properties() {
  const handleWhatsApp = (property: typeof properties[0]) => {
    const message = `Olá! Tenho interesse no imóvel: ${property.title} - ${property.location}. Gostaria de mais informações.`
    const whatsappUrl = `https://wa.me/5527992743485?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="imoveis" className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4">
            Imóveis Selecionados
          </h2>
          <div className="w-20 h-1 bg-[#c49b63] mx-auto mb-8" />
          <p className="font-[family-name:var(--font-body)] text-gray-600 text-lg">
            Confira alguns imóveis exclusivos da minha carteira. Todos cuidadosamente selecionados para oferecer o melhor em qualidade e localização.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <Maximize className="w-4 h-4" />
                    <span className="font-[family-name:var(--font-body)] text-sm">{property.area}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => property.link ? location.href = property.link : handleWhatsApp(property)}
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
            href="https://wa.me/5527992743485?text=Olá! Vi o seu site e gostaria de conhecer mais imóveis disponíveis."
            target="_blank"
            className="inline-block bg-[#c49b63] text-white px-8 py-3.5 rounded font-[family-name:var(--font-body)] font-semibold hover:bg-[#b38a52] transition-colors"
          >
            Ver Mais Imóveis
          </Link>
        </div>
      </div>
    </section>
  )
}
