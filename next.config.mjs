/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.kellengagnocorretora.com.br',
          },
        ],
        destination: 'https://kellengagnocorretora.com.br/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
