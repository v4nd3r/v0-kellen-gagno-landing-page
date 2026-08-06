"use client"

import { MapPin } from "lucide-react"

type LocationProps = {
  titulo: string
  descricao: string
  endereco: string
  endereco2: string
  urlMapa: string
}

export function PropertyLocation({ titulo, descricao, endereco, endereco2, urlMapa }: LocationProps) {

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-4">
              {titulo}
            </h2>
            <p className="font-[family-name:var(--font-body)] text-gray-600 max-w-2xl">
                {descricao}
            </p>
            <div className="w-20 h-1 bg-[#c49b63] mt-4" />
            <div className="flex items-start gap-4 pt-6">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#b18a57]" />
                <div>
                    <p className="font-[family-name:var(--font-body)] font-semibold">{endereco}</p>
                    <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-[#14231c]/60">{endereco2}</p>
                </div>
            </div>
          </div>
          <div className="rounded-lg">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src={urlMapa}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
