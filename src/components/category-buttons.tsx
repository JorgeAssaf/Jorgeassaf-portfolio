'use client'

import { useCallback, useTransition, type FC } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FADE_LEFT_ANIMATION_VARIANTS } from '@/constans'
import { domAnimation, LazyMotion, m } from 'framer-motion'

import { cn, slugify } from '@/lib/utils'
import type { Category } from '@/app/types/sanity'

import { Button } from './ui/button'

interface CategoryButtonsProps {
  categories: Category[]
}

const CategoryButtons: FC<CategoryButtonsProps> = ({ categories }) => {
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
    <LazyMotion features={domAnimation}>
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
        className='flex flex-row flex-wrap gap-5  md:flex-col  '
      >
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
                'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90',
            )}
            variant='outline'
            size='sm'
          >
            All posts
          </Button>
        </m.div>

        {categories.map((category: Category) => (
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
                  'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90',
              )}
              variant='outline'
              size='sm'
            >
              {category.title}
            </Button>
          </m.div>
        ))}
      </m.div>
    </LazyMotion>
  )
}

export default CategoryButtons
