import { Header } from '@/components/header'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Scroll from '@/components/scroll'
import { client } from '@/lib/sanity'
import { projectsQuery } from '@/utils/querys'

export default async function Home() {
  const projects = (await client.fetch<Projects[]>(projectsQuery)) ?? []

  return (
    <main>
      <Hero />
      <Scroll />
      <Header title='Projects' />
      <Projects projects={projects} />
      <Header title='Hey Here' className='mt-30' />
      <div>
        <p className='mb-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit quos vel impedit id quam, obcaecati laborum provident ipsum beatae cum voluptates! Consequuntur, ipsa labore asperiores natus libero qui ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis natus ratione voluptatum voluptate odit est quisquam consequatur, fugiat, provident excepturi culpa sed, facilis ex doloremque dicta consectetur explicabo distinctio.
          Placeat officiis sit reiciendis numquam rerum repudiandae, necessitatibus incidunt voluptates expedita iste maiores consectetur cumque minima. Cumque voluptatem vitae sunt rem porro adipisci voluptate iste saepe sed consectetur. Soluta, enim.
        </p>
        <button>
          Click me
        </button>
      </div>
    </main>
  )
}
