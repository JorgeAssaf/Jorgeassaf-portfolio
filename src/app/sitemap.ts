import { type MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

import { allPosts } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {

  const posts = allPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.url}`,
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
