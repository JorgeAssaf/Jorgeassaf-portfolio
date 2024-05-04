'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

import { cn } from '@/lib/utils'

import { buttonVariants } from './ui/button'

export const MyResumen = () => {
  const [isHovered, setHovered] = useState(false)
  return (
    <Link
      href='/resume.pdf'
      aria-label='Download my resume'
      onMouseEnter={() => setHovered(true)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onMouseLeave={() => setHovered(false)}
      download
      className={cn(
        buttonVariants({ variant: 'default' }),
        'flex h-0 items-center rounded-full bg-primary px-2.5 py-5 ',
      )}
    >
      <ArrowDown size={20} aria-hidden='true' />
      <motion.span
        className='overflow-hidden whitespace-nowrap'
        initial={{
          width: 0,
        }}
        animate={{
          width: isHovered ? 'auto' : 0,
          marginLeft: isHovered ? 5 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        My resume
      </motion.span>
    </Link>
  )
}
