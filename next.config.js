/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { optimizeCss: true },
  images: {
    formats: ['image/webp'],
    domains: ['cdn.sanity.io'],
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig
