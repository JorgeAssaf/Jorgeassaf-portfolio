'use client'
import { Category } from '@/app/types/sanity'
import { FC, useTransition, useCallback } from 'react'
import { Button } from './ui/button'
import { cn, slugify } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

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
    <>
      {categories.map((category: Category) => (
        <div key={category.title} className='flex'>
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
              'bg-primary text-primary-foreground hover:bg-primary-hover hover:text-primary-hover-foreground',
            )}
            variant='outline'
            size='sm'
          >
            {category.title}
          </Button>
        </div>
      ))}
    </>
  )
}

export default CategoryButtons
