import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { client } from '@/lib/sanity'
import { CategoryQuery, PostQuery } from '@/utils/querys'
import { PortableText } from '@portabletext/react'



const BlogPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {

  const blogCategories = await client.fetch(CategoryQuery)
  const blog = await client.fetch(PostQuery)
  const [posts, categories] = await Promise.all([blog, blogCategories])
  console.log(searchParams)
  console.log(posts, categories);
  return (
    <>
      <Header
        title='Blog'
        description='Here my last posts about web development, mobile development, ui/ux design and devops'
        className='my-10'
      />
      <div className='md:grid grid-rows-1 grid-flow-col gap-4 flex flex-col '>
        <div className='row-span-1 flex gap-2 md:flex-col flex-row flex-wrap md:justify-start justify-between'>
          {categories.map((category) => (
            <div key={category.title} className='flex '>
              <Button className='' variant='outline' size='sm'>
                {category.title}
              </Button>
            </div>
          ))}
        </div>
        <div className=' flex flex-col max-w-3xl'>
          {
            posts.map((post) => (
              <Card key={post._id}>
                <div className='md:mt-2 mt-0'>
                  <div className=''>
                    <h1 className='text-3xl font-bold'>{post.title}</h1>
                  </div>
                  <div className='flex gap-4'>
                    <span>
                      {new Date(post._createdAt).toLocaleDateString()}
                    </span>
                    <span>
                      {post.categories.map((category) => (
                        <span key={category.title}>{category.title}</span>
                      ))}
                    </span>
                  </div>
                </div>
                <div>
                  <PortableText value={post.body} />
                </div>
              </Card>
            ))
          }


        </div>
      </div>
    </>
  )
}
export default BlogPage
