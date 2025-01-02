import { Skeleton } from '@/components/ui/skeleton'

export default function PostLoading() {
  return (
    <section className='mx-auto'>
      <div className='grid grid-cols-1 justify-center gap-8 md:grid-cols-3'>
        <div className='col-span-1 max-w-[80ch] md:col-span-2'>
          <Skeleton className='h-6 w-1/3' />

          <article>
            <div className='relative my-3 aspect-video'>
              <Skeleton className='absolute inset-0' />
            </div>
            <Skeleton className='h-10 w-32' />
            {/* <h1 className='mt-3 scroll-m-20 text-4xl font-bold leading-tight tracking-tight transition-colors first:mt-0'>
              {post.title}
            </h1> */}
            <div className='my-4 flex items-center justify-between gap-10'>
              <div className='mt-1 flex items-center gap-3'>
                <Skeleton className='size-10 rounded-full' />

                <div className='flex flex-col gap-2'>
                  <Skeleton className='h-4 w-20' />
                  <Skeleton className='h-4 w-24' />
                </div>
              </div>
              <div className='flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground md:flex-row'>
                <Skeleton className='h-4 w-20' />
                <Skeleton className='h-4 w-20' />

                <div>
                  <Skeleton className='h-4 w-20' />
                </div>
              </div>
            </div>
            <div className='flex gap-2 py-3'>
              <Skeleton className='h-6 w-20' />
              <Skeleton className='h-6 w-20' />
            </div>
          </article>

          <div className='flex flex-col gap-2 py-3'>
            <Skeleton className='h-6 w-full' />
            <Skeleton className='h-6 w-full' />
            <Skeleton className='h-6 w-11/12' />
          </div>

          <div className='mt-7 flex items-center justify-between'>
            <Skeleton className='h-10 w-20' />
            <Skeleton className='h-10 w-20' />
          </div>
        </div>
        <div className='sticky top-32 mx-auto my-10 h-fit max-w-[200px]'>
          <h3 className='text-lg font-semibold'>Table of Contents</h3>
          <ul className='mt-4 text-base'>
            <Skeleton className='size-20' />
          </ul>
        </div>
      </div>
    </section>
  )
}
