import type { Metadata } from 'next'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { projectsQuery } from '@/utils/querys'

import { client } from '@/lib/sanity'
import { FramerDiv } from '@/components/framer'
import { PageHeader } from '@/components/page-header'
import Projects from '@/components/projects'
import type { Projects as ProjectsType } from '@/app/types/sanity'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Here you can see my latest projects and what technologies they are made with',
}

// const categories = [
//   { title: 'All' },
//   { title: 'Frontend' },
//   { title: 'Backend' },
//   { title: 'Mobile' },
//   { title: 'Fullstack' },
// ]

const ProjectsPage = async () => {
  const projects = (await client.fetch<ProjectsType[]>(projectsQuery)) ?? []
  return (
    <section>
      <PageHeader
        page
        title='Projects'
        description='Here you can see my last projects'
      />
      <div className='flex flex-col gap-10'>
        <FramerDiv
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='flex flex-wrap gap-2'
        >
          {/* <CategoryButtons
            categories={categories}
            buttonSize={'default'}
            buttonVariant={'default'}
            className='flex flex-wrap gap-2 md:flex-row'
          /> */}
        </FramerDiv>
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default ProjectsPage
