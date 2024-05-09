import type { Metadata } from 'next'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import { allPosts } from 'contentlayer/generated'
import { FileWarningIcon } from 'lucide-react'

import { siteConfig } from '@/config/site'
import { slugify } from '@/lib/utils'
import { PostCard } from '@/components/cards/post-card'
import CategoryButtons from '@/components/category-buttons'
import { FramerDiv, FramerH2, FramerSection } from '@/components/framer'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Here my last posts about web development, mobile development, ui/ux design, devops etc ',
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <>
      <PageHeader
        title='Blog'
        page
        description='Here my last posts about web development, mobile development, ui/ux design and devops'
      />

      <div className='flex grid-cols-[150px,calc(100%-170px)] flex-col gap-5 md:grid'>
        <CategoryButtons
          categories={siteConfig.blogCategories}
          className='flex flex-row flex-wrap gap-3 md:flex-col'
          withAll
          buttonClassName='text-xs md:text-sm'
          activeCategory='bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90'
        />
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
            {siteConfig.blogCategories.find(
              (category) => slugify(category.title) === searchParams.category,
            )?.title ?? 'All posts'}
          </FramerH2>

          {allPosts.length > 0 ? (
            <FramerDiv
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className='flex snap-x snap-mandatory gap-5 overflow-x-scroll '
            >
              {allPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
              {allPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
              {allPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </FramerDiv>
          ) : (
            <div className='flex flex-col items-center justify-center'>
              <FileWarningIcon className='mb-5 mt-7 size-10 text-primary' />

              <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
                No posts found
              </h2>
              <p className='leading-7 [&:not(:first-child)]:mt-2'>
                Try changing the filters or reloading the page
              </p>
            </div>
          )}
        </FramerSection>
      </div>
    </>
  )
}
