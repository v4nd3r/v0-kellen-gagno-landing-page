const faqs = [
  {
    question: "Quais são os melhores bairros para comprar apartamento em Vitória – ES?",
    answer:
      "A escolha entre os melhores bairros de Vitória depende do seu estilo de vida, orçamento e objetivos. Jardim Camburi é uma região que merece atenção por sua estrutura de comércio, serviços e opções de moradia, especialmente para quem procura apartamento em Jardim Camburi. Outros bairros de Vitória e municípios da Grande Vitória também podem ser interessantes, dependendo das suas prioridades. Podemos ajudar você a comparar as opções e encontrar a localização ideal.",
  },
  {
    question: "Como saber se um imóvel é um bom investimento em Vitória?",
    answer:
      "Avalie localização, infraestrutura do bairro, demanda de aluguel, histórico de valorização e a reputação da construtora. Vitória e a Grande Vitória têm regiões com forte procura, como Jardim Camburi, Praia do Canto e Itapuã. Posso preparar uma análise personalizada do seu perfil de investidor, com opções de acordo com seu orçamento.",
  },
  {
    question: "Vale mais a pena comprar um imóvel na planta ou pronto?",
    answer:
      "Depende do seu objetivo. Na planta, o valor inicial costuma ser menor, as condições de pagamento são facilitadas e há potencial de valorização até a entrega. Já o imóvel pronto permite mudança imediata e você vê exatamente o que está comprando. Vamos conversar sobre seus planos para indicar a melhor opção, inclusive em bairros como Jardim Camburi, Praia do Canto e Mata da Praia.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 lg:py-28" aria-labelledby="faq-title">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            id="faq-title"
            className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-semibold text-black md:text-4xl lg:text-5xl"
          >
            Perguntas frequentes
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-[#c49b63]" />
          <p className="font-[family-name:var(--font-body)] text-lg text-gray-600">
            Tire suas dúvidas sobre compra de imóveis e investimento em Vitória e região.
          </p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-gray-200">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group border-t border-gray-200 py-5 first:border-t-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-[family-name:var(--font-heading)] text-2xl font-semibold text-black marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c49b63]">
                {question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl font-normal text-[#c49b63] transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pt-4 font-[family-name:var(--font-body)] leading-relaxed text-gray-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
