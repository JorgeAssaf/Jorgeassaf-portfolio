/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['cdn.sanity.io'],
  }

}

module.exports = nextConfig
