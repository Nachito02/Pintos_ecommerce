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
    ],
  },
}

module.exports = nextConfig
