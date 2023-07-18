import { Button } from '@/components/ui/button'
import { PortableText } from '@portabletext/react'

const blogCategories = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Web Development',
    value: 'web-development',
  },
  {
    name: 'Mobile Development',
    value: 'mobile-development',
  },
  {
    name: 'UI/UX Design',
    value: 'ui-ux-design',
  },

  {
    name: 'DevOps',
    value: 'devops',
  },
]

const BlogPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  console.log(searchParams)
  return (
    <>
      <div className='md:grid grid-rows-1 grid-flow-col gap-4 flex flex-col '>
        <div className='row-span-1 flex gap-2 md:flex-col flex-row flex-wrap md:justify-start justify-between'>
          {blogCategories.map((category) => (
            <div key={category.value} className='flex '>
              <Button className='' variant='outline' size='sm'>
                {category.name}
              </Button>
            </div>
          ))}
        </div>
        <div className=' flex flex-col max-w-3xl'>
          <div className='md:mt-2 mt-0'>
            <div className=''>
              <h1 className='text-3xl font-bold'>Mobile Development</h1>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatibus quae doloribus quidem fugiat. Quisquam voluptatum,
              voluptate, quibusdam, quia voluptas quod quos voluptatibus quae
              doloribus quidem fugiat. Quisquam voluptatum, voluptate,
              quibusdam,
            </p>
          </div>

          <div className='md:mt-2 mt-0'>
            <h1 className='text-3xl font-bold'>Mobile Development</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatibus quae doloribus quidem fugiat. Quisquam voluptatum,
              voluptate, quibusdam, quia voluptas quod quos voluptatibus quae
              doloribus quidem fugiat. Quisquam voluptatum, voluptate,
              quibusdam,
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default BlogPage
