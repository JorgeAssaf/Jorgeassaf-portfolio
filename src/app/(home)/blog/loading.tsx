import { Skeleton } from '@/components/ui/skeleton'

export default function BlogLoading() {
  return (
    <div className='flex flex-col gap-5'>
      <div className='mt-10 space-y-3'>
        <Skeleton className='h-10 w-96' />
        <Skeleton className='h-4 w-80' />
      </div>

      <div className='flex flex-row gap-5 md:flex-col'>
        <div className='relative flex flex-col gap-5 md:flex-row'>
          <div className='flex flex-row flex-wrap gap-5 md:flex-col'>
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className='h-10 w-32' />
            ))}
          </div>
          <div className='flex w-full flex-col items-center justify-center gap-5 md:grid md:grid-cols-2'>
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className='flex w-full max-w-xl flex-col items-start rounded-lg bg-card'
              >
                <Skeleton className='h-72 w-full' />

                <div className='flex w-full flex-col gap-5 p-5'>
                  <div className='flex w-full justify-between'>
                    <Skeleton className='h-5 w-20' />
                    <Skeleton className='h-5 w-36' />
                  </div>
                  <div className='flex flex-col gap-5'>
                    <Skeleton className='h-5 w-64' />
                    <div className='flex flex-col gap-2'>
                      <Skeleton className='h-5 w-full' />
                      <Skeleton className='h-5 w-11/12' />
                    </div>
                    <div className='flex gap-2'>
                      {Array(3)
                        .fill(0)
                        .map((_, i) => (
                          <Skeleton key={i} className='h-5 w-20' />
                        ))}
                    </div>
                    <div className='flex gap-10'>
                      <Skeleton className='h-5 w-32' />
                      <Skeleton className='h-5 w-32' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>{' '}
      </div>
    </div>
  )
}
