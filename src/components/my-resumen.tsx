'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import * as m from 'motion/react-m'

import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'

import { buttonVariants, type ButtonProps } from './ui/button'

/**
 * MyResumen component renders a button or link for downloading the user's resume.
 *
 * @param {string} [className] - Optional CSS class for styling.
 * @param {ButtonProps['variant']} [variant='default'] - Button variant style.
 * @param {ButtonProps['size']} [size] - Button size.
 */
export const MyResumen = ({
  className,
  variant = 'default',
  size,
}: {
  className?: string
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
}) => {
  const [isHovered, setHovered] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  if (!isDesktop)
    return (
      <Link
        href='https://pub-b29265e317ef4f8eb5e76207721bbc52.r2.dev/Jorge_Enrique_Assaf_CV_2025.pdf'
        aria-label='Download Resume'
        target='_blank'
        rel='noopener noreferrer'
        className={cn(
          buttonVariants({ variant: variant, size: size, className }),
          'gap-0',
        )}
      >
        <ArrowDown size={20} aria-hidden='true' />
        <span className='overflow-hidden whitespace-nowrap'>My resume</span>
      </Link>
    )
  return (
    <Link
      href='https://pub-b29265e317ef4f8eb5e76207721bbc52.r2.dev/Jorge_Enrique_Assaf_CV_2025.pdf'
      aria-label='Download Resume'
      target='_blank'
      rel='noopener noreferrer'
      onMouseEnter={() => setHovered(true)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onMouseLeave={() => setHovered(false)}
      download
      className={cn(
        buttonVariants({ variant: variant, size: size, className }),
        'gap-0',
      )}
    >
      <ArrowDown size={20} aria-hidden='true' />
      <m.span
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
      </m.span>
    </Link>
  )
}

