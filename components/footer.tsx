import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo-dark-sem-fundo.png"
              alt="Kellen Gagno Corretora"
              width={150}
              height={75}
              className="h-20 w-auto mb-4"
            />
            <p className="font-[family-name:var(--font-body)] text-white/70 text-sm leading-relaxed max-w-md mb-6">
              Especialista em imóveis de médio e alto padrão. Atendimento personalizado e exclusivo para encontrar o imóvel ideal para você.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/kellengagnocorretora_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c49b63] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/kellengagnocorretora/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c49b63] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {/* <a 
                href="https://linkedin.com/in/kellengagno" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c49b63] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4 text-[#c49b63]">
              Links Rápidos
            </h4>
            <nav className="space-y-3">
              <Link href="#inicio" className="block font-[family-name:var(--font-body)] text-sm text-white/70 hover:text-[#c49b63] transition-colors">
                Início
              </Link>
              <Link href="#sobre" className="block font-[family-name:var(--font-body)] text-sm text-white/70 hover:text-[#c49b63] transition-colors">
                Sobre Mim
              </Link>
              <Link href="#imoveis" className="block font-[family-name:var(--font-body)] text-sm text-white/70 hover:text-[#c49b63] transition-colors">
                Imóveis
              </Link>
              <Link href="#contato" className="block font-[family-name:var(--font-body)] text-sm text-white/70 hover:text-[#c49b63] transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-4 text-[#c49b63]">
              Contato
            </h4>
            <div className="space-y-3 font-[family-name:var(--font-body)] text-sm text-white/70">
              <p>(27) 99274-3485</p>
              <p>kellen.es@associadolopes-es.com.br</p>
              <p>Grande Vitória, ES</p>
            </div>
            
            {/* WhatsApp Button */}
            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-[family-name:var(--font-body)] text-xs text-white/50 text-center md:text-left">
              {currentYear} Kellen Gagno. Todos os direitos reservados.
            </p>
            
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5527992743485?text=Olá! Vi o seu site e gostaria de mais informacões sobre imóveis."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BD5A] hover:scale-110 transition-all z-50"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  )
}
