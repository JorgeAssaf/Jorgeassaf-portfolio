import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Formaters } from '@/helpers/formaters'
import { allPosts } from 'contentlayer/generated'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { cn, slugify } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { ChevronLeft } from '@/components/icons'
import { MdxComponent } from '@/components/mdx/mdx-component'
import { getPager } from '@/components/mdx/mdx-pager'

import '@/styles/mdx.css'

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const slug = allPosts.find((post) => post.url === params.slug)
  if (!slug) {
    return {
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
      ),
      title: 'Post not found',
    }
  }

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
    ),
    title: `Post - ${slug.title}`,
    openGraph: {
      description: '',
      title: `Post - ${slug.title}`,
    },
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.url === params.slug)
  if (!post) notFound()

  const pager = getPager(post, allPosts)
  return (
    <section className=' mx-auto max-w-[75ch] '>
      <Badge className='mb-10 hover:bg-primary hover:text-primary-foreground'>
        <Link
          href={{
            pathname: '/blog',
            query: { category: slugify(post.categories[0]) },
          }}
          className='flex flex-wrap items-center justify-start gap-1.5 text-[0.625rem] md:text-sm '
        >
          <ChevronLeft size='20' />
          Blog
          <ChevronLeft size='20' />
          {post.categories.map((category, i) => (
            <span key={category}>
              {category}
              {i < post.categories.length - 1 && ' / '}
            </span>
          ))}
        </Link>
      </Badge>

      <article className='border-b pb-2'>
        <span className='text-sm text-muted-foreground'>
          Published on {Formaters.formatDateTime(post.date)}
        </span>
        <h2 className='mt-3 scroll-m-20 text-[2.1rem] font-semibold leading-[1.1] tracking-tight transition-colors first:mt-0'>
          {post.title}
        </h2>

        <div className='my-4 flex items-center gap-10'>
          <div className='mt-1 flex items-center gap-3'>
            {post.author.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.author.image}
                alt={post.author.name}
                className='rounded-full'
                width={42}
                height={42}
              />
            )}

            <div className='flex flex-col'>
              <p className='leading-7'>{post.author.name}</p>
              <span className='text-xs text-muted-foreground'>
                @{post.author.name.split(' ').join('').toLowerCase()}
              </span>
            </div>
          </div>
        </div>
      </article>

      <div className='pb-8 pt-10'>
        <MdxComponent post={post} />
      </div>

      <div className='mt-10 flex justify-between'>
        {pager.previousPost && (
          <Link
            href={`/blog/${pager.previousPost.url}`}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'text-muted-foreground',
            )}
          >
            <ChevronLeftIcon className='mr-2 size-4' aria-hidden='true' />
            {pager.previousPost.title}
          </Link>
        )}
        {pager.nextPost && (
          <Link
            href={`/blog/${pager.nextPost.url}`}
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'text-muted-foreground',
            )}
          >
            {pager.nextPost.title}
            <ChevronRightIcon className='ml-2 size-4' aria-hidden='true' />
          </Link>
        )}
      </div>
    </section>
  )
}
