import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const WHATSAPP_NUMBER = "5527992743485"

type PropertyHeaderProps = {
  propertyName: string
  whatsappMessage: string
}

export function PropertyHeader({ propertyName, whatsappMessage }: PropertyHeaderProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="hidden items-center gap-2 text-black transition-colors hover:text-[#c49b63] md:flex"
          aria-label={`Voltar para a página inicial a partir de ${propertyName}`}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-[family-name:var(--font-body)] text-sm font-medium">Voltar</span>
        </Link>
        <Image
          src="/images/logo-horizontal.webp"
          alt="Kellen Gagno Corretora"
          width={202}
          height={60}
          className="h-15 w-auto"
          priority
        />
        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded bg-[var(--button-primary)] px-4 py-2 font-[family-name:var(--font-body)] text-sm font-semibold text-white transition-colors hover:bg-[var(--button-primary-dark)] md:block"
        >
          Agendar atendimento
        </Link>
      </div>
    </header>
  )
}
