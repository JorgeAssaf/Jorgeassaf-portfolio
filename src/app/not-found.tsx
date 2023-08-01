import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import SiteFooter from '@/components/layout/site-footer'
import SiteHeader from '@/components/layout/site-header'

export const metadata = {
  title: '404',
  description: 'Sorry, the page you are looking for cannot be found.',
}

const NotFound = () => {
  return (
    <>
      <SiteHeader />
      <section className='  grid place-items-center gap-y-5 my-20 text-center'>
        <h1 className='text-9xl font-bold'>404</h1>
        <h2 className='text-xl '>
          Sorry, the page you are looking for cannot be found.
        </h2>
        <Link
          href='/'
          className={cn(
            'text-2xl font-bold uppercase tracking-widest',
            buttonVariants({
              size: 'lg',
            }),
          )}
        >
          Go back home
        </Link>
      </section>
      <SiteFooter />
    </>
  )
}
export default NotFound
