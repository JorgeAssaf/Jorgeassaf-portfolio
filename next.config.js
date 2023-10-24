/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    domains: ['cdn.sanity.io'],
  },
  transpilePackages: ['three', '@react-three/drei', '@react-three/fiber'],
}

module.exports = nextConfig
