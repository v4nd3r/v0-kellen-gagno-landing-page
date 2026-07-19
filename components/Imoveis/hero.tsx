"use client"

import Image from "next/image"

type HeroHeaderProps = {
  urlImage: string
  altUrlImage: string
  tipoEmpreendimento?: string
  nomeEmpreendimento?: string
  descricaoEmpreendimento?: string
  detalhesEmpreendimento?: string[]
}

export function HeroHeader({ urlImage, altUrlImage, tipoEmpreendimento, nomeEmpreendimento, descricaoEmpreendimento, detalhesEmpreendimento }: HeroHeaderProps) {

  return (
    <section className="pt-18">
        <div className="relative h-[60vh] lg:h-[70vh]">
            <Image
                src={urlImage}
                alt={altUrlImage}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
                <div className="container mx-auto">
                    <span className="inline-block bg-[#c49b63] text-white px-4 py-1 rounded text-sm font-[family-name:var(--font-body)] font-medium mb-4">
                        {tipoEmpreendimento}
                    </span>
                    <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl text-white font-semibold mb-4">
                        {nomeEmpreendimento}
                    </h1>
                    <p className="font-[family-name:var(--font-body)] text-lg lg:text-xl text-white/90 max-w-2xl">
                        {descricaoEmpreendimento}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                        {detalhesEmpreendimento?.map((item) => 
                            <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded">
                                <span key={item} className="text-white font-[family-name:var(--font-body)] text-sm">{item}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
