'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Formaters } from '@/helpers/formaters'
import type { Post } from 'content-collections'

import { Badge } from '../ui/badge'

export const PostCard = ({ post, i }: { post: Post; i: number }) => {
  return (
    <article className='flex max-w-xl flex-col items-start' key={post._id}>
      <Link
        href={`/blog/${post.slug}`}
        className='relative w-full'
        title={post.title}
        aria-label={post.title}
      >
        <div className='aspect-video overflow-hidden rounded-md'>
          <Image
            src={post.mainImage}
            className='rounded-md'
            alt={post.title}
            fill
            sizes='(min-width: 1024px) 1024px, 100vw'
            priority={i < 2}
          />
        </div>
      </Link>

      <div className='mt-4 flex items-center gap-3 text-xs'>
        <time dateTime={post.date} className='text-muted-foreground'>
          {Formaters.formatDate(post.date, 'LLLL d, yyyy')}
        </time>
        {post.categories.map((category) => (
          <Badge className='py-1' key={category}>
            {category}
          </Badge>
        ))}
      </div>

      <div className='relative mt-3'>
        <h3 className='text-xl font-semibold leading-6'>
          <Link
            href={`/blog/${post.slug}`}
            className='text-foreground'
            title={post.title}
            aria-label={post.title}
          >
            {post.title}
          </Link>
        </h3>
        <p className='mt-3 line-clamp-2 leading-5'>{post.summary}</p>
      </div>

      <div className='relative mt-4 flex items-center gap-3'>
        <Image
          src={post.author.image}
          alt={`${post.author.name} profile`}
          className='rounded-full'
          width='40'
          height='40'
          loading='lazy'
        />

        <div className='text-sm leading-6'>
          <p className='m-0 font-semibold'>
            <Link href='' className='text-foreground'>
              {post.author.name}
            </Link>
          </p>
          <p className='m-0 text-muted-foreground'>{post.author.role}</p>
        </div>
      </div>
    </article>
  )
}
