import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

import { getLatestProjectsQuery } from '@/lib/querys'
import { client } from '@/lib/sanity'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { PostCard } from '@/components/cards/post-card'
import Hero from '@/components/hero'
import { PageHeader } from '@/components/page-header'
import Projects from '@/components/projects'
import Scroll from '@/components/scroll'

import type { ProjectsEntity } from '../types/sanity'

export default async function Home() {
  const projects = await client.fetch<ProjectsEntity[]>(getLatestProjectsQuery)

  return (
    <main>
      <Hero />
      <Scroll />
      <PageHeader
        title='Recent Projects'
        description={'Some of my recent projects'}
      />

      <Projects projects={projects} />
      <Link className={cn(buttonVariants(), 'my-5')} href='/about'>
        View my experience in about page
      </Link>

     
      <PageHeader
        title='Recent Resourses'
        description='Some of my recent posts'
      />
      {allPosts.map((post, i) => (
        <PostCard i={i} key={post.slug} post={post} />
      ))}
    </main>
  )
}
