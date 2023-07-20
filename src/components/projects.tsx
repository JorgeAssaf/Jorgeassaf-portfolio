'use client'
import { FC } from 'react'
import { motion } from 'framer-motion'
import ProjectsCard from '@/components/projects-card'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import type { Projects } from '@/app/types/sanity'

interface ProjectsProps {
  projects: Projects[]
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <motion.section
      initial='hidden'
      animate='show'
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
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10    '
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <ProjectsCard projects={projects} />
      </motion.div>
    </motion.section>
  )
}

export default Projects
