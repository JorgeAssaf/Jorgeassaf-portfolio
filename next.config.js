/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    formats: ['image/webp'],
    domains: ['cdn.sanity.io'],
  },
  transpilePackages: ['three'],
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.commons.minChunks = 2
    }
    return config
  }

}

module.exports = nextConfig
