'use client'
import { FC, useTransition } from 'react'
import { Badge } from './ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Post } from '@/app/types/sanity'
import { cn } from '@/lib/utils'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
interface PostCardProps {
  posts: Post[]
}
const PostCard: FC<PostCardProps> = ({ posts }) => {
  return (
    <div className='grid md:grid-cols-2 gap-10 grid-cols-1'>
      {posts.length > 0 ? (
        posts.map((post: Post) => (
          <Card key={post._id}>
            <CardHeader>
              <Link
                href={`/blog/${post.slug}`}

              >
                <CardTitle className='text-2xl my-2 font-bold line-clamp-2'> {post.title}</CardTitle>
              </Link>
              <div className='md:mt-2 mt-0'>


                <div className='flex gap-4 flex-wrap'>
                  <span>{new Date(post._createdAt).getMonth()} months ago</span>
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
              <div className='line-clamp-2'>
                <PortableText value={post.body} />
              </div>
            </CardHeader>
            <CardContent>
              {post.author.name}
            </CardContent>
          </Card>
        ))
      ) : (
        <h2>No posts found</h2>
      )}
    </div>
  )
}
export default PostCard
