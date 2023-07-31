/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    domains: ['cdn.sanity.io'],
  },
  transpilePackages: ['three'],
}

module.exports = nextConfig
