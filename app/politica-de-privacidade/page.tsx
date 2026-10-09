import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Política de Privacidade | Kellen Gagno",
  description:
    "Saiba como Kellen Gagno trata os dados pessoais coletados neste site, para quais finalidades e como exercer seus direitos previstos na LGPD.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
}

const sectionClass = "space-y-4"
const headingClass =
  "font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#1a1a1a] md:text-3xl"
const paragraphClass =
  "font-[family-name:var(--font-body)] leading-7 text-gray-700"
const listClass =
  "list-disc space-y-2 pl-6 font-[family-name:var(--font-body)] leading-7 text-gray-700 marker:text-[#c49b63]"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-100 bg-white">
        <div className="container mx-auto flex min-h-20 items-center justify-between px-4">
          <Link href="/" aria-label="Kellen Gagno - página inicial">
            <Image
              src="/images/logo-horizontal.webp"
              alt="Kellen Gagno Corretora"
              width={202}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <Link
            href="/"
            className="font-[family-name:var(--font-body)] text-sm font-medium text-gray-700 transition-colors hover:text-[#c49b63]"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <section className="bg-[#f8f6f3] px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-4xl">
          <p className="mb-3 font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.16em] text-[#9b7947]">
            Transparência e proteção de dados
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[#1a1a1a] md:text-6xl">
            Política de Privacidade
          </h1>
          <p className="mt-5 max-w-3xl font-[family-name:var(--font-body)] leading-7 text-gray-700">
            Esta política explica como os dados pessoais são tratados quando
            você visita o site de Kellen Gagno ou entra em contato por meio
            dele. Nosso compromisso é usar essas informações com
            responsabilidade, transparência e de acordo com a legislação
            aplicável, incluindo a Lei Geral de Proteção de Dados Pessoais
            (LGPD).
          </p>
          <p className="mt-4 font-[family-name:var(--font-body)] text-sm text-gray-600">
            Última atualização: 9 de outubro de 2026
          </p>
        </div>
      </section>

      <article className="container mx-auto max-w-4xl space-y-12 px-4 py-12 md:py-16">
        <section className={sectionClass}>
          <h2 className={headingClass}>1. Quem é responsável pelos dados?</h2>
          <p className={paragraphClass}>
            Para os tratamentos descritos nesta política, a responsável é
            Kellen Gagno, corretora de imóveis, CRECI-ES 15009F, atuando na
            Grande Vitória/ES. Para dúvidas ou solicitações relacionadas aos
            seus dados, entre em contato pelo e-mail{" "}
            <a
              href="mailto:kellen.es@associadolopes-es.com.br"
              className="font-medium text-[#8a6838] underline underline-offset-4"
            >
              kellen.es@associadolopes-es.com.br
            </a>
            .
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>2. Quais dados podemos coletar?</h2>
          <p className={paragraphClass}>
            Os dados tratados dependem de como você usa o site e entra em
            contato:
          </p>
          <ul className={listClass}>
            <li>
              <strong>Dados que você informa:</strong> nome, telefone,
              preferência ou tipo de imóvel e o conteúdo da mensagem enviada
              pelos formulários de contato.
            </li>
            <li>
              <strong>Dados de navegação:</strong> informações técnicas, como
              endereço IP, identificadores de cookies ou tecnologias
              semelhantes, páginas visitadas, origem da visita, tipo de
              dispositivo e interações com o site.
            </li>
            <li>
              <strong>Dados de comunicação:</strong> informações que você
              decidir compartilhar ao conversar pelo WhatsApp, telefone ou
              e-mail.
            </li>
          </ul>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>
            3. Para que usamos essas informações?
          </h2>
          <p className={paragraphClass}>
            Usamos os dados pessoais para atender seu contato e responder a
            dúvidas, entender seu interesse imobiliário, apresentar imóveis e
            informações relacionadas, dar continuidade ao atendimento que você
            solicitou, manter a segurança e o funcionamento do site e medir
            audiência e desempenho de campanhas. Também poderemos tratar dados
            para cumprir obrigações legais ou regulatórias e exercer direitos
            em processos administrativos ou judiciais.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>4. Formulários e WhatsApp</h2>
          <p className={paragraphClass}>
            Os formulários deste site não enviam as informações para um banco de
            dados próprio. Ao enviar um formulário, o site prepara uma mensagem
            com os dados que você preencheu e abre o WhatsApp para que você
            inicie o contato. Você pode revisar ou cancelar a mensagem antes de
            enviá-la. Depois que a conversa é iniciada, o WhatsApp/Meta trata
            os dados conforme os próprios termos e políticas de privacidade.
          </p>
          <p className={paragraphClass}>
            Se preferir, você pode entrar em contato diretamente por telefone ou
            e-mail. Evite incluir dados pessoais sensíveis ou informações de
            terceiros na mensagem, salvo se forem necessários para o
            atendimento.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>5. Cookies e ferramentas de análise</h2>
          <p className={paragraphClass}>
            O site utiliza recursos de terceiros para entender a navegação,
            avaliar campanhas e melhorar sua experiência, incluindo Google
            (Google Ads/Google tag), Meta (Meta Pixel) e Vercel Analytics. Essas
            ferramentas podem coletar dados técnicos e de interação por meio de
            cookies ou tecnologias semelhantes, de acordo com as configurações
            do seu navegador e as políticas de cada fornecedor.
          </p>
          <p className={paragraphClass}>
            Você pode consultar as configurações de privacidade do navegador
            para bloquear ou remover cookies. A desativação de determinados
            recursos pode limitar algumas funcionalidades ou a medição de
            campanhas. Os fornecedores também disponibilizam informações sobre
            suas próprias opções de privacidade em seus respectivos sites.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>
            6. Com quem os dados podem ser compartilhados?
          </h2>
          <p className={paragraphClass}>
            Não comercializamos seus dados pessoais. O compartilhamento pode
            ocorrer, quando necessário para as finalidades desta política, com:
          </p>
          <ul className={listClass}>
            <li>
              plataformas e prestadores de serviço que viabilizam comunicação,
              hospedagem, análise de audiência e divulgação, como WhatsApp/Meta,
              Google e Vercel;
            </li>
            <li>
              imobiliárias, incorporadoras ou profissionais envolvidos no
              atendimento sobre o imóvel que você demonstrou interesse;
            </li>
            <li>
              autoridades públicas, quando houver obrigação legal, ordem válida
              ou necessidade de proteger direitos.
            </li>
          </ul>
          <p className={paragraphClass}>
            Alguns fornecedores podem tratar dados em outros países. Nesses
            casos, o tratamento deverá observar a legislação aplicável e as
            garantias previstas para a transferência internacional de dados.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>7. Bases legais e período de guarda</h2>
          <p className={paragraphClass}>
            O tratamento será realizado conforme a finalidade e a situação
            concreta, com base nas hipóteses previstas na LGPD, como execução de
            procedimentos solicitados por você, cumprimento de obrigação legal,
            exercício regular de direitos, legítimo interesse quando aplicável
            ou consentimento, quando necessário.
          </p>
          <p className={paragraphClass}>
            Mantemos os dados apenas pelo tempo necessário para atender às
            finalidades informadas, cumprir prazos legais e regulatórios ou
            resguardar direitos. O prazo pode variar conforme o tipo de dado e o
            contexto do atendimento. Após esse período, os dados serão
            eliminados ou anonimizados, ressalvadas as hipóteses legais de
            conservação.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>8. Seus direitos</h2>
          <p className={paragraphClass}>
            Nos termos da LGPD, você pode solicitar confirmação da existência
            de tratamento, acesso, correção, anonimização, bloqueio ou
            eliminação de dados desnecessários ou tratados em desconformidade,
            portabilidade quando aplicável, informações sobre
            compartilhamentos, revisão de decisões automatizadas e revogação
            do consentimento, quando essa for a base legal utilizada.
          </p>
          <p className={paragraphClass}>
            Para exercer seus direitos, escreva para{" "}
            <a
              href="mailto:kellen.es@associadolopes-es.com.br"
              className="font-medium text-[#8a6838] underline underline-offset-4"
            >
              kellen.es@associadolopes-es.com.br
            </a>
            , informando sua solicitação. Poderemos pedir informações
            necessárias para confirmar sua identidade e responder com
            segurança, observados os prazos e limites previstos em lei.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>9. Segurança e atualizações</h2>
          <p className={paragraphClass}>
            Adotamos medidas razoáveis para proteger os dados contra acessos não
            autorizados, perdas e usos indevidos. Nenhuma transmissão ou
            armazenamento eletrônico é totalmente livre de riscos; caso ocorra
            um incidente relevante, serão adotadas as medidas cabíveis nos
            termos da legislação.
          </p>
          <p className={paragraphClass}>
            Esta política pode ser atualizada para refletir mudanças no site,
            nas práticas de tratamento ou na legislação. A versão vigente será
            publicada nesta página com a respectiva data de atualização.
          </p>
        </section>
      </article>

      <Footer whatsappMessage="Olá! Tenho uma dúvida sobre a política de privacidade do site." />
    </main>
  )
}
