import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function BlogLoading() {
  return (
    <div>
      <div className='mt-10 space-y-3'>
        <Skeleton className='h-14 w-28' />
        <Skeleton className='h-4 w-80' />
      </div>

      <div className='my-10 flex grid-cols-[0.5fr,3fr] flex-col gap-10 md:grid'>
        <div className='flex flex-row flex-wrap gap-5 md:flex-col  '>
          {new Array(6).fill(0).map((_, i) => (
            <Skeleton key={i} className='h-9 w-32' />
          ))}
        </div>
        <div className='flex flex-col gap-5 '>
          <Skeleton className='h-4 w-60' />
          <div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
              {new Array(2).fill(0).map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>
                      <Skeleton className='h-4 w-1/2' />
                    </CardTitle>

                    <Skeleton className='h-4 w-1/4' />
                    <div className='flex flex-wrap gap-3'>
                      {new Array(2).fill(0).map((_, i) => (
                        <Skeleton key={i} className='h-4 w-1/4' />
                      ))}
                    </div>
                    <Skeleton className='h-7 w-full' />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className='h-8 w-full rounded-sm' />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
