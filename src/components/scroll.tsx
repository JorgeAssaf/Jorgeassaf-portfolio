'use client'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'
import { m } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Scroll = () => {
  return (
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
      className='my-10 flex items-center justify-center'
    >
      <div className='my-10 flex animate-pulse flex-col items-center justify-center md:my-20'>
        <m.p variants={FADE_DOWN_ANIMATION_VARIANTS}>Scroll</m.p>
        <m.span variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <ArrowDown className='mt-2 size-5 animate-bounce' />
        </m.span>
      </div>
    </m.div>
  )
}
export default Scroll
