'use client'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { motion } from 'framer-motion'

import { siteConfig } from '@/config/site'

import MainNav from './main-nav'
import MobileNav from './mobile-nav'

const SiteHeader = () => {
  return (
    <motion.header
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
      className='sticky top-0 z-40 w-full bg-background/50 backdrop-blur-md'
    >
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className='container py-5 '
      >
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
      </motion.div>
    </motion.header>
  )
}

export default SiteHeader
