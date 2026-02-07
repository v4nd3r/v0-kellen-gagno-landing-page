import { MapPin, Home, BarChart3 } from "lucide-react"

const highlights = [
  {
    icon: MapPin,
    title: "Atendimento personalizado",
  },
  {
    icon: Home,
    title: "Imóveis selecionados",
  },
  {
    icon: BarChart3,
    title: "Assessoria imobiliária estratégica",
  }
]

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-[#c49b63] mx-auto mb-8" />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - About Text */}
            <div className="space-y-6 font-[family-name:var(--font-body)] text-gray-600 leading-relaxed text-lg">
              <p>
                Sou a <strong className="text-black">Kellen Gagno</strong>, corretora de imóveis especializada em imóveis residenciais e empreendimentos de médio e alto padrão. Atuo com foco em atendimento personalizado, transparência e estratégia, acompanhando meus clientes em todas as etapas da compra, venda ou investimento imobiliário.
              </p>
              <p>
                Atuo em toda a <strong className="text-black">Grande Vitória</strong>, oferecendo uma consultoria imobiliária completa para quem busca segurança, valorização patrimonial e decisões bem fundamentadas. Meu compromisso é tornar cada negociação uma experiência tranquila, eficiente e confiável.
              </p>
            </div>

            {/* Right - Highlights */}
            <div className="flex flex-col gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group flex items-center gap-4 bg-gray-50 p-5 rounded-lg border border-gray-100 cursor-pointer transition-all duration-300 hover:border-[#c49b63] hover:shadow-lg hover:shadow-[#c49b63]/20"
                >
                  <div className="w-12 h-12 bg-[#c49b63] rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-white group-hover:border-2 group-hover:border-[#c49b63]">
                    <highlight.icon className="w-6 h-6 text-white transition-all duration-300 group-hover:text-[#c49b63]" />
                  </div>
                  <span className="font-[family-name:var(--font-body)] font-medium text-black">
                    {highlight.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA - Full Width */}
          <div className="text-center mt-12 bg-[#c49b63] rounded-lg p-8 px-5 py-5">
            <p className="font-[family-name:var(--font-heading)] text-white font-bold text-3xl leading-7">
              Seja para investimento ou moradia, temos o imóvel certo para você!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
