import { FramerWrapper } from '@/components/framer'
import SiteFooter from '@/components/layout/site-footer'
import SiteHeader from '@/components/layout/site-header'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main className='container flex-1'>
        <FramerWrapper>{children}</FramerWrapper>
      </main>
      <SiteFooter />
    </>
  )
}
