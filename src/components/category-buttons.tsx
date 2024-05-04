'use client'

import { useCallback, useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FADE_LEFT_ANIMATION_VARIANTS } from '@/constans'
import { m } from 'framer-motion'

import { cn, slugify } from '@/lib/utils'

import { Button, type ButtonProps } from './ui/button'

const CategoryButtons = ({
  withAll = false,
  buttonVariant = 'outline',
  buttonSize = 'sm',
  categories,
  className,
}: {
  categories: Record<string, string>[]
  withAll?: boolean

  className?: string
  buttonSize?: ButtonProps['size']
  buttonVariant?: ButtonProps['variant']
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const categoryParam = searchParams.get('category')

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString())

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key)
        } else {
          newSearchParams.set(key, String(value))
        }
      }

      return newSearchParams.toString()
    },
    [searchParams],
  )

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
      className={cn('flex flex-row flex-wrap gap-5 md:flex-col', className)}
    >
      {withAll && (
        <m.div variants={FADE_LEFT_ANIMATION_VARIANTS}>
          <Button
            onClick={() => {
              startTransition(() => {
                router.push(
                  `${pathname}?${createQueryString({
                    category: null,
                  })}`,
                )
              })
            }}
            disabled={isPending}
            className={cn(
              !categoryParam &&
                buttonVariant === 'outline' &&
                'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90',
            )}
            variant={buttonVariant}
            size={buttonSize}
          >
            All
          </Button>
        </m.div>
      )}

      {categories.map((category) => (
        <m.div variants={FADE_LEFT_ANIMATION_VARIANTS} key={category.title}>
          <Button
            onClick={() => {
              startTransition(() => {
                router.push(
                  `${pathname}?${createQueryString({
                    category: slugify(category.title),
                  })}`,
                )
              })
            }}
            disabled={isPending}
            className={cn(
              slugify(category.title) == categoryParam &&
                buttonVariant === 'outline' &&
                'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90',
            )}
            variant={buttonVariant}
            size={buttonSize}
          >
            {category.title}
          </Button>
        </m.div>
      ))}
    </m.div>
  )
}

export default CategoryButtons
