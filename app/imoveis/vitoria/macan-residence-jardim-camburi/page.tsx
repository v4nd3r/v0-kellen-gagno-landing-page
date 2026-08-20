import type { Metadata } from 'next'
import { Footer } from "@/components/footer"
import { PropertyHeader } from "@/components/Imoveis/property-header"
import { PropertyHero } from "@/components/Imoveis/property-hero"
import { PropertyAbout } from "@/components/Imoveis/property-about"
import { PropertyDifferentials } from "@/components/Imoveis/property-differentials"
import { PropertyFacilities } from "@/components/Imoveis/property-facilities"
import { PropertyLocation } from "@/components/Imoveis/property-location"
import { PropertyGallery } from "@/components/Imoveis/property-gallery"
import { PropertyForm } from "@/components/Imoveis/property-form"
import { 
  Wifi, 
  Wind, 
  ChefHat, 
  Usb, 
  Volume2, 
  Bath, 
  Home, 
  Grid3X3, 
  Tv, 
  DoorOpen, 
  Building2, 
  Thermometer,
  Droplets,
  Gauge,
  Waves,
  Dumbbell,
  Users,
  Baby,
  Briefcase,
  Bike,
  Flame
} from "lucide-react"

const diferenciais = [
  { icon: Wifi, text: "Infraestrutura para automação residencial com quadro de conectividade exclusivo" },
  { icon: Wind, text: "Infraestrutura para ar-condicionado split na sala e nos quartos" },
  { icon: ChefHat, text: "Infraestrutura para instalação de coifa com ponto de força e duto de exaustão" },
  { icon: Usb, text: "Tomadas USB nas suítes e áreas de lazer" },
  { icon: Volume2, text: "Paredes em alvenaria mais espessas entre as unidades para maior conforto acústico" },
  { icon: Bath, text: "Banheiros e cozinha 100% revestidos" },
  { icon: DoorOpen, text: "Cozinha com porta de correr" },
  { icon: Grid3X3, text: "Piso em porcelanato de grandes formatos" },
  { icon: Tv, text: "Antena Coletiva HD nas salas de estar e áreas de lazer" },
  { icon: Home, text: "Integração facilitada entre sala e varanda com mesma paginação do piso" },
  { icon: Building2, text: "Fachada 100% revestida com materiais nobres e arquitetura atemporal" },
  { icon: Thermometer, text: "Área técnica externa para instalação das condensadoras de splits" },
  { icon: Droplets, text: "Reúso de água das chuvas e ar-condicionado para usos não potáveis" },
  { icon: Gauge, text: "Medição individual de água, gás e energia elétrica" },
]

const lazer = [
  { icon: Waves, text: "Piscinas adulto e infantil" },
  { icon: Flame, text: "Solarium e praia" },
  { icon: Users, text: "Quadra esportiva e salão de jogos" },
  { icon: ChefHat, text: "Salão de festas, Espaço Gourmet e Churrasqueiras" },
  { icon: Baby, text: "Playground e Brinquedoteca" },
  { icon: Briefcase, text: "Coworking e Mini Mercado" },
  { icon: Bike, text: "Espaço Bike e Bicicletário" },
  { icon: Dumbbell, text: "Sauna e Fitness" },
]

const galeria = [
  { src: "/images/macan/fachada.jpg", alt: "Fachada do Macan Residence", label: "Fachada" },
  { src: "/images/macan/Argo_Macan_Academia.jpg", alt: "Academia do Macan Residence", label: "Academia" },
  { src: "/images/macan/Argo_Macan_Bicicletario.jpg", alt: "Bicicletário do Macan Residence", label: "Bicicletário" },
  { src: "/images/macan/Argo_Macan_Brinquedoteca.jpg", alt: "Brinquedoteca do Macan Residence", label: "Brinquedoteca" },
  { src: "/images/macan/Argo_Macan_Confraria.jpg", alt: "Confraria do Macan Residence", label: "Confraria" },
  { src: "/images/macan/Argo_Macan_Coworking.jpg", alt: "Coworking do Macan Residence", label: "Coworking" },
  { src: "/images/macan/Argo_Macan_Mini_Mercado.jpg", alt: "Mini Mercado do Macan Residence", label: "Mini Mercado" },
  { src: "/images/macan/imagens-macan.png", alt: "Banheiro social do Macan Residence", label: "Banheiro social" },
  { src: "/images/macan/imagens-macan3.png", alt: "Suíte do Macan Residence", label: "Suíte" },
  { src: "/images/macan/imagens-macan4.png", alt: "Sala de jantar do Macan Residence", label: "Sala de jantar" },
  { src: "/images/macan/imagens-macan5.png", alt: "Garden do Macan Residence", label: "Garden" },
  { src: "/images/macan/imagens-macan6.png", alt: "Cozinha do Macan Residence", label: "Cozinha" },
  { src: "/images/macan/imagens-macan7.png", alt: "varanda do Macan Residence", label: "varanda" },
]

