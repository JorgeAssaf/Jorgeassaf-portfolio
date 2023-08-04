'use client'
import type { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { cn, formatDate } from '@/lib/utils'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constans'
import type { Post } from '@/app/types/sanity'
import { FileWarningIcon } from 'lucide-react'
interface PostCardProps {
  posts: Post[]
}
const PostCard: FC<PostCardProps> = ({ posts }) => {
  return (
    <motion.div
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
    >
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className='grid md:grid-cols-2 gap-10 grid-cols-1'
      >
        {posts?.length > 0 ? (
          posts?.map((post: Post) => (
            <Card key={post._id}>
              <CardHeader>
                <Link href={`/blog/${post.slug}`}>
                  <CardTitle
                    className={cn('text-2xl my-2 font-bold line-clamp-2')}
                  >
                    <motion.span variants={FADE_DOWN_ANIMATION_VARIANTS}>
                      {post.title}
                    </motion.span>
                  </CardTitle>
                </Link>
                <div className='md:mt-2 mt-0'>
                  <div className='flex gap-4 flex-wrap'>
                    <span>{formatDate(post._createdAt)}</span>
                    <div className='flex gap-3 flex-wrap'>
                      {post.categories.map((category) => (
                        <Badge
                          className={cn(
                            'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground',
                          )}
                          key={category.title}
                        >
                          {category.title}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <p className='leading-7 [&:not(:first-child)]:mt-6'>
                  {post.description}
                </p>
              </CardHeader>
              <CardContent>{post.author.name}</CardContent>
            </Card>
          ))
        ) : (
          <section className='flex flex-col items-center justify-center'>
            <FileWarningIcon className='w-10 h-10 text-primary mt-7 mb-5' />

            <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
              No posts found
            </h2>
            <p className='leading-7 [&:not(:first-child)]:mt-2'>
              Try changing the filters or reloading the page
            </p>
          </section>
        )}
      </motion.div>
    </motion.div>
  )
}
export default PostCard
