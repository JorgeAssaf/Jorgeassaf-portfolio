'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string | null
  page?: boolean
  size?: 'default' | 'sm'
}

export function Header({
  title,
  description,
  page = false,
  className,
  ...props
}: HeaderProps) {
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
    >
      <div
        {...props}
        className={cn(
          'my-20 mx-auto justify-center',
          className,
          page ? 'my-10' : 'my-20',
        )}
      >
        <motion.h3
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className={cn(
            'md:text-5xl text-3xl font-bold tracking-tight justify-center flex flex-col ',
            !description && 'flex flex-row',
          )}
        >
          {title}
        </motion.h3>

        {description ? (
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className={cn(
              'line-clamp-2 text-muted-foreground text-lg md:text-xl mt-3  ',
              !description && 'hidden',
            )}
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </motion.div>
  )
}
