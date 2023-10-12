import { type MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'
import { client } from '@/lib/sanity'

import type { Post } from './types/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await client.fetch<Post[]>(`*[_type == "post"]{slug}`)
  const posts = allPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
  }))
  const routes = ['', '/about', '/blog', '/projects'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }))
  return [...routes, ...posts]
}
