'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { Button } from './ui/button'
import { Icons } from './icons'

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
      className='my-14 md:mb-14 md:mt-24 md:my-10 flex items-center justify-between '
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
          className='decoration-wavy underline-offset-1 underline text-primary md:text-4xl my-1 font-semibold text-2xl'
        >
          Front-end Developer.
        </motion.h2>
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='text-muted-foreground mt-3 md:text-xl text-base'
        >
          I’m a Front-end Developer based in Mexico City, Mexico. I have a
          passion for web development and love to create for web and mobile
          devices.
        </motion.p>
        <motion.div
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className='mt-5 flex gap-5'
        >
          <Button aria-label='GitHub'>
            <Icons.gitHub className='w-6 h-6' />
            <span className='sr-only'>
              GitHub
            </span>
          </Button>
          <Button aria-label='LinkedIn'>
            <Icons.linkedIn className='w-7 h-7' />
            <span className='sr-only'>
              LinkedIn
            </span>
          </Button>
          <Button variant='outline'>Resumen</Button>
        </motion.div>
      </div>
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className='max-w-lg h-full  hidden lg:flex'
      >

        {/* <HomeScene /> */}


        <Image
          src='/Vector.png'
          alt='image'
          className='h-full '
          width={420}
          height={500}
        />
      </motion.div>
    </motion.div>
  )
}

export default Hero
