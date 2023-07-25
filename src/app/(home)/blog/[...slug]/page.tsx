import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/app/types/sanity'
import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanityImage'
import { PortableText } from '@portabletext/react'
import { formatDate } from '@/lib/utils'

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0] { 
  _id,
  title,
  _updatedAt,
  _createdAt,
  categories[]->{
    title,
  },
  author->{
    name,
    "image": image.asset->url,
  },
  body,
}`

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
  return (
    <div className=' max-w-[75ch] mx-auto '>
      <Badge className='mb-10 hover:bg-primary hover:text-primary-foreground'>
        <Link
          href='/blog'
          className='flex text-[10px]  md:text-sm justify-start gap-x-1 md:gap-3 flex-wrap items-center '
        >
          <Icons.chevronLeft size='20' />
          Blog
          <Icons.chevronLeft size='20' />
          {post.categories.map((category, i) => (
            <span className=' ' key={category.title}>
              {category.title}
              {i < post.categories.length - 1 && ' / '}
            </span>
          ))}
        </Link>
      </Badge>
      <section className='border-b pb-2'>
        <h2 className='scroll-m-20 text-[2.1rem] font-semibold tracking-tight leading-[1.1] transition-colors first:mt-0'>
          {post.title}
        </h2>

        <div className='flex items-center gap-10 mt-4 mb-4'>
          <div className='flex items-center gap-5'>
            <span className='text-sm'>{post.author.name}</span>
          </div>
          <span className='text-sm text-muted-foreground'>
            {formatDate(post._createdAt)}
          </span>
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
