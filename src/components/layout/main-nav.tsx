'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import type { MainNavItem } from '@/types/site'

import { ThemeToggle } from './theme-toggle'

interface MainNavProps {
  items?: MainNavItem[]
}
const MainNav: FC<MainNavProps> = ({ items }) => {
  const pathname = usePathname()
  return (
    <>
      <div className='hidden h-20 items-center justify-between md:flex'>
        <Link
          aria-label='Home'
          title='Home'
          href='/'
          className='hidden items-center space-x-2 md:flex'
        >
          <p className='hidden text-2xl font-bold md:inline-block'>
            JA<span className='text-primary'>.</span>
          </p>
        </Link>

        <div className='flex items-center gap-6'>
          {items?.map((item) => (
            <MenuLink
              aria-label={`Navigate to ${item.title} page`}
              className='text-lg font-medium'
              disabled={item.disabled}
              href={item.href!}
              key={item.title}
              pathname={pathname}
              title={item.title}
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
interface MenuLinkProps extends React.ComponentPropsWithRef<typeof Link> {
  disabled?: boolean
  pathname: string
}

function MenuLink({
  children,
  className,
  disabled,
  href,
  pathname,
  ...props
}: MenuLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'relative text-foreground transition-colors hover:text-primary/90',
        pathname === href && 'text-primary',
        disabled && 'pointer-events-none opacity-60',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
