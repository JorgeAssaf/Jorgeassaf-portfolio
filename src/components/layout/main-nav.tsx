'use client'
import { MainNavItem } from '@/app/types/site'
import { FC, forwardRef } from 'react'
import { Icons } from '../icons'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
interface MainNavProps {
  items?: MainNavItem[]
}
const MainNav: FC<MainNavProps> = ({ items }) => {
  const pathname = usePathname()
  return (
    <>
      <div className='hidden h-20 items-center md:flex justify-between'>
        <Link
          aria-label='Home'
          href='/'
          className='hidden items-center space-x-2 md:flex'
        >
          <p className='hidden text-2xl font-bold md:inline-block'>
            JA<span className='text-primary'>.</span>
          </p>
        </Link>

        <div className='flex gap-6 items-center'>
          {items?.map((item) => (
            <MenuLink
              pathname={pathname}
              key={item.title}
              href={item.href!}
              className='text-lg font-medium'
            >
              {item.title}
            </MenuLink>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}

export default MainNav
interface MenuLinkProps {
  children?: React.ReactNode
  href: string
  disabled?: boolean
  pathname: string
  className?: string
}

function MenuLink({
  children,
  href,
  disabled,
  pathname,
  className,
}: MenuLinkProps) {
  return (
    <Link
      href={`${href}`}
      className={cn(
        "text-foreground transition-colors hover:text-primary-hover",
        pathname === href && "text-primary-hover",
        disabled && "pointer-events-none opacity-60",
        className
      )}

    >
      {children}
    </Link>
  )
}