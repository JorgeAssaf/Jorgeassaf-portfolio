'use client'

import type { FC } from 'react'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { motion } from 'framer-motion'

import ProjectsCard from '@/components/projects-card'
import type { Projects as ProjectsType } from '@/app/types/sanity'

interface ProjectsProps {
  projects: ProjectsType[]
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <motion.section
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
      <motion.div
        className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3    '
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <ProjectsCard projects={projects} />
      </motion.div>
    </motion.section>
  )
}

export default Projects
