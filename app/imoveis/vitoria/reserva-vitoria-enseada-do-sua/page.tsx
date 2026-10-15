import type { Metadata } from "next"
import {
  Building2,
  Baby,
  Briefcase,
  Dumbbell,
  Droplets,
  Gamepad2,
  Grid3X3,
  Lightbulb,
  LockKeyhole,
  Package,
  PawPrint,
  Recycle,
  Sparkles,
  Trees,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { PropertyAbout } from "@/components/Imoveis/property-about"
import { PropertyDifferentials } from "@/components/Imoveis/property-differentials"
import { PropertyFacilities } from "@/components/Imoveis/property-facilities"
import { PropertyForm } from "@/components/Imoveis/property-form"
import { PropertyGallery } from "@/components/Imoveis/property-gallery"
import { PropertyHeader } from "@/components/Imoveis/property-header"
import { PropertyHero } from "@/components/Imoveis/property-hero"
import { PropertyLocation } from "@/components/Imoveis/property-location"

const pageUrl =
  "https://kellengagnocorretora.com.br/imoveis/vitoria/reserva-vitoria-enseada-do-sua"

const diferenciais = [
  { icon: Building2, text: "Empreendimento de alto padrão na Enseada do Suá" },
  { icon: Wifi, text: "Infraestrutura para automação residencial" },
  { icon: Dumbbell, text: "Equipamentos Technogym na academia" },
  { icon: LockKeyhole, text: "Fechaduras eletrônicas nas entradas sociais" },
  { icon: Trees, text: "Vista para o Parque Cultural Reserva Vitória, assinado pelo Escritório Burle Marx" },
  { icon: Building2, text: "Projeto arquitetônico de Flávio Ferrari" },
  { icon: Trees, text: "Paisagismo assinado por Benedito Abbud" },
  { icon: Waves, text: "Conceito resort com lazer de alto padrão" },
  { icon: Droplets, text: "Reutilização de águas pluviais" },
  { icon: Lightbulb, text: "Iluminação em LED e sensores de presença nas áreas comuns" },
  { icon: Wifi, text: "Wi-Fi nas áreas comuns" },
  { icon: Recycle, text: "Coleta seletiva e paisagismo com atmosfera tropical" },
]

const lazer = [
  { icon: Waves, text: "Piscina com borda infinita" },
  { icon: Dumbbell, text: "Academia com equipamentos Technogym" },
  { icon: Sparkles, text: "Spa e saunas" },
  { icon: Utensils, text: "Salão de festas e áreas gourmet" },
  { icon: Trees, text: "Parque Cultural Reserva Vitória integrado" },
  { icon: Grid3X3, text: "Quadra recreativa" },
  { icon: Package, text: "Espaço delivery" },
  { icon: Utensils, text: "Rooftop com espaço gourmet" },
  { icon: Briefcase, text: "Coworking" },
  { icon: PawPrint, text: "Pet Place" },
  { icon: Baby, text: "Playground e brinquedoteca" },
  { icon: Gamepad2, text: "Salão de jogos" },
]

const galeria = [
  {
    src: "/images/reserva-vitoria/reserva-vitoria-fachada-noturna.jpg",
    alt: "Edifício Reserva Vitória na Enseada do Suá",
    label: "Reserva Vitória",
  },
  {
    src: "/images/reserva-vitoria/reserva-vitoria-brinquedoteca.jpg",
    alt: "Brinquedoteca do Reserva Vitória",
    label: "Brinquedoteca",
  },
  {
    src: "/images/reserva-vitoria/reserva-vitoria-churrasqueira.jpg",
    alt: "Churrasqueira do Reserva Vitória",
    label: "Churrasqueira",
  },
  {
    src: "/images/reserva-vitoria/reserva-vitoria-coworking.jpg",
    alt: "Coworking do Reserva Vitória",
    label: "Coworking",
  },
  {
    src: "/images/reserva-vitoria/reserva-vitoria-espaco-gourmet.jpg",
    alt: "Espaço gourmet do Reserva Vitória",
    label: "Espaço gourmet",
  },
  {
    src: "/images/reserva-vitoria/reserva-vitoria-fitness-2.jpg",
    alt: "Academia do Reserva Vitória",
    label: "Academia",
  },
  {
    src: "/images/reserva-vitoria/reserva-vitoria-piscina.jpg",
    alt: "Piscina do Reserva Vitória",
    label: "Piscina",
  },
  {
    src: "/images/reserva-vitoria/reserva-vitoria-playground.jpg",
    alt: "Playground do Reserva Vitória",
    label: "Playground",
  },
  {
    src: "/images/reserva-vitoria/reserva-vitoria-quadra.jpg",
    alt: "Quadra recreativa do Reserva Vitória",
    label: "Quadra recreativa",
  },
  {
    src: "/images/reserva-vitoria/reserva-vitoria-salao-de-festas.jpg",
    alt: "Salão de festas do Reserva Vitória",
    label: "Salão de festas",
  },
  {
    src: "/images/reserva-vitoria/reserva-vitoria-spa.jpg",
    alt: "Spa do Reserva Vitória",
    label: "Spa",
  }
]

const image = "/images/reserva-vitoria/reserva-vitoria-fachada.webp"

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "ApartmentComplex",
  name: "Reserva Vitória, Enseada do Suá, Vitória | Kellen Gagno",
  description:
    "Empreendimento de alto padrão com apartamentos de 4 suítes, lazer de resort e Parque Cultural integrado, na Enseada do Suá.",
  url: pageUrl,
  image: `https://kellengagnocorretora.com.br${image}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Enseada do Suá, Vitória",
    addressRegion: "ES",
    addressCountry: "BR",
  },
}

export const metadata: Metadata = {
  title: "Reserva Vitória | Apartamentos 4 Suítes na Enseada do Suá",
  description:
    "Conheça o Reserva Vitória, empreendimento de alto padrão na Enseada do Suá. Apartamentos de 4 suítes, lazer de resort e Parque Cultural integrado.",
  keywords: [
    "Reserva Vitória",
    "apartamentos na Enseada do Suá",
    "apartamento 4 suítes Vitória",
    "imóveis de alto padrão em Vitória",
    "Parque Cultural Reserva Vitória",
    "Nazca",
    "Kellen Gagno",
  ],
}

export default function ReservaVitoriaPage() {
  const whatsappMessage = "Olá! Tenho interesse no Reserva Vitória."

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
      />

      <PropertyHeader
        propertyName="Reserva Vitória"
        whatsappMessage={whatsappMessage}
      />

      <PropertyHero
        urlImage={image}
        altUrlImage="Edifício Reserva Vitória na Enseada do Suá"
        tipoEmpreendimento="Destaque"
        nomeEmpreendimento="Reserva Vitória – Apartamentos na Enseada do Suá, Vitória"
        descricaoEmpreendimento="Um projeto exclusivo que combina arquitetura contemporânea, lazer de resort e o Parque Cultural Reserva Vitória."
        detalhesEmpreendimento={["4 suítes", "177 a 311 m²", "Enseada do Suá"]}
      />

      <PropertyAbout
        urlImage="/images/reserva-vitoria/reserva-vitoria-localizacao.jpg"
        altUrlImage="Reserva Vitória, na Enseada do Suá"
        titulo="Sofisticação, natureza e cultura em um só lugar"
        descricao="O Reserva Vitória reúne apartamentos de alto padrão, lazer com conceito resort e uma localização privilegiada na Enseada do Suá. O empreendimento integra o Parque Cultural Reserva Vitória, com vista permanente para uma área verde assinada pelo Escritório Burle Marx."
        descricao2="O projeto arquitetônico é assinado por Flávio Ferrari, com paisagismo de Benedito Abbud. O Reserva Vitória oferece apartamentos de 4 suítes, com metragens que variam de 177 a 311 m², proporcionando conforto e exclusividade para você e sua família."
        infoArea="177 a 311 m²"
        infoQuarto="4"
        infoSuite="4"
        infoBanheiro="5"
      />

      <PropertyDifferentials diferenciais={diferenciais} />

      <PropertyFacilities
        itensLazer={lazer}
        titulo="Lazer de alto padrão com conceito resort"
        descricao=""
        urlImage="/images/reserva-vitoria/reserva-vitoria-spa.jpg"
        altUrlImage="Vista do Reserva Vitória e da Enseada do Suá"
        whatsappMessage="Olá! Quero conhecer mais sobre o Reserva Vitória."
      />

      <PropertyLocation
        titulo="Enseada do Suá, entre a Curva da Jurema e o Shopping Vitória"
        descricao="Localização privilegiada, próxima à Curva da Jurema e ao Shopping Vitória, com fácil acesso às opções gastronômicas, empresariais e de lazer da capital."
        endereco="Av. José Miranda Machado, 250"
        endereco2="Enseada do Suá, Vitória/ES"
        urlMapa="https://www.google.com/maps?q=Reserva+Vit%C3%B3ria,+Enseada+do+Su%C3%A1,+Vit%C3%B3ria+-+ES&output=embed"
      />

      <PropertyGallery titulo="Conheça o Reserva Vitória" images={galeria} />

      <PropertyForm
        titulo="Fale com a Kellen Gagno"
        descricao="Preencha o formulário e receba informações sobre o Reserva Vitória."
        opcoes={["4 suítes", "Plantas e metragens", "Agendar visita", "Outras opções"]}
        nomeEmpreedimento="Reserva Vitória"
      />

      <Footer whatsappMessage={whatsappMessage} />
    </main>
  )
}
