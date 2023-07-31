'use client'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { buttonVariants } from './ui/button'
import { Icons } from './icons'
import { cn } from '@/lib/utils'
import { LoaderModel } from '@/scenes/home-scene'
import { Suspense } from 'react'

const HomeScene = dynamic(
  () => import('@/scenes/home-scene').then((mod) => mod.default),
  { ssr: false },
)

const Hero = () => {
  return (
    <motion.div
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
      className='my-14  md:my-10 flex items-center justify-between '
    >
      <div className='w-[34rem]'>
        <motion.h1
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='text-4xl md:text-6xl font-bold'
        >
          Hi, I’m Jorge Assaf.
        </motion.h1>
        <motion.h2
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className=' text-primary md:text-4xl my-1 font-semibold text-2xl'
        >
          Front-end Developer.
        </motion.h2>
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='text-muted-foreground mt-3 md:text-xl text-base'
        >
          Based in Mexico City. I take great pleasure in creating and developing
          applications for both web and mobile devices.
        </motion.p>
        <motion.div
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
            <Icons.gitHub className='w-6 h-6' />
            <span className='sr-only'>GitHub</span>
          </Link>

          <Link
            arial-label='LinkedIn'
            href='https://www.linkedin.com/in/jorge-enrique-assaf/'
            target='_blank'
            rel='noopener noreferrer'
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Icons.linkedIn className='w-6 h-6' />
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
        </motion.div>
      </div>
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className=' h-[500px] justify-center items-center hidden lg:flex'
      >

        <HomeScene />
        {/* 
        <Image
          src='/Vector.png'
          alt='image'
          loading='lazy'
          className='h-full '
          width={420}
          height={500}
        /> */}
      </motion.div>
    </motion.div>
  )
}

export default Hero
