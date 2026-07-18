"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Dumbbell, Leaf, MapPin, PawPrint, Trees, Utensils, Waves, Wifi, Building2, Flower2, Baby, Flame, Check } from "lucide-react"
import { PropertyFooter } from "@/components/Empreendimentos/property-footer"
import { PropertyHeader } from "@/components/Empreendimentos/property-header"

const whatsapp = "5527992743485"
const gallery = [
  { src: "/images/parque-flora/hero.jpg", alt: "Piscina e área de lazer do Parque Flora", label: "Piscina e lazer" },
  { src: "/images/parque-flora/deck.jpg", alt: "Deck molhado do Parque Flora", label: "Deck molhado" },
  { src: "/images/parque-flora/pool-bar.jpg", alt: "Bar da piscina do Parque Flora", label: "Bar da piscina" },
  { src: "/images/parque-flora/grill.jpg", alt: "Espaço grill do Parque Flora", label: "Espaço grill" },
  { src: "/images/parque-flora/fireplace.jpg", alt: "Fireplace do Parque Flora", label: "Fireplace" },
  { src: "/images/parque-flora/party.jpg", alt: "Salão de festas do Parque Flora", label: "Salão de festas" },
  { src: "/images/parque-flora/fitness.jpg", alt: "Academia do Parque Flora", label: "Fitness" },
  { src: "/images/parque-flora/zen.jpg", alt: "Espaço zen do Parque Flora", label: "Espaço zen" },
  { src: "/images/parque-flora/playroom.jpg", alt: "Brinquedoteca do Parque Flora", label: "Brinquedoteca" },
]

const amenities = [
  { icon: Waves, title: "Piscinas e deck molhado" },
  { icon: Utensils, title: "Espaços gourmet e grill" },
  { icon: Dumbbell, title: "Fitness completo" },
  { icon: Baby, title: "Brinquedoteca" },
  { icon: PawPrint, title: "Pet place" },
  { icon: Flame, title: "Fireplace" },
  { icon: Flower2, title: "Horta e espaço zen" },
  { icon: Wifi, title: "Conveniência e tecnologia" },
]

const highlights = [
  "Duas torres residenciais integradas à natureza",
  "Apartamentos de 2 e 3 quartos e opções com 3 suítes",
  "Plantas de 64,78 m² a 227,01 m²",
  "3.439 m² dedicados ao lazer e à conveniência",
  "Parque público anexo ao empreendimento",
  "Flora Mall com lojas e serviços no dia a dia",
]

function WhatsAppLink({ children, message, className }: { children: React.ReactNode; message: string; className: string }) {
  return <Link href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className={className}>{children}</Link>
}

