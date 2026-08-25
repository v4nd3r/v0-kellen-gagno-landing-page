import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://kellengagnocorretora.com.br',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://kellengagnocorretora.com.br/imoveis/vitoria/macan-residence-jardim-camburi',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://kellengagnocorretora.com.br/imoveis/vitoria/parque-flora-jardim-camburi',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // adicionar aqui cada página de imóvel/empreendimento
  ]
}