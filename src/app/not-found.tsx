import SiteFooter from '@/components/layout/site-footer'
import SiteHeader from '@/components/layout/site-header'

export default function NotFoundPage() {
  return (
    <>
      <SiteHeader />
      <div className='container flex-1'>
        <div className='flex h-96 flex-col items-center justify-center space-y-4'>
          <h1 className='text-8xl font-semibold'>
            <span className='text-primary'>4</span>0
            <span className='text-primary'>4</span>
          </h1>
          <p className='text-xl'>Page not found</p>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}
