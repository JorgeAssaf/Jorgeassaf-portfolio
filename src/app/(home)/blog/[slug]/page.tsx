import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { cn, formatDate, slugify } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { ChevronLeft } from '@/components/icons'

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

const PostPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.url === params.slug)
  if (!post) notFound()

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const MDXContent = useMDXComponent(post.body.code)
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
          Published on {formatDate(post.date)}
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
        {/* <PortableText
              value={post.body}
              components={PortableTextComponent}
            /> */}
        <MDXContent
          components={{
            Button,
            h1: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLHeadingElement>) => (
              <h1
                className={cn('mt-2 scroll-m-20 text-4xl font-bold', className)}
                {...props}
              />
            ),
            h2: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLHeadingElement>) => (
              <h2
                className={cn(
                  'mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
                  className,
                )}
                {...props}
              />
            ),
            h3: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLHeadingElement>) => (
              <h3
                className={cn(
                  'mt-6 scroll-m-20 text-xl font-semibold tracking-tight',
                  className,
                )}
                {...props}
              />
            ),
            h4: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLHeadingElement>) => (
              <h4
                className={cn(
                  'mt-6 scroll-m-20 text-lg font-semibold tracking-tight',
                  className,
                )}
                {...props}
              />
            ),
            h5: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLHeadingElement>) => (
              <h5
                className={cn(
                  'mt-6 scroll-m-20 text-lg font-semibold tracking-tight',
                  className,
                )}
                {...props}
              />
            ),
            h6: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLHeadingElement>) => (
              <h6
                className={cn(
                  'mt-6 scroll-m-20 text-base font-semibold tracking-tight',
                  className,
                )}
                {...props}
              />
            ),
            a: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLAnchorElement>) => (
              <a
                aria-label='Link'
                className={cn(
                  'font-medium underline underline-offset-4',
                  className,
                )}
                {...props}
              />
            ),
            Link: ({
              className,
              ...props
            }: React.ComponentProps<typeof Link>) => (
              <Link
                className={cn(
                  'font-medium underline underline-offset-4',
                  className,
                )}
                {...props}
              />
            ),
            p: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLParagraphElement>) => (
              <p
                className={cn(
                  'leading-7 [&:not(:first-child)]:mt-6',
                  className,
                )}
                {...props}
              />
            ),

            ul: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLUListElement>) => (
              <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
            ),
            ol: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLOListElement>) => (
              <ol
                className={cn('my-6 ml-6 list-decimal', className)}
                {...props}
              />
            ),
            li: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLElement>) => (
              <li className={cn('mt-2', className)} {...props} />
            ),
            blockquote: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLElement>) => (
              <blockquote
                className={cn('mt-6 border-l-2 pl-6 italic', className)}
                {...props}
              />
            ),
            img: ({
              className,
              alt,
              ...props
            }: React.ImgHTMLAttributes<HTMLImageElement>) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className={cn('rounded-md', className)}
                alt={alt}
                {...props}
              />
            ),
            hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
              <hr className='my-4 md:my-8' {...props} />
            ),
            table: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLTableElement>) => (
              <div className='my-6 w-full overflow-y-auto'>
                <table className={cn('w-full', className)} {...props} />
              </div>
            ),
            tr: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLTableRowElement>) => (
              <tr
                className={cn('m-0 border-t p-0 even:bg-muted', className)}
                {...props}
              />
            ),
            th: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLTableCellElement>) => (
              <th
                className={cn(
                  'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
                  className,
                )}
                {...props}
              />
            ),
            td: ({
              className,
              ...props
            }: React.HTMLAttributes<HTMLTableCellElement>) => (
              <td
                className={cn(
                  'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
                  className,
                )}
                {...props}
              />
            ),
          }}
        />
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
interface MdxPagerItem {
  title: string
  url: string
}

export default PostPage

const getPager = (currentPage: MdxPagerItem, allPosts: MdxPagerItem[]) => {
  const allFlattenedPosts = allPosts.flat()
  const currentIndex = allFlattenedPosts.findIndex(
    (post) => post.url === currentPage.url,
  )
  const nextPost =
    currentIndex !== allFlattenedPosts.length - 1
      ? allFlattenedPosts[currentIndex + 1]
      : null
  const previousPost =
    currentIndex !== 0 ? allFlattenedPosts[currentIndex - 1] : null
  return { nextPost, previousPost }
}
