import { projectsQuery } from '@/utils/querys'

import { client } from '@/lib/sanity'
import Hero from '@/components/hero'
import { PageHeader } from '@/components/page-header'
import Projects from '@/components/projects'
import Scroll from '@/components/scroll'

import { type Projects as ProjectsType } from '../types/sanity'

export default async function Home() {
  const projects = await client.fetch<ProjectsType[]>(projectsQuery)

  return (
    <main>
      <Hero />
      <Scroll />
      <PageHeader title='Latest Projects' />
      <Projects projects={projects} />
    </main>
  )
}
