'use client'

import Link from 'next/link'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import type { Post } from 'contentlayer/generated'
import { m } from 'framer-motion'

import { formatDate } from '@/lib/utils'

import { Badge } from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <m.div
      variants={FADE_DOWN_ANIMATION_VARIANTS}
      className='grid grid-cols-1 gap-10 md:grid-cols-2'
    >
      <Card>
        <CardHeader>
          <Link href={`/blog/${post.url}`}>
            <CardTitle className='my-2 line-clamp-2 text-2xl font-bold'>
              <m.span variants={FADE_DOWN_ANIMATION_VARIANTS}>
                {post.title}
              </m.span>
            </CardTitle>
          </Link>
          <div className='mt-0 md:mt-2'>
            <div className='flex flex-wrap gap-4'>
              <span>{formatDate(post.date)}</span>
              <div className='flex flex-wrap gap-3'>
                {post.categories.map((category) => (
                  <Badge
                    className='bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground'
                    key={category}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>{post.title}</p>
        </CardHeader>
        <CardContent>{post.author.name}</CardContent>
      </Card>
    </m.div>
  )
}