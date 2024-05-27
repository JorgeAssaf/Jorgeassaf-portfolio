/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client'

import { cn, slugify } from '@/lib/utils'
import type { TocItem } from '@/app/(home)/blog/[...slug]/page'

export const Toc = ({ toc }: { toc: TocItem[] }) => {
  if (typeof window === 'undefined') return null
  const hash = window.location.hash
  return (
    <div className='relative mx-auto my-0 rounded-xl border border-solid bg-card/60 px-4 py-3 font-medium'>
      <h3 className='py-2 text-xl font-semibold'>Table of Contents</h3>
      <ul className='list-none'>
        {toc.map((heading: TocItem) => {
          console.log(`#${slugify(heading.slug)}`, hash)
          return (
            <li
              key={`#${heading.slug}`}
              className='border-t border-muted-foreground py-2 first:border-0'
            >
              <a
                href={`#${slugify(heading.slug)}`}
                data-level={heading.level}
                className={cn(
                  'flex flex-col data-[level=four]:pl-8 data-[level=three]:pl-4',
                  `#${slugify(heading.slug)}` === hash && 'text-primary',
                )}
              >
                <span
                  className={cn(
                    heading.level === 'three' &&
                      'list-item list-inside list-disc',
                    heading.level === 'four' && 'list-item list-inside ',
                  )}
                >
                  {heading.text}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
