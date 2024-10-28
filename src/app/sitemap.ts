import type { MetadataRoute } from 'next'
import { allPosts } from 'content-collections'

import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
  })) satisfies MetadataRoute.Sitemap
  const routes = ['', '/about', '/blog', '/projects'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
  })) satisfies MetadataRoute.Sitemap
  return [...routes, ...posts]
}
