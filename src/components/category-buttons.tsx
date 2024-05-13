'use client'

import { useCallback, useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FADE_LEFT_ANIMATION_VARIANTS } from '@/constans'
import { m } from 'framer-motion'

import { cn, slugify } from '@/lib/utils'

import { Button, type ButtonProps } from './ui/button'

const CategoryButtons = ({
  activeCategory,
  buttonClassName,
  buttonSize = 'sm',
  buttonVariant = 'outline',
  categories,
  className,
  withAll = false,
}: {
  activeCategory?: string
  buttonClassName?: string
  buttonSize?: ButtonProps['size']
  buttonVariant?: ButtonProps['variant']
  categories: Record<string, string>[]
  className?: string
  withAll?: boolean
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
      className='flex min-w-40 flex-row flex-wrap gap-3 md:flex-col'
    >
      <m.div
        variants={FADE_LEFT_ANIMATION_VARIANTS}
        className={cn('flex flex-col items-start gap-5', className)}
      >
        {withAll && (
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
            className={cn(!categoryParam && activeCategory, buttonClassName)}
            variant={buttonVariant}
            size={buttonSize}
          >
            All
          </Button>
        )}

        {categories.map((category) => (
          <Button
            key={category.title}
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
              slugify(category.title) == categoryParam && activeCategory,
              buttonClassName,
            )}
            variant={buttonVariant}
            size={buttonSize}
          >
            {category.title}
          </Button>
        ))}
      </m.div>
    </m.div>
  )
}

export default CategoryButtons
