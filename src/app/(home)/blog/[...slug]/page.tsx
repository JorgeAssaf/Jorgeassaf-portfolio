import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Formaters } from '@/helpers/formaters'
import { allPosts } from 'content-collections'
import {
  ChevronLeft,
  ChevronLeftIcon,
  ChevronRightIcon,
  Link2Icon,
  TagIcon,
} from 'lucide-react'

import { cn, slugify } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { MdxComponent } from '@/components/mdx/mdx-component'
import { getPager } from '@/components/mdx/mdx-pager'

import '@/styles/mdx.css'

import Image from 'next/image'

import icons from '@/components/icons'
import { Toc } from '@/components/toc'

interface PostPageProps {
  params: Promise<{ slug: string[] }>
}

export type TocItem = {
  level: string
  text: string
  slug: string
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug.split('/'),
  }))
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = (await params).slug.join('/')

  const post = allPosts.find((post) => post.slugAsParams === slugify(slug))
  if (!post) {
    return notFound()
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)
  if (!post) {
    return {
      metadataBase: new URL(
        process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
      ),
      title: 'Post not found',
    }
  }
  const url = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('title', post.title)
  ogUrl.searchParams.set('type', 'Blog Post')
  ogUrl.searchParams.set('mode', 'dark')

  return {
    metadataBase: new URL(url),
    title: post.title,
    authors: {
      name: post.author.name,
    },
    openGraph: {
      title: post.title,
      type: 'article',
      url: url + post.slug,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      images: [ogUrl.toString()],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params)
  if (!post) notFound()
  const pager = getPager(post, allPosts)
  return (
    <section className='mx-auto'>
      <div className='grid grid-cols-1 justify-center gap-8 md:grid-cols-3'>
        <div className='col-span-1 max-w-[75ch] md:col-span-2'>
          <nav aria-label='Breadcrumb' className='mb-10'>
            <Badge className='hover:bg-primary hover:text-primary-foreground'>
              <Link
                aria-label='Visit blog category'
                title='Visit blog category'
                href={{
                  pathname: '/blog',
                  query: {
                    category: slugify(post.categories[0]),
                  },
                }}
                className='flex flex-wrap items-center justify-start gap-1.5 text-[0.625rem] md:text-sm'
              >
                <ChevronLeft size='20' aria-hidden='true' />
                Blog
                <ChevronLeft size='20' aria-hidden='true' />
                {post.categories.map((category, i) => (
                  <span key={category}>
                    {category}
                    {i < post.categories.length - 1 && ' / '}
                  </span>
                ))}
              </Link>
            </Badge>
          </nav>

          <article className='border-b pb-2'>
            <header>
              <div className='relative my-3 aspect-video'>
                <Image
                  src={post.mainImage}
                  alt={`${post.title} image`}
                  fill
                  decoding='async'
                  loading='eager'
                  priority
                  quality={100}
                  sizes='min(100vw, 1000px)'
                  className='rounded-lg'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent' />
                <div className='absolute inset-x-0 bottom-0 px-6 py-8'>
                  <h1 className='mt-3 max-w-xl scroll-m-20 text-3xl font-bold leading-tight tracking-tight first:mt-0 md:text-5xl'>
                    {post.title}
                  </h1>
                </div>
              </div>
              <time
                className='text-sm text-muted-foreground'
                dateTime={post.date}
              >
                Published on {Formaters.formatDate(post.date)}
              </time>
            </header>
            <div className='my-4 flex items-center justify-between gap-10'>
              <div className='mt-1 flex items-center gap-3'>
                {post.author.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.author.image}
                    decoding='async'
                    alt={post.author.name}
                    className='rounded-full'
                    width={42}
                    height={42}
                  />
                )}
                <div className='flex flex-col'>
                  <p className='leading-7'>{post.author.name}</p>
                  {post.author.username && (
                    <span className='text-xs text-muted-foreground'>
                      @{post.author.username}
                    </span>
                  )}
                </div>
              </div>
              <div className='flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground md:flex-row'>
                {post.author.links.map((link) => {
                  const LucideIcon = icons[link.name as keyof typeof icons]
                  return (
                    <Link
                      key={link.url}
                      href={link.url}
                      title={`Visit ${link.name} author profile`}
                      aria-label={`Visit ${link.name} author profile`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={cn(
                        buttonVariants({ variant: 'ghost', size: 'icon' }),
                      )}
                    >
                      <LucideIcon
                        className='size-4 fill-foreground text-foreground'
                        aria-hidden='true'
                      />
                      <span className='sr-only'>{link.name}</span>
                    </Link>
                  )
                })}
                {post.originalUrl && (
                  <Link
                    href={post.originalUrl}
                    title='View original post'
                    aria-label='View original post'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'icon' }),
                    )}
                  >
                    <Link2Icon
                      className='size-4 text-foreground'
                      aria-hidden='true'
                    />
                  </Link>
                )}
              </div>
            </div>
            <div className='flex gap-2 py-3'>
              {post.categories.map((category) => (
                <Badge key={category} className='flex items-center text-xs'>
                  <TagIcon className='mr-2 size-4' aria-hidden='true' />
                  {category}
                </Badge>
              ))}
            </div>
          </article>

          <div className='pb-8 pt-10'>
            <MdxComponent post={post} />
          </div>

          <nav
            className='mt-7 flex items-center justify-between'
            aria-label='Pagination'
          >
            {pager?.previousPost ? (
              <Link
                aria-label='Previous post'
                title='Previous post'
                href={pager.previousPost.slug}
                className={cn(buttonVariants({ variant: 'ghost' }))}
              >
                <ChevronLeftIcon className='mr-2 size-4' aria-hidden='true' />
                {pager.previousPost.title.trim().length > 30
                  ? `${pager.previousPost.title.slice(0, 30)}...`
                  : pager.previousPost.title}
              </Link>
            ) : null}
            {pager?.nextPost ? (
              <Link
                aria-label='Next post'
                title='Next post'
                href={pager.nextPost.slug}
                className={cn(buttonVariants({ variant: 'ghost' }), 'ml-auto')}
              >
                {pager.nextPost.title.trim().length > 30
                  ? `${pager.nextPost.title.slice(0, 30)}...`
                  : pager.nextPost.title}
                <ChevronRightIcon className='ml-2 size-4' aria-hidden='true' />
              </Link>
            ) : null}
          </nav>
        </div>
        <aside className='sticky top-32 hidden h-fit w-full max-w-sm grow overflow-auto lg:grid'>
          <Toc toc={post.toc as TocItem[]} />
        </aside>
      </div>
    </section>
  )
}
