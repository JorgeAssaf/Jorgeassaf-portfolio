'use client'

import type { FC } from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { m } from 'framer-motion'

import { ProjectCard } from '@/components/cards/project-card'
import type { ProjectsEntity } from '@/app/types/sanity'

interface ProjectsProps {
  projects: ProjectsEntity[]
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <m.section
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
          className='grid grid-cols-1 place-items-center gap-4 md:grid-cols-2'
        >
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </m.div>
      ) : (
        <div className='flex min-h-[500px] w-full flex-col items-center justify-center gap-2'>
          <h2 className='text-center text-3xl font-bold'>No projects found</h2>
          <p className='max-w-sm text-center text-muted-foreground'>
            Try changing the filters or adding new projects to see them here.
          </p>
        </div>
      )}
    </m.section>
  )
}

export default Projects
