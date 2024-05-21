'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Formaters } from '@/helpers/formaters'
import type { Post } from 'contentlayer/generated'

import { Badge } from '../ui/badge'

export const PostCard = ({ post, i }: { post: Post; i: number }) => {
  return (
    <article className='flex max-w-xl flex-col items-start' key={post._id}>
      <Link href={`/blog/${post.slug}`} className='relative w-full'>
        <div className='aspect-video overflow-hidden rounded-md'>
          <Image
            src={post.mainImage}
            className='rounded-md object-cover'
            alt={post.title}
            fill
            sizes='(min-width: 640px) 640px, 100vw'
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

      <div className='relative'>
        <h3 className='m-0 mt-3 text-xl font-semibold leading-6'>
          <Link href={`/blog/${post.slug}`} className='text-foreground'>
            How to use SEO to drive sales
          </Link>
        </h3>
        <p className='m-0 mt-3 line-clamp-2 leading-5'>
          Increase your chances of success with our proven strategies. We
          provide expert advice. Increase your chances of success with our
          proven strategies. We provide expert advice. Increase your chances of
          success with our proven strategies.
        </p>
      </div>

      <div className='relative mt-4 flex items-center gap-3'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.author.image}
          alt='Author face'
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
          <p className='m-0 text-muted-foreground'>Front-end Developer</p>
        </div>
      </div>
    </article>
  )
}
