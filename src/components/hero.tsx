'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { domAnimation, LazyMotion, m } from 'framer-motion'

import { cn } from '@/lib/utils'
import { GitHub, LinkedIn } from '@/components/icons'

import { buttonVariants } from './ui/button'

const HomeScene = dynamic(() => import('@/scenes/home-scene'), {
  ssr: false,
})

const Hero = () => {
  return (
    <LazyMotion features={domAnimation}>
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
        className='my-14 flex items-center justify-between '
      >
        <div className='w-[37rem]'>
          <m.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='text-4xl font-bold md:text-6xl'
          >
            Hi, I’m Jorge Assaf.
          </m.h1>
          <m.h2
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className=' my-1 text-2xl font-semibold text-primary md:text-4xl'
          >
            Front-end Developer.
          </m.h2>
          <m.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='mt-3 text-base text-muted-foreground md:text-xl'
          >
            Based in Mexico City. I take great pleasure in creating and
            developing applications for both web and mobile devices.
          </m.p>
          <m.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='mt-5 flex gap-5'
          >
            <Link
              arial-label='GitHub'
              href='https://github.com/JorgeAssaf'
              target='_blank'
              rel='noopener noreferrer'
              className={cn(buttonVariants({ variant: 'default' }))}
            >
              <GitHub className='size-6' />
              <span className='sr-only'>GitHub</span>
            </Link>

            <Link
              arial-label='LinkedIn'
              href='https://www.linkedin.com/in/jorge-enrique-assaf/'
              target='_blank'
              rel='noopener noreferrer'
              className={cn(buttonVariants({ variant: 'default' }))}
            >
              <LinkedIn className='size-6' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
            <Link
              arial-label='Download Resume'
              target='_blank'
              rel='noopener noreferrer'
              href='https://drive.google.com/file/d/1KGmCNQLKOSRosglp8x-hNxsHgeHxkGPr/view?usp=sharing'
              className={cn(
                buttonVariants({
                  variant: 'outline',
                }),
              )}
            >
              Resume
            </Link>
          </m.div>
        </div>
        <m.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='hidden size-[500px] items-center justify-center lg:flex'
        >
          <HomeScene />
        </m.div>
      </m.div>
    </LazyMotion>
  )
}

export default Hero
