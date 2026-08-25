import React from "react"
import type { Metadata } from 'next'
import Script from 'next/script'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const GA_ID = 'AW-18213345912' //Id do Tagueamento do Google Ads

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading'
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'Kellen Gagno | Corretora de Imóveis de médio e alto Padrão em Vitória e Grande Vitória ES',
  description: 'Procurando imóveis de medio e alto padrão em Vitória? Conheça lançamentos exclusivos na Grande Vitória e região com atendimento personalizado de Kellen Gagno',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        // type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <script type="application/ld+json">
          {`
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Kellen Gagno Corretora",
            "image": "https://kellengagnocorretora.com.br/images/logo-horizontal.png",
            "url": "https://kellengagnocorretora.com.br/",
            "telephone": "+55-27-99274-3485",
            "email": "kellen.es@associadolopes-es.com.br",
            "areaServed": [
              { "@type": "City", "name": "Vitória" },
              { "@type": "City", "name": "Vila Velha" },
              { "@type": "City", "name": "Serra" },
              { "@type": "City", "name": "Cariacica" },
              { "@type": "City", "name": "Guarapari" }
            ],
            "identifier": {
              "@type": "PropertyValue",
              "name": "CRECI",
              "value": "ES-15009F"
            }
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Vitória",
              "addressRegion": "ES",
              "addressCountry": "BR"
            },
            "sameAs": [
              "https://instagram.com/kellengagnocorretora_",
              "https://www.facebook.com/kellengagnocorretora/"
            ],
            "priceRange": "$$$",
            "description": "Especialista em imóveis de médio e alto padrão na Grande Vitória/ES, com atendimento personalizado e exclusivo."
          `}
        </script>
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Analytics />

      </body>
    </html>
  )
}
