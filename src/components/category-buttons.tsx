'use client'

import { useCallback, useTransition } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FADE_LEFT_ANIMATION_VARIANTS } from '@/constants'
import { m } from 'framer-motion'
import { Home, type LucideIcon } from 'lucide-react'

import { cn, slugify } from '@/lib/utils'

import icons from './icons'
import { Button, type ButtonProps } from './ui/button'

const CategoryButtons = ({
  activeCategory,
  buttonClassName,
  buttonSize = 'sm',
  buttonVariant = 'outline',
  categories,
  className,
  iconStyle,
  withAll = false,
  withIcons = false,
}: {
  activeCategory?: string
  buttonClassName?: string
  buttonSize?: ButtonProps['size']
  buttonVariant?: ButtonProps['variant']
  categories: { title: string; icon?: keyof typeof icons }[]
  className?: string
  iconStyle?: string
  withAll?: boolean
  withIcons?: boolean
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
                  { scroll: false },
                )
              })
            }}
            disabled={isPending}
            className={cn(
              !categoryParam && activeCategory,
              buttonClassName,
              withIcons && 'flex items-center gap-2',
            )}
            variant={buttonVariant}
            size={buttonSize}
          >
            {withIcons && <Home className={cn(iconStyle)} size={16} />}
            All
          </Button>
        )}

        {categories.map((category) => {
          const Icon = icons[category.icon as keyof typeof icons] as LucideIcon
          return (
            <Button
              key={category.title}
              onClick={() => {
                startTransition(() => {
                  router.push(
                    `${pathname}?${createQueryString({
                      category: slugify(category.title),
                    })}`,
                    { scroll: false },
                  )
                })
              }}
              disabled={isPending}
              className={cn(
                slugify(category.title) === categoryParam && activeCategory,
                buttonClassName,
                withIcons && 'flex items-center gap-2',
              )}
              variant={buttonVariant}
              size={buttonSize}
            >
              {withIcons && <Icon className={cn(iconStyle)} size={16} />}
              {category.title}
            </Button>
          )
        })}
      </m.div>
    </m.div>
  )
}

export default CategoryButtons
