'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'
import { m } from 'framer-motion'
import { FileWarningIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { ProjectCard } from '@/components/cards/project-card'
import type { ProjectsEntity } from '@/types/sanity'

import { buttonVariants } from './ui/button'

interface ProjectsProps {
  projects: ProjectsEntity[]
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <m.div
      initial='hidden'
      animate='show'
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {projects.length > 0 ? (
        <m.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='grid grid-cols-1 place-content-center place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3'
        >
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </m.div>
      ) : (
        <div className='flex min-h-[500px] w-full flex-col items-center justify-center'>
          <FileWarningIcon className='mb-5 mt-7 size-12 text-primary' />

          <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
            No projects found 😢
          </h2>
          <p className='max-w-md text-center text-muted-foreground'>
            Try changing the filters or adding new projects to see them here.
          </p>
        </div>
      )}
      <m.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <Link className={cn(buttonVariants(), 'my-5')} href='/about'>
          View my experience in about page
        </Link>
      </m.div>
    </m.div>
  )
}

export default Projects