export const metadata: Metadata = {
  title: 'Macan Residence em Jardim Camburi, Vitória | Kellen Gagno',
  description: 'Conheça o Macan Residence em Jardim Camburi, Vitória/ES. Apartamentos de 2 quartos com suíte, opções Garden, lazer completo e alto padrão ARGO.',
}

export default function MacanResidencePage() {

  return (
    <main className="min-h-screen bg-white">

      {/* Cabeçalho */}
      <PropertyHeader
        propertyName="Macan Residence"
        whatsappMessage="Olá! Tenho interesse no Macan Residence."
      />

      {/* Hero */}
      <PropertyHero
        urlImage="/images/macan/fachada.jpg"
        altUrlImage="Macan Residence"
        tipoEmpreendimento="Lançamento"
        nomeEmpreendimento="Macan Residence"
        descricaoEmpreendimento="Seu refúgio de conforto e tranquilidade em Jardim Camburi. Apartamentos de 2 quartos com suíte e opções Garden."
        detalhesEmpreendimento={["2 Quartos c/ Suíte", "À partir de 59,83 m²", "Jardim Camburi"]}
      />

      {/* Sobre */}
      <PropertyAbout
        urlImage="/images/macan/imagens-macan4.png"
        altUrlImage="Interior do Macan Residence"
        titulo="Qualidade ARGO, sinônimo de sofisticação e segurança"
        descricao="O Macan Residence oferece apartamentos de 2 quartos com suíte e opções Garden, em um empreendimento que une lazer completo, acabamento de alto padrão e localização privilegiada em Jardim Camburi."
        descricao2="Com mais de 23 anos de história e 3.300 unidades já entregues, a ARGO é referência em qualidade construtiva no Espírito Santo."
      />

      {/* Diferenciais */}
      <PropertyDifferentials
        diferenciais={diferenciais}
      />

      {/* Lazer */}
      <PropertyFacilities
        itensLazer={lazer}
        titulo="Lazer com mais de 900 m²"
        descricao="Desfrute de todas as comodidades que o Macan Residence oferece para sua tranquilidade e bem-estar."
        urlImage="/images/macan/argo-macan-bg-scaled.jpg"
        altUrlImage="Área de lazer do Macan Residence"
        whatsappMessage="Olá! Quero conhecer mais sobre o Macan Residence."
      />

      {/* Localização */}
      <PropertyLocation
        titulo="Localização Privilegiada"
        descricao="Jardim Camburi: praticidade e qualidade de vida em um só lugar. Um bairro consolidado e desejado, com acesso rápido a shoppings, restaurantes, escolas e à Praia de Camburi."
        endereco="Rua Esméria Barros Deorce, 450"
        endereco2="Jardim Camburi, Vitória/ES"
        urlMapa="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233.95091302349937!2d-40.26676975298546!3d-20.249932440199082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1780452235970!5m2!1spt-BR!2sbr"
      />

      {/* Galeria de fotos */}
      <PropertyGallery
        titulo="Conheça o Macan Residence"
        images={galeria}
      />

      {/* Formulário de contato */}
      <PropertyForm
        titulo="Fale com a Kellen Gagno"
        descricao="Preencha o formulário e receba informações exclusivas sobre o Macan Residence."
        opcoes={["2 Quartos com Suíte", "Garden", "Investimento", "Outras opções",]}
        nomeEmpreedimento="Macan Residence"
      />

      {/* Rodapé */}
      <Footer whatsappMessage="Olá! Tenho interesse no Macan Residence." />
    </main>
  )
}
