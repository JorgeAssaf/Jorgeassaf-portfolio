import type { Metadata } from 'next'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { CategoryQuery, PostQuery } from '@/utils/querys'

import { client } from '@/lib/sanity'
import { slugify } from '@/lib/utils'
import CategoryButtons from '@/components/category-buttons'
import { FramerH2, FramerSection } from '@/components/framer'
import { Header } from '@/components/header'
import PostCard from '@/components/post-card'
import type { Category, Post } from '@/app/types/sanity'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Here my last posts about web development, mobile development, ui/ux design, devops etc ',
}

const getPostsByCategory = async (category: string) => {
  const posts = (await client.fetch<Post[]>(PostQuery)) ?? []
  if (!category) return posts

  return posts.filter((post: Post) =>
    post.categories.some((c: Category) => slugify(c.title) === category),
  )
}

const BlogPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const blogCategories = (await client.fetch<Category[]>(CategoryQuery)) ?? []
  const [posts, categories] = await Promise.all([
    getPostsByCategory(searchParams.category?.toString() ?? ''),
    client.fetch<Category[]>(CategoryQuery),
  ])

  return (
    <>
      <Header
        title='Blog'
        page
        description='Here my last posts about web development, mobile development, ui/ux design and devops'
      />

      <div className='flex grid-cols-[0.5fr,3fr] flex-col gap-10 md:grid'>
        <div>
          <CategoryButtons categories={categories} />
        </div>
        <FramerSection
          initial='hidden'
          animate='show'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className='flex flex-col gap-5'
        >
          <FramerH2
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className='text-2xl font-bold'
          >
            {blogCategories.find(
              (category: Category) =>
                slugify(category.title) === searchParams.category,
            )?.title ?? 'All posts'}
          </FramerH2>

          <PostCard posts={posts} />
        </FramerSection>
      </div>
    </>
  )
}
export default BlogPage
