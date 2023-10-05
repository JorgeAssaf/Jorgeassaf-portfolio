import type { Post } from '@/app/types/sanity'
import { ChevronLeft } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanityImage'
import { formatDate, slugify } from '@/lib/utils'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = await getPost(params.slug)

  return {
    title: `Blog - ${slug.title}`,
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
const PortableTextComponent = {
  types: {
    image: ({ value }: { value: any }) => (
      <Image
        src={urlFor(value).url()}
        alt='Image'
        className='rounded-lg'
        width={800}
        height={800}
      />
    ),
  },
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug)
  if (!post) {
    return notFound()
  }
  return (
    <div className=' max-w-[75ch] mx-auto '>
      <Badge className='mb-10 hover:bg-primary hover:text-primary-foreground'>
        <Link
          href={{
            pathname: '/blog',
            query: { category: slugify(post.categories[0].title) },
          }}
          className='flex text-[10px] md:text-sm justify-start gap-x-1 md:gap-3 flex-wrap items-center '
        >
          <ChevronLeft size='20' />
          Blog
          <ChevronLeft size='20' />
          {post.categories.map((category, i) => (
            <span className=' ' key={category.title}>
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
        <h2 className='scroll-m-20 text-[2.1rem] mt-3 font-semibold tracking-tight leading-[1.1] transition-colors first:mt-0'>
          {post.title}
        </h2>

        <div className='flex items-center gap-10 mt-4 mb-4'>
          <div className='flex items-center gap-3 mt-1'>
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

      <article className='divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0  '>
        <div className='divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0'>
          <div className='prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg'>
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
