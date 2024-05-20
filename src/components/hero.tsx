'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { m } from 'framer-motion'

import { cn } from '@/lib/utils'
import { GitHub, LinkedIn } from '@/components/icons'

import { MyResumen } from './my-resumen'
import { buttonVariants } from './ui/button'

const HomeScene = dynamic(() => import('@/scenes/home-scene'), {
  ssr: false,
})

const Hero = () => {
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
      className='w-full py-16'
    >
      <div className='flex flex-col justify-between gap-8 lg:flex-row lg:items-center'>
        <div className='space-y-2 '>
          <m.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='space-y-2'>
            <m.h1 className='text-4xl font-bold tracking-tighter lg:text-6xl'>
              Hi, I’m Jorge Assaf.
            </m.h1>
            <m.p className='text-3xl font-semibold text-primary lg:text-4xl'>
              Front-end Developer.
            </m.p>
          </m.div>
          <m.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='max-w-2xl text-muted-foreground md:text-lg'
          >
            I am a passionate software engineer with a strong background in
            full-stack web development. I love building innovative and
            user-friendly applications.
          </m.p>

          <m.div
            className='flex flex-row gap-5'
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Link className={cn(buttonVariants())} href='#'>
              <GitHub className='size-6' />
              <span className='sr-only'>GitHub</span>
            </Link>
            <Link className={cn(buttonVariants())} href='#'>
              <LinkedIn className='size-6' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
            <Link
              className={cn(buttonVariants({ variant: 'secondary' }))}
              href='#'
            >
              Resume
            </Link>
          </m.div>
        </div>
        <m.div
          className='hidden size-[450px] lg:block'
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <HomeScene />
        </m.div>
      </div>
    </m.section>
  )
}

export default Hero
