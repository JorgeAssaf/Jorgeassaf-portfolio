import type { Metadata } from 'next'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'
import { Formaters } from '@/helpers/formaters'

import { getProjectsQuery } from '@/lib/querys'
import { client } from '@/lib/sanity'
import CategoryButtons from '@/components/category-buttons'
import { FramerDiv } from '@/components/framer'
import { PageHeader } from '@/components/page-header'
import Projects from '@/components/projects'
import type { ProjectsEntity } from '@/types/sanity'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Here you can see my projects and what technologies they are made with and the links to the repositories and the live version',
  keywords: [
    'projects',
    'portfolio',
    'frontend',
    'backend',
    'fullstack',
    'mobile',
  ],
  robots: 'index, follow',
}

const categories = [
  { title: 'Frontend' },
  { title: 'Backend' },
  { title: 'Mobile' },
  { title: 'Fullstack' },
]

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { category } = await searchParams

  const projects = await client.fetch<ProjectsEntity[]>(getProjectsQuery, {
    category:
      category !== undefined ? Formaters.capitalizeFirstLetter(category) : '',
  })
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
          <CategoryButtons
            withAll
            categories={categories}
            buttonVariant='secondary'
            className='flex flex-row flex-wrap gap-2'
            activeCategory='bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90'
          />
        </FramerDiv>
        <Projects projects={projects} />
      </div>
    </section>
  )
}
