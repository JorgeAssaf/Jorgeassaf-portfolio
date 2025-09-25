import { allPosts } from 'content-collections'

import { getLatestProjectsQuery } from '@/lib/querys'
import { client } from '@/lib/sanity'
import { PostCard } from '@/components/cards/post-card'
import Hero from '@/components/hero'
import { PageHeader } from '@/components/page-header'
import { Projects } from '@/components/projects'

import type { ProjectsEntity } from '../../types/sanity'

export default async function Home() {
  const projects = await client.fetch<ProjectsEntity[]>(
    getLatestProjectsQuery,
    {},
    {
      cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
      next: {
        revalidate: process.env.NODE_ENV === 'development' ? 0 : 3600 * 24 * 7 * 4,
      },
    },
  )

  return (
    <section>
      <Hero />
      <PageHeader
        title='Recent Projects'
        description='View my latest projects and experiments'
      />

      <Projects projects={projects} />

      <PageHeader
        title='Recent Resources'
        description='View my latest shared resources and articles'
      />
      {allPosts.map((post, i) => (
        <PostCard i={i} key={post.slug} post={post} />
      ))}
    </section>
  )
}
