import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function BlogLoading() {
  return (
    <div className='mx-auto max-w-[75ch]'>
      <Skeleton className='h-96' />
      <Card className='mt-10'>
        <CardHeader>
          <Skeleton className='h-8 w-32' />
        </CardHeader>
        <CardContent>
          <CardTitle>
            <Skeleton className='h-8 w-64' />
          </CardTitle>
          <div className='mt-4'>
            <Skeleton className='h-8 w-64' />
            <Skeleton className='h-8 w-64' />
            <Skeleton className='h-8 w-64' />
            <Skeleton className='h-8 w-64' />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
