import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  PortableText,
  type PortableTextReactComponents,
} from '@portabletext/react'

import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanityImage'
import { formatDate, slugify } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft } from '@/components/icons'
import type { ImageBuilder, Post } from '@/app/types/sanity'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = await getPost(params.slug)

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'),
    title: `Blog - ${slug.title}`,
    openGraph: {
      description: slug.description,
      title: `Blog - ${slug.title}`,
    },
  }
}
async function getPost(slug: string) {
  const query = `* [_type == "post" && slug.current == "${slug}"][0] {
    _id,
      title,
      _updatedAt,
      _createdAt,
      categories[] -> {
        title,
      },
      author -> {
        name,
        "image": image.asset -> url,
      },
      body,
} `

  const post = await client.fetch<Post>(query)

  return post
}

const PortableTextComponent: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: ImageBuilder) => {
      return (
        <Image
          src={urlFor(value).url()}
          alt={value.alt}
          className='rounded-lg'
          width={800}
          height={800}
        />
      )
    },
  },
  // block: {
  //   h4: ({ children }) => {
  //     console.log(children)
  //     return <h4 className='text-xl font-semibold'>{children}</h4>
  //   },
  //   blockquote: ({ children }) => (
  //     <blockquote className='border-l-purple-500'>{children}</blockquote>
  //   ),

  //   h2: ({ children }) => <h2 className='text-lg text-red-500'>{children}</h2>,
  // },
  // marks: {
  //   link: ({
  //     value,
  //     children,
  //   }: {
  //     value?: PortableTextLink
  //     children: ReactNode
  //   }) => {
  //     const target = (value?.href || '').startsWith('http')
  //       ? '_blank'
  //       : undefined
  //     console.log()
  //     return (
  //       <Link
  //         href={value?.href ?? ''}
  //         target={target}
  //         rel={target ? 'noopener noreferrer' : undefined}
  //         className={cn(buttonVariants(), 'no-underline')}
  //       >
  //         {children}
  //       </Link>
  //     )
  //   },
  // },
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug)
  if (!post) {
    return notFound()
  }
  return (
    <div className=' mx-auto max-w-[75ch] '>
      <Badge className='mb-10 hover:bg-primary hover:text-primary-foreground'>
        <Link
          href={{
            pathname: '/blog',
            query: { category: slugify(post.categories[0].title) },
          }}
          className='flex flex-wrap items-center justify-start gap-x-1 text-[10px] md:gap-3 md:text-sm '
        >
          <ChevronLeft size='20' />
          Blog
          <ChevronLeft size='20' />
          {post.categories.map((category, i) => (
            <span key={category.title}>
              {category.title}
              {i < post.categories.length - 1 && ' / '}
            </span>
          ))}
        </Link>
      </Badge>
      <section className='border-b pb-2'>
        <span className='text-sm text-muted-foreground'>
          Published on {formatDate(post._createdAt)}
        </span>
        <h2 className='mt-3 scroll-m-20 text-[2.1rem] font-semibold leading-[1.1] tracking-tight transition-colors first:mt-0'>
          {post.title}
        </h2>

        <div className='my-4 flex items-center gap-10'>
          <div className='mt-1 flex items-center gap-3'>
            {post.author.image && (
              <Image
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
      </section>

      <article className='divide-y divide-gray-200 pb-7 xl:divide-y-0 dark:divide-gray-700  '>
        <div className='divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700'>
          <div className='prose prose-lg dark:prose-invert max-w-none pb-8 pt-10'>
            <PortableText
              value={post.body}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </article>
    </div>
  )
}
export default PostPage
