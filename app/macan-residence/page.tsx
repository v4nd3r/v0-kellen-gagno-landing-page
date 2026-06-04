"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
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
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  Check,
  Waves,
  Dumbbell,
  Users,
  Baby,
  Briefcase,
  ShoppingCart,
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
  { src: "/images/macan/fachada.jpg", alt: "Fachada do Macan Residence" },
  { src: "/images/macan/Argo_Macan_Academia.jpg", alt: "Academia" },
  { src: "/images/macan/Argo_Macan_Bicicletario.jpg", alt: "Bicicletário" },
  { src: "/images/macan/Argo_Macan_Brinquedoteca.jpg", alt: "Brinquedoteca" },
  { src: "/images/macan/Argo_Macan_Confraria.jpg", alt: "Confraria" },
  { src: "/images/macan/Argo_Macan_Coworking.jpg", alt: "Coworking" },
  { src: "/images/macan/Argo_Macan_Mini_Mercado.jpg", alt: "Mini Mercado" },
  { src: "/images/macan/imagens-macan.png", alt: "Banheiro social" },
  { src: "/images/macan/imagens-macan3.png", alt: "Suíte" },
  { src: "/images/macan/imagens-macan4.png", alt: "Sala de jantar" },
  { src: "/images/macan/imagens-macan5.png", alt: "Garden" },
  { src: "/images/macan/imagens-macan6.png", alt: "Cozinha" },
  { src: "/images/macan/imagens-macan7.png", alt: "varanda" },
]

