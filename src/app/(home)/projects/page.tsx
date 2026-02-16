import { Suspense } from 'react'
import type { Metadata } from 'next'
import {
  FADE_DOWN_ANIMATION_VARIANTS,
  FADE_LEFT_ANIMATION_VARIANTS,
} from '@/constants'
import { Formaters } from '@/helpers/formaters'
import { FileWarningIcon } from 'lucide-react'

import type { ProjectsEntity } from '@/types/sanity'
import { GETPROJECTSQUERY } from '@/lib/querys'
import { client } from '@/lib/sanity'
import CategoryButtons from '@/components/category-buttons'
import { FramerDiv } from '@/components/framer'
import { PageHeader } from '@/components/page-header'

import { ProjectCard } from '../../../components/cards/project-card'
import { Card, CardContent } from '../../../components/ui/card'
import { Skeleton } from '../../../components/ui/skeleton'

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
  searchParams: Promise<{ category?: string }>
}) {
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
          <Suspense
            fallback={Array(4)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className='h-10 w-24 rounded-md' />
              ))}
          >
            <CategoryButtons
              withAll
              categories={categories}
              buttonVariant='secondary'
              className='flex flex-row flex-wrap gap-2'
              activeCategory='bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90'
            />
          </Suspense>
        </FramerDiv>

        <Suspense
          fallback={
            <FramerDiv variants={FADE_LEFT_ANIMATION_VARIANTS}>
              <div className='grid grid-cols-1 place-content-center place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <Card
                      key={i}
                      className='flex size-full max-w-lg animate-pulse flex-col py-0'
                    >
                      <Skeleton className='bg-muted relative aspect-video w-full overflow-hidden' />
                      <CardContent className='flex flex-1 flex-col justify-between gap-4 p-4'>
                        <div className='flex flex-col gap-4'>
                          <div className='flex items-center justify-between'>
                            <Skeleton className='bg-muted h-6 w-20 rounded-md' />
                            <Skeleton className='bg-muted h-6 w-20 rounded-md' />
                          </div>
                          <Skeleton className='bg-muted h-8 w-3/4 rounded-md' />
                          <Skeleton className='bg-muted h-6 w-full rounded-md' />
                          <div className='grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-2'>
                            {Array(3)
                              .fill(0)
                              .map((_, i) => (
                                <Skeleton
                                  key={i}
                                  className='bg-muted h-6 w-full rounded-md'
                                />
                              ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </FramerDiv>
          }
        >
          <ProjectsList category={searchParams} />
        </Suspense>
      </div>
    </section>
  )
}

const ProjectsList = async ({
  category,
}: {
  category: Promise<{ category?: string }>
}) => {
  const { category: resolvedCategory } = await category
  const projects = await client.fetch<ProjectsEntity[]>(GETPROJECTSQUERY, {
    category:
      resolvedCategory !== undefined
        ? Formaters.capitalizeFirstLetter(resolvedCategory)
        : '',
  })
  return projects.length > 0 ? (
    <FramerDiv
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      className='grid grid-cols-1 place-content-center place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3'
    >
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </FramerDiv>
  ) : (
    <div className='flex min-h-[500px] w-full flex-col items-center justify-center'>
      <FileWarningIcon className='text-primary mt-7 mb-5 size-12' />

      <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        No projects found 😢
      </h2>
      <p className='text-muted-foreground max-w-md text-center'>
        Try changing the filters or adding new projects to see them here.
      </p>
    </div>
  )
}