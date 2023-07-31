'use client'
import { motion } from 'framer-motion'
import { Icons } from '@/components/icons'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
const Scroll = () => {
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
      className='my-10 flex justify-center items-center'
    >
      <div className='flex flex-col justify-center items-center animate-pulse md:my-20 my-10'>
        <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS}>Scroll</motion.p>
        <motion.span variants={FADE_DOWN_ANIMATION_VARIANTS}>
          <Icons.arrowDown className='w-5 h-5 mt-2 animate-bounce ' />
        </motion.span>
      </div>
    </motion.div>
  )
}
export default Scroll