export function ParqueFloraPage() {
  const [activeImage, setActiveImage] = useState(0)
  const [form, setForm] = useState({ nome: "", telefone: "", interesse: "Apartamento de 3 quartos" })

  const moveGallery = (direction: number) => setActiveImage((current) => (current + direction + gallery.length) % gallery.length)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const message = `Olá! Me chamo ${form.nome}, meu telefone é ${form.telefone} e tenho interesse no Parque Flora (${form.interesse}). Gostaria de receber mais informações.`
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  return (
    <main className="min-h-screen bg-white text-[#14231c]">
      <PropertyHeader
        propertyName="Parque Flora"
        whatsappMessage="Olá! Tenho interesse no Parque Flora."
      />

      <section className="relative flex min-h-[760px] items-end pt-20 lg:min-h-[820px]">
        <Image src="/images/parque-flora/hero.jpg" alt="Vista da área de lazer do Parque Flora" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#14231c]/60" />
        <div className="container relative z-10 mx-auto px-4 pb-16 pt-32 lg:pb-24">
          <div className="max-w-4xl">
            <p className="mb-5 font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.22em] text-[#e7d5b9]">Lançamento em Jardim Camburi</p>
            <h1 className="text-balance font-[family-name:var(--font-heading)] text-6xl font-semibold leading-none text-white md:text-7xl lg:text-8xl">Parque Flora</h1>
            <p className="mt-6 max-w-2xl text-pretty font-[family-name:var(--font-body)] text-lg leading-relaxed text-white/90 md:text-xl">Um novo jeito de viver, onde natureza, arquitetura e conveniência florescem juntas.</p>
            <div className="mt-8 flex flex-wrap gap-3 font-[family-name:var(--font-body)] text-sm text-white">
              {["2 e 3 quartos", "3 suítes", "64,78 a 227,01 m²"].map((item) => <span key={item} className="border border-white/40 bg-[#14231c]/45 px-4 py-2">{item}</span>)}
            </div>
            <WhatsAppLink message="Olá! Quero conhecer o Parque Flora." className="mt-10 inline-flex items-center gap-3 rounded bg-[#b18a57] px-7 py-4 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#14231c]">Quero conhecer <ArrowRight className="h-4 w-4" /></WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1eb] py-20 lg:py-28">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b18a57]">Viver é florescer</p>
            <h2 className="mt-4 text-balance font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight md:text-5xl">Uma vida inteira conectada ao que importa</h2>
            <p className="mt-6 font-[family-name:var(--font-body)] leading-relaxed text-[#14231c]/70">O Parque Flora nasce como um lugar completo para viver bem em Jardim Camburi. Residências generosas, lazer de resort, áreas verdes e conveniência se encontram em um projeto pensado para todas as fases da vida.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => <div key={item} className="flex items-start gap-3 font-[family-name:var(--font-body)] text-sm leading-relaxed"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#b18a57]" /><span>{item}</span></div>)}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src="/images/parque-flora/party.jpg" alt="Salão de festas elegante do Parque Flora" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#14231c] py-20 text-white lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-[#e7d5b9]">Lazer e bem-estar</p>
            <h2 className="mt-4 text-balance font-[family-name:var(--font-heading)] text-4xl font-semibold md:text-5xl">3.439 m² para aproveitar cada momento</h2>
            <p className="mt-5 max-w-2xl font-[family-name:var(--font-body)] leading-relaxed text-white/70">Ambientes que acolhem encontros, movimento, descanso e diversão — sem sair de casa.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map(({ icon: Icon, title }) => <article key={title} className="flex min-h-40 flex-col justify-between bg-[#14231c] p-6"><Icon className="h-7 w-7 text-[#e7d5b9]" /><h3 className="mt-8 font-[family-name:var(--font-body)] text-sm font-medium">{title}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28" aria-labelledby="gallery-title">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div><p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b18a57]">Galeria</p><h2 id="gallery-title" className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold md:text-5xl">Conheça o Parque Flora</h2></div>
            <div className="flex gap-2">
              <button onClick={() => moveGallery(-1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#14231c]/20 transition-colors hover:bg-[#14231c] hover:text-white" aria-label="Imagem anterior"><ChevronLeft /></button>
              <button onClick={() => moveGallery(1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-[#14231c]/20 transition-colors hover:bg-[#14231c] hover:text-white" aria-label="Próxima imagem"><ChevronRight /></button>
            </div>
          </div>
          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-lg md:aspect-[16/8]">
            <Image key={gallery[activeImage].src} src={gallery[activeImage].src} alt={gallery[activeImage].alt} fill sizes="100vw" className="object-cover" />
            <div className="absolute bottom-0 left-0 bg-[#14231c] px-5 py-3 font-[family-name:var(--font-body)] text-sm text-white">{gallery[activeImage].label} · {String(activeImage + 1).padStart(2, "0")}/{String(gallery.length).padStart(2, "0")}</div>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {gallery.map((image, index) => <button key={image.src} onClick={() => setActiveImage(index)} className={`relative h-20 min-w-28 overflow-hidden rounded border-2 ${activeImage === index ? "border-[#b18a57]" : "border-transparent"}`} aria-label={`Ver ${image.label}`} aria-current={activeImage === index}><Image src={image.src} alt="" fill sizes="112px" className="object-cover" /></button>)}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f1eb] py-20 lg:py-28">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-[#14231c] p-8 text-white md:p-12">
            <Trees className="h-9 w-9 text-[#e7d5b9]" />
            <h2 className="mt-6 text-balance font-[family-name:var(--font-heading)] text-4xl font-semibold">Um parque como extensão de casa</h2>
            <p className="mt-5 font-[family-name:var(--font-body)] leading-relaxed text-white/70">O projeto se conecta a um parque público anexo, ampliando a presença da natureza e criando novos espaços de convivência para o bairro.</p>
          </div>
          <div className="relative min-h-96 overflow-hidden">
            <Image src="/images/parque-flora/mall.jpg" alt="Fachada das lojas do Flora Mall" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-[#b18a57] p-6 text-white"><Building2 className="h-6 w-6" /><h3 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold">Flora Mall</h3><p className="mt-2 font-[family-name:var(--font-body)] text-sm leading-relaxed">Lojas e serviços para trazer mais praticidade à rotina.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-[#b18a57]">Localização</p>
            <h2 className="mt-4 text-balance font-[family-name:var(--font-heading)] text-4xl font-semibold md:text-5xl">Jardim Camburi, perto de tudo</h2>
            <p className="mt-5 font-[family-name:var(--font-body)] leading-relaxed text-[#14231c]/70">Um dos bairros mais completos de Vitória, com mobilidade, comércio, serviços, escolas, gastronomia e acesso rápido à orla.</p>
            <div className="mt-8 flex items-start gap-4 border-t border-[#14231c]/15 pt-6"><MapPin className="mt-1 h-6 w-6 shrink-0 text-[#b18a57]" /><div><p className="font-[family-name:var(--font-body)] font-semibold">Rua Oswaldo Bastos de Souza Freitas, 395</p><p className="mt-1 font-[family-name:var(--font-body)] text-sm text-[#14231c]/60">Jardim Camburi, Vitória — ES</p></div></div>
          </div>
          <div className="rounded-lg bg-[#f4f1eb] p-7 md:p-10">
            <Leaf className="h-8 w-8 text-[#b18a57]" />
            <h3 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-semibold">Tecnologia com consciência</h3>
            <p className="mt-4 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[#14231c]/70">Soluções pensadas para eficiência, sustentabilidade e conforto ajudam a construir uma rotina mais inteligente e conectada à natureza.</p>
            <WhatsAppLink message="Olá! Gostaria de agendar uma visita ao Parque Flora." className="mt-7 inline-flex items-center gap-3 rounded bg-[#14231c] px-6 py-3.5 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-colors hover:bg-[#b18a57]">Agendar uma conversa <ArrowRight className="h-4 w-4" /></WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="bg-[#14231c] py-20 text-white lg:py-28">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div><p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-[#e7d5b9]">Seu novo capítulo</p><h2 className="mt-4 text-balance font-[family-name:var(--font-heading)] text-4xl font-semibold md:text-5xl">Receba todos os detalhes do Parque Flora</h2><p className="mt-6 max-w-md font-[family-name:var(--font-body)] leading-relaxed text-white/70">Preencha seus dados e fale diretamente comigo para conhecer plantas, disponibilidade e condições comerciais.</p></div>
          <form onSubmit={handleSubmit} className="grid gap-5 rounded-lg bg-white p-7 text-[#14231c] md:p-10">
            <label className="grid gap-2 font-[family-name:var(--font-body)] text-sm font-medium">Nome<input required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="h-12 rounded border border-[#14231c]/20 px-4 outline-none transition-colors focus:border-[#b18a57]" placeholder="Seu nome" /></label>
            <label className="grid gap-2 font-[family-name:var(--font-body)] text-sm font-medium">Telefone<input required value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} className="h-12 rounded border border-[#14231c]/20 px-4 outline-none transition-colors focus:border-[#b18a57]" placeholder="(27) 99999-9999" inputMode="tel" /></label>
            <label className="grid gap-2 font-[family-name:var(--font-body)] text-sm font-medium">Interesse<select value={form.interesse} onChange={(e) => setForm({ ...form, interesse: e.target.value })} className="h-12 rounded border border-[#14231c]/20 bg-white px-4 outline-none focus:border-[#b18a57]"><option>Apartamento de 2 quartos</option><option>Apartamento de 3 quartos</option><option>Apartamento com 3 suítes</option><option>Quero conhecer todas as opções</option></select></label>
            <button type="submit" className="mt-2 flex h-13 items-center justify-center gap-3 rounded bg-[#b18a57] px-6 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-colors hover:bg-[#14231c]">Enviar pelo WhatsApp <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </section>

      <PropertyFooter
        legalNotice="Atendimento personalizado para encontrar o imóvel ideal."
        whatsappMessage="Olá! Tenho interesse no Parque Flora."
      />
    </main>
  )
}
