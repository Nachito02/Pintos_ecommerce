/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.hm.com',
        port: '',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: '"lp2.hm.com',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
}

module.exports = nextConfig
