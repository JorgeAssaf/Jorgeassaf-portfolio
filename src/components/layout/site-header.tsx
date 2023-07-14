import { siteConfig } from '@/config/site'

import MainNav from './main-nav'
import MobileNav from './mobile-nav'
const SiteHeader = () => {
  return (
    <header className='sticky top-0 z-40 w-full  bg-background'>
      <div className='container py-5 '>
        <MainNav items={siteConfig.mainNav} />
        <MobileNav items={siteConfig.mainNav} />
      </div>
    </header>
  )
}

export default SiteHeader
