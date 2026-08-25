"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

type Image = {
  src: string
  alt: string
  label: string
}

type GalleryProps = {
  titulo: string
  images: Image[]
}

export function PropertyGallery({ titulo, images }: GalleryProps) {
const [activeImage, setActiveImage] = useState(0)
const moveGallery = (direction: number) => setActiveImage((current) => (current + direction + images.length) % images.length)

  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="gallery-title">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-4">
              {titulo}
            </h2>
            <div className="w-20 h-1 bg-[#c49b63]" />
          </div>
          <div className="flex gap-2">
            <button onClick={() => moveGallery(-1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#14231c]/20 transition-colors hover:bg-[#14231c] hover:text-white" aria-label="Imagem anterior"><ChevronLeft /></button>
            <button onClick={() => moveGallery(1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#14231c]/20 transition-colors hover:bg-[#14231c] hover:text-white" aria-label="Próxima imagem"><ChevronRight /></button>
          </div>
        </div>
        <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-lg md:aspect-[16/8]">
          <Image key={images[activeImage].src} src={images[activeImage].src} alt={images[activeImage].alt} fill sizes="100vw" className="object-cover" />
          <div className="absolute bottom-0 left-0 bg-[#14231c] px-5 py-3 font-[family-name:var(--font-body)] text-sm text-white">{images[activeImage].label} · {String(activeImage + 1).padStart(2, "0")}/{String(images.length).padStart(2, "0")}</div>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) =>
            <button key={image.src} onClick={() => setActiveImage(index)} className={`relative h-20 min-w-28 overflow-hidden rounded border-2 ${activeImage === index ? "border-[#b18a57]" : "border-transparent"}`} aria-label={`Ver ${image.label}`} aria-current={activeImage === index}>
              <Image src={image.src} alt={image.alt} fill sizes="112px" className="object-cover" />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
