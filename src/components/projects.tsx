'use client'
import { FC } from 'react'
import { motion } from 'framer-motion'
import ProjectsCard from '@/components/projects-card'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { Icons } from './icons'
import { type Projects } from '@/app/types/sanity'

interface ProjectsProps {
  projects: Projects[]
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <motion.div
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
        className='my-10 flex justify-center items-center'
      >
        <div className='flex flex-col justify-center items-center animate-pulse md:my-20 my-10'>
          <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS}>Scroll</motion.p>
          <motion.span variants={FADE_DOWN_ANIMATION_VARIANTS}>
            <Icons.arrowDown className='w-5 h-5 mt-2 animate-bounce ' />
          </motion.span>
        </div>
      </motion.div>

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
        <motion.h3
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='md:text-5xl text-3xl font-semibold justify-center flex mb-20 '
        >
          Projects
        </motion.h3>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10    '
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <ProjectsCard projects={projects} />
        </motion.div>
      </motion.section>
    </>
  )
}

export default Projects
