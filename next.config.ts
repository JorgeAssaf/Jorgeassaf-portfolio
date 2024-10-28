import type { NextConfig } from 'next'
import { withContentCollections } from '@content-collections/next'

const nextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pub-f17d057acab94eff8169231fde6b2dd0.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  transpilePackages: ['three', '@react-three/drei', '@react-three/fiber'],
} satisfies NextConfig

export default withContentCollections(nextConfig)
