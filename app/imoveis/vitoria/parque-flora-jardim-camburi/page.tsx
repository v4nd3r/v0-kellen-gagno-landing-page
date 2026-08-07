"use client"

import type { Metadata } from "next"
import { Building2, Grid3X3, Waves, Home, Trees, ShoppingCart, Utensils, Dumbbell, Baby, PawPrint, Flame, Flower2, Wifi } from "lucide-react"
import { PropertyHeader } from "@/components/Imoveis/property-header"
import { PropertyHero } from "@/components/Imoveis/property-hero"
import { PropertyAbout } from "@/components/Imoveis/property-about"
import { PropertyDifferentials } from "@/components/Imoveis/property-differentials"
import { PropertyFacilities } from "@/components/Imoveis/property-facilities"
import { PropertyLocation } from "@/components/Imoveis/property-location"
import { PropertyGallery } from "@/components/Imoveis/property-gallery"
import { PropertyForm } from "@/components/Imoveis/property-form"
import { Footer } from "@/components/footer"

// export const metadata: Metadata = {
//   title: "Parque Flora em Jardim Camburi | Kellen Gagno",
//   description: "Conheça o Parque Flora: apartamentos de 2 e 3 quartos e 3 suítes, com plantas de 64,78 a 227,01 m² em Jardim Camburi, Vitória.",
// }

const diferenciais = [
  { icon: Building2, text: "Duas torres residenciais integradas à natureza" },
  { icon: Home, text: "Apartamentos de 2 e 3 quartos e opções com 3 suítes" },
  { icon: Grid3X3, text: "Plantas de 64,78 m² a 227,01 m²" },
  { icon: Waves, text: "3.439 m² dedicados ao lazer e à conveniência" },
  { icon: Trees, text: "Parque público anexo ao empreendimento" },
  { icon: ShoppingCart, text: "Flora Mall com lojas e serviços no dia a dia" },
]

const lazer = [
  { icon: Waves, text: "Piscinas e deck molhado" },
  { icon: Utensils, text: "Espaços gourmet e grill" },
  { icon: Dumbbell, text: "Fitness completo" },
  { icon: Baby, text: "Brinquedoteca" },
  { icon: PawPrint, text: "Pet place" },
  { icon: Flame, text: "Fireplace" },
  { icon: Flower2, text: "Horta e espaço zen" },
  { icon: Wifi, text: "Conveniência e tecnologia" },
]

const galeria = [
  { src: "/images/parque-flora/hero.jpg", alt: "fachada do Parque Flora", label: "Fachada" },
  { src: "/images/parque-flora/deck.jpg", alt: "Deck molhado do Parque Flora", label: "Deck molhado" },
  { src: "/images/parque-flora/pool-bar.jpg", alt: "Bar da piscina do Parque Flora", label: "Bar da piscina" },
  { src: "/images/parque-flora/grill.jpg", alt: "Espaço grill do Parque Flora", label: "Espaço grill" },
  { src: "/images/parque-flora/fireplace.jpg", alt: "Fireplace do Parque Flora", label: "Fireplace" },
  { src: "/images/parque-flora/party.jpg", alt: "Salão de festas do Parque Flora", label: "Salão de festas" },
  { src: "/images/parque-flora/fitness.jpg", alt: "Academia do Parque Flora", label: "Fitness" },
  { src: "/images/parque-flora/zen.jpg", alt: "Espaço zen do Parque Flora", label: "Espaço zen" },
  { src: "/images/parque-flora/playroom.jpg", alt: "Brinquedoteca do Parque Flora", label: "Brinquedoteca" },
]

export default function ParqueFloraPage() {
  return (
      <main className="min-h-screen bg-white">
  
        {/* Cabeçalho */}
        <PropertyHeader
          propertyName="parque Flora"
          whatsappMessage="Olá! Tenho interesse no Parque Flora."
        />
  
        {/* Hero */}
        <PropertyHero
          urlImage="/images/parque-flora/hero.jpg"
          altUrlImage="Parque Flora"
          tipoEmpreendimento="Lançamento"
          nomeEmpreendimento="Parque Flora"
          descricaoEmpreendimento="Um novo jeito de viver, onde natureza, arquitetura e conveniência florescem juntas."
          detalhesEmpreendimento={["2 e 3 quartos", "3 suítes", "64,78 a 227,01 m²"]}
        />
  
        {/* Sobre */}
        <PropertyAbout
          urlImage="/images/parque-flora/party.jpg"
          altUrlImage="Salão de festas elegante do Parque Flora"
          titulo="Uma vida inteira conectada ao que importa"
          descricao="O Parque Flora nasce como um lugar completo para viver bem em Jardim Camburi. Residências generosas, lazer de resort, áreas verdes e conveniência se encontram em um projeto pensado para todas as fases da vida."
          descricao2=""
        />
  
        {/* Diferenciais */}
        <PropertyDifferentials
          diferenciais={diferenciais}
        />
  
        {/* Lazer */}
        <PropertyFacilities
          itensLazer={lazer}
          titulo="3.439 m² para aproveitar cada momento"
          descricao="Ambientes que acolhem encontros, movimento, descanso e diversão — sem sair de casa."
          urlImage="/images/parque-flora/Churrasqueira.jpeg"
          altUrlImage="Churrasqueira e piscina do Parque Flora"
          whatsappMessage="Olá! Quero conhecer mais sobre o Parque Flora."
        />
  
        {/* Localização */}
        <PropertyLocation
          titulo="Jardim Camburi, perto de tudo"
          descricao="Um dos bairros mais completos de Vitória, com mobilidade, comércio, serviços, escolas, gastronomia e acesso rápido à orla."
          endereco="Rua Oswaldo Bastos de Souza Freitas, 395"
          endereco2="Jardim Camburi, Vitória/ES"
          urlMapa="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.9487630457656!2d-40.260186!3d-20.260959600000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb819bfe4a16f47%3A0xf5cdc854869db5da!2sParque%20Flora!5e0!3m2!1spt-BR!2sbr!4v1786126537173!5m2!1spt-BR!2sbr"
        />
  
        {/* Galeria de fotos */}
        <PropertyGallery
          titulo="Conheça o parque Flora"
          images={galeria}
        />
  
        {/* Formulário de contato */}
        <PropertyForm
          titulo="Fale com a Kellen Gagno"
          descricao="Preencha o formulário e receba informações exclusivas sobre o Parque Flora."
          opcoes={["2 quartos", "3 quartos", "3 quartos com suíte", "Outras opções"]}
          nomeEmpreedimento="Parque Flora"
        />
  
        {/* Rodapé */}
        <Footer whatsappMessage="Olá! Tenho interesse no Parque Flora." />
      </main>
    )
}
