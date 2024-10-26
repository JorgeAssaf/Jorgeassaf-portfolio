'use client'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'
import { m } from 'framer-motion'

import { cn } from '@/lib/utils'

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string | null
  page?: boolean
  size?: 'default' | 'sm'
}

export const PageHeader = ({
  title,
  description,
  page = false,
  className,
  ...props
}: HeaderProps) => {
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
    >
      <div
        {...props}
        className={cn(
          'mx-auto my-20 justify-center',
          className,
          page ? 'my-10' : 'my-20',
        )}
      >
        {page ? (
          <m.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className={cn(
              'flex flex-col justify-center text-3xl font-bold tracking-tight md:text-5xl',
              !description && 'flex-row',
            )}
          >
            {title}
          </m.h1>
        ) : (
          <m.h2
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className={cn(
              'flex flex-col justify-center text-3xl font-bold tracking-tight md:text-5xl',
              !description && 'flex-row',
            )}
          >
            {title}
          </m.h2>
        )}

        {description ? (
          page ? (
            <m.h2
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className={cn(
                'mt-3 line-clamp-2 text-lg text-muted-foreground md:text-xl',
                !description && 'hidden',
              )}
            >
              {description}
            </m.h2>
          ) : (
            <m.p
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className={cn(
                'mt-3 line-clamp-2 text-lg text-muted-foreground md:text-xl',
                !description && 'hidden',
              )}
            >
              {description}
            </m.p>
          )
        ) : null}
      </div>
    </m.div>
  )
}
