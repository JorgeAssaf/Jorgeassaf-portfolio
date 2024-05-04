'use client'

import type { FC } from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { m } from 'framer-motion'

import { ProjectsCard } from '@/components/cards/projects-card'
import type { Projects as ProjectsType } from '@/app/types/sanity'

interface ProjectsProps {
  projects: ProjectsType[]
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
      <m.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className='grid grid-cols-1 place-items-center gap-4 md:grid-cols-2'
      >
        {projects.map((project) => (
          <ProjectsCard key={project._id} project={project} />
        ))}
      </m.div>
    </m.section>
  )
}

export default Projects
