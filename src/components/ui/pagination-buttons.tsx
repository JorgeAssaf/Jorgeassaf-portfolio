import { useMemo } from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'

import { Button } from './button'

interface PaginationButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  page: number
  totalPage: number
}

export const PaginationButtons = ({
  className,
  page,
  totalPage,
}: PaginationButtonsProps) => {
  const delta = 1 + 2
  const paginationRange = useMemo(() => {
    const range = [] as (number | '...')[]

    for (
      let i = Math.max(2, Number(page) - delta);
      i <= Math.min(totalPage - 1, Number(page) + delta);
      i++
    ) {
      range.push(i)
    }

    if (Number(page) - delta > 2) {
      range.unshift('...')
    }
    if (Number(page) + delta < totalPage - 1) {
      range.push('...')
    }
    range.unshift(1)

    if (totalPage !== 1) {
      range.push(totalPage)
    }

    return range
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, totalPage])

  return (
    <div className={cn('flex items-center justify-center gap-2', className)}>
      <Button variant={'outline'} size={'icon'} disabled={page === 1}>
        <ChevronsLeftIcon className='size-4' aria-hidden='true' />
      </Button>
      <Button variant={'outline'} size={'icon'} disabled={page === 1}>
        <ChevronLeftIcon className='size-4' aria-hidden='true' />
      </Button>

      {paginationRange.map((item, i) => {
        if (item === '...') {
          return (
            <span key={i} className='px-2'>
              ...
            </span>
          )
        }

        return (
          <Button key={item} variant={page === item ? 'default' : 'outline'}>
            {item}
          </Button>
        )
      })}
      <Button variant={'outline'} size={'icon'} disabled={page === 1}>
        <ChevronRightIcon className='size-4' aria-hidden='true' />
      </Button>
      <Button variant={'outline'} size={'icon'} disabled={page === 1}>
        <ChevronsRightIcon className='size-4' aria-hidden='true' />
      </Button>
    </div>
  )
}
