import { motion } from 'framer-motion'
import HomeScene from '@/scenes/home-scene'
import { Button } from './ui/button'
import { Icons } from './icons'
import { ArrowDownFromLine } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className='my-14 md:my-10 flex items-center '>
      <div className='max-w-[34rem]'>
        <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS} className='text-4xl md:text-6xl font-bold'>Hi, I’m Jorge Assaf.</motion.h1>
        <motion.h2 variants={FADE_DOWN_ANIMATION_VARIANTS} className='decoration-wavy underline-offset-1 underline text-primary md:text-4xl mt-3 font-semibold text-2xl'>
          Front-end Developer.
        </motion.h2>
        <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS} className='text-gray-500 mt-3 md:text-xl text-base'>
          I’m a Front-end Developer based in Mexico City, Mexico. I have a
          passion for web development and love to create for web and mobile
          devices.
        </motion.p>
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='mt-5 flex gap-5'>
          <Button className='bg-primary'>
            <Icons.gitHub className='w-5 h-5' />
          </Button>
          <Button className='bg-primary'>
            <Icons.linkedIn className='w-5 h-5' />
          </Button>
          <Button variant='outline'>Resumen</Button>
        </motion.div>
      </div>
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='max-w-lg h-full mx-auto hidden lg:flex'>
        {/* <HomeScene /> */}

        <Image
          src='/Vector.png'
          alt='image'
          className='h-72 '
          width={320}
          height={500}
        />
      </motion.div>
    </motion.div>
  )
}

export default Hero
