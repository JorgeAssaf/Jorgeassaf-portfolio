import { siteConfig } from '@/config/site'
import { client } from '@/lib/sanity'
import { MetadataRoute } from 'next'
import { Post } from './types/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPosts = await client.fetch(`*[_type == "post"]{slug}`)
  const posts = allPosts.map((post: Post) => ({
    url: `${siteConfig.url}/blog/${post.slug.current}`,
    lastModified: new Date().toISOString(),
  }))
  const routes = [
    '',
    '/about',
    '/blog',
    '/projects',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }))
  return [...routes, ...posts]
}