export default function MacanResidencePage() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    interesse: "2 Quartos com Suíte"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Me chamo ${formData.nome} e tenho interesse no Macan Residence (${formData.interesse}). Meu telefone é ${formData.telefone}. Gostaria de mais informações.`
    const whatsappUrl = `https://wa.me/5527992743485?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-black hover:text-[#c49b63] transition-colors hidden md:block">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-[family-name:var(--font-body)] text-sm font-medium">Voltar</span>
          </Link>
          <Image
            src="/images/logo-horizontal.png"
            alt="Kellen Gagno Corretora"
            width={100}
            height={50}
            className="h-15 w-auto"
          />
          <Link
            href="https://wa.me/5527992743485?text=Olá! Tenho interesse no Macan Residence."
            target="_blank"
            className="bg-[#c49b63] text-white px-4 py-2 rounded font-[family-name:var(--font-body)] text-sm font-semibold hover:bg-[#b38a52] transition-colors hidden md:block"
          >
            Fale Comigo
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-18">
        <div className="relative h-[60vh] lg:h-[70vh]">
          <Image
            src="/images/macan/fachada.jpg"
            alt="Macan Residence"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
            <div className="container mx-auto">
              <span className="inline-block bg-[#c49b63] text-white px-4 py-1 rounded text-sm font-[family-name:var(--font-body)] font-medium mb-4">
                Lançamento
              </span>
              <h1 className="font-[family-name:var(--font-heading)] text-4xl lg:text-6xl text-white font-semibold mb-4">
                Macan Residence
              </h1>
              <p className="font-[family-name:var(--font-body)] text-lg lg:text-xl text-white/90 max-w-2xl drop-shadow-lg">
                Seu refúgio de conforto e tranquilidade em Jardim Camburi. Apartamentos de 2 quartos com suíte e opções Garden.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded">
                  <span className="text-white font-[family-name:var(--font-body)] text-sm">2 Quartos c/ Suíte</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded">
                  <span className="text-white font-[family-name:var(--font-body)] text-sm">À partir de 59,83 m²</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded">
                  <span className="text-white font-[family-name:var(--font-body)] text-sm">Jardim Camburi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-6">
                Qualidade ARGO, sinônimo de sofisticação e segurança
              </h2>
              <p className="font-[family-name:var(--font-body)] text-gray-600 leading-relaxed mb-6">
                O Macan Residence oferece apartamentos de 2 quartos com suíte e opções Garden, em um empreendimento que une lazer completo, acabamento de alto padrão e localização privilegiada em Jardim Camburi.
              </p>
              <p className="font-[family-name:var(--font-body)] text-gray-600 leading-relaxed mb-8">
                Com mais de 23 anos de história e 3.300 unidades já entregues, a ARGO é referência em qualidade construtiva no Espírito Santo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://wa.me/5527992743485?text=Olá! Quero saber mais sobre o Macan Residence."
                  target="_blank"
                  className="bg-[#c49b63] text-white px-8 py-3 rounded font-[family-name:var(--font-body)] font-semibold hover:bg-[#b38a52] transition-colors text-center"
                >
                  Quero Minha Unidade
                </Link>
                <Link
                  href="#diferenciais"
                  className="border-2 border-[#c49b63] text-[#c49b63] px-8 py-3 rounded font-[family-name:var(--font-body)] font-semibold hover:bg-[#c49b63] hover:text-white transition-colors text-center"
                >
                  Ver Diferenciais
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/macan/imagens-macan4.png"
                alt="Interior do Macan Residence"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-4">
              Diferenciais do Empreendimento
            </h2>
            <div className="w-20 h-1 bg-[#c49b63] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((item, index) => (
              <div 
                key={index}
                className="group flex items-start gap-4 bg-white p-5 rounded-lg border border-gray-100 hover:border-[#c49b63] hover:shadow-lg hover:shadow-[#c49b63]/10 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#c49b63] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:border-2 group-hover:border-[#c49b63] transition-all duration-300">
                  <item.icon className="w-5 h-5 text-white group-hover:text-[#c49b63] transition-all duration-300" />
                </div>
                <p className="font-[family-name:var(--font-body)] text-gray-700 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lazer Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/macan/argo-macan-bg-scaled.jpg"
                alt="Área de lazer do Macan Residence"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-4">
                Lazer com mais de 900 m²
              </h2>
              <div className="w-20 h-1 bg-[#c49b63] mb-8" />
              <div className="grid grid-cols-2 gap-4">
                {lazer.map((item, index) => (
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
                href="https://wa.me/5527992743485?text=Olá! Quero conhecer o lazer do Macan Residence."
                target="_blank"
                className="inline-block mt-8 bg-[#c49b63] text-white px-8 py-3 rounded font-[family-name:var(--font-body)] font-semibold hover:bg-[#b38a52] transition-colors"
              >
                Agendar Visita
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-4">
              Localização Privilegiada
            </h2>
            <p className="font-[family-name:var(--font-body)] text-gray-600 max-w-2xl mx-auto">
              Jardim Camburi: praticidade e qualidade de vida em um só lugar. Um bairro consolidado e desejado, com acesso rápido a shoppings, restaurantes, escolas e à Praia de Camburi.
            </p>
            <div className="w-20 h-1 bg-[#c49b63] mx-auto mt-4" />
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#c49b63] rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-body)] font-semibold text-black text-lg">
                  Endereço
                </h3>
                <p className="font-[family-name:var(--font-body)] text-gray-600">
                  Rua Esméria Barros Deorce, 450 - Jardim Camburi, Vitória/ES
                </p>
              </div>
            </div>
              
            <div className="rounded-lg mb-6 overflow-hidden flex justify-center">
              <img
                src="/images/macan/mapa Macan.png"
                alt="Localização do Macan Residence" />
            </div>

            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233.95091302349937!2d-40.26676975298546!3d-20.249932440199082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1780452235970!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Macan Residence"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-4">
              Invista com Segurança
            </h2>
            <p className="font-[family-name:var(--font-body)] text-gray-600 max-w-2xl mx-auto">
              Conquiste o melhor custo-benefício da região com condições especiais.
            </p>
            <div className="w-20 h-1 bg-[#c49b63] mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* InvesteARGO */}
            <div className="bg-gray-50 rounded-lg p-8 border-2 border-[#c49b63]">
              <div className="bg-[#c49b63] text-white text-center py-2 rounded -mt-12 mx-4 mb-6">
                <span className="font-[family-name:var(--font-body)] font-semibold text-sm">RECOMENDADO</span>
              </div>
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-black font-semibold mb-2">
                Tabela InvesteARGO
              </h3>
              <p className="font-[family-name:var(--font-body)] text-gray-600 text-sm mb-4">
                Unidade 504 - 59,83m²
              </p>
              <div className="text-center py-4 border-b border-gray-200 mb-4">
                <span className="font-[family-name:var(--font-body)] text-sm text-gray-500">A partir de</span>
                <p className="font-[family-name:var(--font-heading)] text-4xl text-[#c49b63] font-bold">
                  R$ 737.000
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#c49b63]" />
                  <span className="font-[family-name:var(--font-body)] text-sm text-gray-700">Até 10% de desconto</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#c49b63]" />
                  <span className="font-[family-name:var(--font-body)] text-sm text-gray-700">100% pagamento durante a obra</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#c49b63]" />
                  <span className="font-[family-name:var(--font-body)] text-sm text-gray-700">Melhor preço por m² da região</span>
                </li>
              </ul>
              <Link
                href="https://wa.me/5527992743485?text=Olá! Tenho interesse na Tabela InvesteARGO do Macan Residence."
                target="_blank"
                className="block w-full bg-[#c49b63] text-white py-3 rounded font-[family-name:var(--font-body)] font-semibold hover:bg-[#b38a52] transition-colors text-center"
              >
                Quero Esta Condição
              </Link>
            </div>

            {/* Tabela ARGO */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="font-[family-name:var(--font-heading)] text-2xl text-black font-semibold mb-2 mt-4">
                Tabela ARGO
              </h3>
              <p className="font-[family-name:var(--font-body)] text-gray-600 text-sm mb-4">
                Unidade 504 - 59,83m²
              </p>
              <div className="text-center py-4 border-b border-gray-200 mb-4">
                <span className="font-[family-name:var(--font-body)] text-sm text-gray-500">A partir de</span>
                <p className="font-[family-name:var(--font-heading)] text-4xl text-black font-bold">
                  R$ 819.040
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-gray-400" />
                  <span className="font-[family-name:var(--font-body)] text-sm text-gray-700">Entrada facilitada</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-gray-400" />
                  <span className="font-[family-name:var(--font-body)] text-sm text-gray-700">Parcelas mensais de R$ 2.500</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-gray-400" />
                  <span className="font-[family-name:var(--font-body)] text-sm text-gray-700">Financiamento de R$ 547.940</span>
                </li>
              </ul>
              <Link
                href="https://wa.me/5527992743485?text=Olá! Tenho interesse na Tabela ARGO do Macan Residence."
                target="_blank"
                className="block w-full border-2 border-[#c49b63] text-[#c49b63] py-3 rounded font-[family-name:var(--font-body)] font-semibold hover:bg-[#c49b63] hover:text-white transition-colors text-center"
              >
                Saber Mais
              </Link>
            </div>
          </div>
          <p className="text-center font-[family-name:var(--font-body)] text-xs text-gray-500 mt-8 max-w-2xl mx-auto">
            Os valores das parcelas são reajustados mensalmente pelo CUB. Preços válidos enquanto durar o estoque. Tabela sujeita a modificação sem aviso prévio.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-4">
              Galeria
            </h2>
            <div className="w-20 h-1 bg-[#c49b63] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galeria.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl lg:text-4xl text-black font-semibold mb-4">
                Fale com a Kellen Gagno
              </h2>
              <p className="font-[family-name:var(--font-body)] text-gray-600">
                Preencha o formulário e receba informações exclusivas sobre o Macan Residence.
              </p>
              <div className="w-20 h-1 bg-[#c49b63] mx-auto mt-4" />
            </div>
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label className="block font-[family-name:var(--font-body)] text-sm font-medium text-black mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 font-[family-name:var(--font-body)] text-black focus:outline-none focus:ring-2 focus:ring-[#c49b63] focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block font-[family-name:var(--font-body)] text-sm font-medium text-black mb-2">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 font-[family-name:var(--font-body)] text-black focus:outline-none focus:ring-2 focus:ring-[#c49b63] focus:border-transparent"
                    placeholder="(27) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block font-[family-name:var(--font-body)] text-sm font-medium text-black mb-2">
                    Interesse
                  </label>
                  <select
                    value={formData.interesse}
                    onChange={(e) => setFormData({...formData, interesse: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 font-[family-name:var(--font-body)] text-black focus:outline-none focus:ring-2 focus:ring-[#c49b63] focus:border-transparent bg-white"
                  >
                    <option value="2 Quartos com Suíte">2 Quartos com Suíte</option>
                    <option value="Garden">Opção Garden</option>
                    <option value="Investimento">Investimento</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#c49b63] text-white py-4 rounded-lg font-[family-name:var(--font-body)] font-semibold hover:bg-[#b38a52] transition-colors"
                >
                  Enviar pelo WhatsApp
                </button>
              </div>
            </form>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <a href="tel:+5527992743485" className="flex items-center gap-2 text-gray-600 hover:text-[#c49b63] transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-[family-name:var(--font-body)] text-sm">(27) 99274-3485</span>
              </a>
              <a href="mailto:kellen.es@associadolopes-es.com.br" className="flex items-center gap-2 text-gray-600 hover:text-[#c49b63] transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-[family-name:var(--font-body)] text-sm">kellen.es@associadolopes-es.com.br</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Image
              src="/images/logo-dark-sem-fundo-horizontal.png"
              alt="Kellen Gagno Corretora"
              width={120}
              height={60}
              className="h-16 w-auto"
            />
            <p className="font-[family-name:var(--font-body)] text-sm text-white/60 text-center">
              Imagens meramente ilustrativas. Mobiliários e decoração não vinculam o contrato.
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-white/60">
              &copy; {new Date().getFullYear()} Kellen Gagno
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5527992743485?text=Olá! Tenho interesse no Macan Residence."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  )
}
