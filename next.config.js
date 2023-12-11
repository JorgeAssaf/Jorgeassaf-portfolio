/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      }
    ]
  },
  transpilePackages: ['three', '@react-three/drei', '@react-three/fiber'],
}

module.exports = nextConfig
