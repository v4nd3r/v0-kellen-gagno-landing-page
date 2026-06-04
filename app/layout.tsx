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
  title: 'Kellen Gagno | Corretora de Imóveis de Alto Padrão',
  description: 'Especialista em imóveis de médio e alto padrão. Encontre o imóvel dos seus sonhos com atendimento personalizado e exclusivo.',
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
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
        {children}
        <Analytics />

      </body>
    </html>
  )
}
