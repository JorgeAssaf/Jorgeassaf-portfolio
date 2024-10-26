'use client'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'
import { domAnimation, LazyMotion, m } from 'framer-motion'

import { siteConfig } from '@/config/site'

import MainNav from './main-nav'
import MobileNav from './mobile-nav'

const SiteHeader = () => {
  return (
    <LazyMotion features={domAnimation}>
      <m.header
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
        className='sticky top-0 z-40 w-full backdrop-blur-md'
      >
        <m.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='container py-5'
        >
          <MainNav items={siteConfig.mainNav} />
          <MobileNav items={siteConfig.mainNav} />
        </m.div>
      </m.header>
    </LazyMotion>
  )
}

export default SiteHeader
