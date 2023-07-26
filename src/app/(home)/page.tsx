import { Header } from '@/components/header'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Scroll from '@/components/scroll'
import { client } from '@/lib/sanity'
import { projectsQuery } from '@/utils/querys'

export const dynamic = 'force-static'

export default async function Home() {
  const projects = (await client.fetch<Projects[]>(projectsQuery)) ?? []

  return (
    <main>
      <Hero />
      <Scroll />
      <Header title='Projects' />
      <Projects projects={projects} />

    </main>
  )
}
