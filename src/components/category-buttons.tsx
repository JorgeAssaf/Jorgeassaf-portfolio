'use client'
import type { Category } from '@/app/types/sanity'
import { motion } from 'framer-motion'
import { type FC, useTransition, useCallback } from 'react'
import { Button } from './ui/button'
import { cn, slugify } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FADE_LEFT_ANIMATION_VARIANTS } from '@/constans'

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
    <motion.div
      initial='hidden'
      animate='show'
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className='flex md:flex-col flex-row flex-wrap  gap-5  '
    >
      <motion.div variants={FADE_LEFT_ANIMATION_VARIANTS}>
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
            'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-hover-foreground',
          )}
          variant='outline'
          size='sm'
        >
          All posts
        </Button>
      </motion.div>

      {categories.map((category: Category) => (
        <motion.div
          variants={FADE_LEFT_ANIMATION_VARIANTS}
          key={category.title}
        >
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
              'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-hover-foreground',
            )}
            variant='outline'
            size='sm'
          >
            {category.title}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CategoryButtons
