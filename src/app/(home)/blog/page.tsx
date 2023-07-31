import CategoryButtons from '@/components/category-buttons'
import { Header } from '@/components/header'
import { client } from '@/lib/sanity'
import { slugify } from '@/lib/utils'
import { CategoryQuery, PostQuery } from '@/utils/querys'
import PostCard from '@/components/post-card'
import { FramerH2, FramerSection } from '@/components/framer'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'

import type { Metadata } from 'next'
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
  const blogPost = await getPostsByCategory(searchParams.category as string)
  const [posts, categories] = await Promise.all([blogPost, blogCategories])
  return (
    <>
      <Header
        title='Blog'
        page
        description='Here my last posts about web development, mobile development, ui/ux design and devops'
      />

      <div className='md:grid grid-cols-[0.5fr,3fr] flex flex-col gap-10'>
        <div>
          <CategoryButtons categories={categories} />
        </div>
        <FramerSection
          initial='hidden'
          animate='show'
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

// < div className = 'md:grid grid-rows-1 w-full grid-flow-col gap-5 flex flex-col justify-start ' >
//       <div className='row-span-1 flex gap-2 md:flex-col flex-row flex-wrap md:justify-start  md:pr-5 md:border-p-2 pr-0 border-none'>
//
//       </div>
//       <div className='grid grid-cols-1 gap-5'>
//         <div className='flex flex-col gap-5 max-w-xl'>
//           <h2 className='text-2xl font-bold'>
//             {blogCategories.find(
//               (category: Category) =>
//                 slugify(category.title) === searchParams.category,
//             )?.title ?? 'All posts'}
//           </h2>

//           <PostCard posts={posts} />
//         </div>
//       </div>

//     </ >
