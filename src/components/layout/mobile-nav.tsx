'use client'

import { useState, type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import type { MainNavItem } from '@/app/types/site'

import { Menu } from '../icons'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'
import { ThemeToggle } from './theme-toggle'

interface MobileNavProps {
  items: MainNavItem[]
}

const MobileNav: FC<MobileNavProps> = ({ items }) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex h-20 items-center justify-between md:hidden'>
      <div className='flex text-left md:flex'>
        <Link aria-label='Home' href='/'>
          <p className='text-2xl font-bold md:flex'>
            JA<span className='text-primary'>.</span>
          </p>
        </Link>
      </div>
      <ThemeToggle />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            className='px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden'
          >
            <Menu size='26' />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right' className='px-5'>
          <SheetHeader>
            <div className='my-5'>
              <Link
                aria-label='Home'
                href='/'
                className='flex items-center'
                onClick={() => setIsOpen(false)}
              >
                <p className='text-3xl font-bold md:inline-block'>
                  JA<span className='text-primary'>.</span>
                </p>
              </Link>
            </div>
          </SheetHeader>
          <SheetDescription asChild className='flex flex-col gap-2'>
            <div>
              {items.map((item) => (
                <MobileLink
                  key={item.title}
                  href={`${item.href}`}
                  pathname={pathname}
                  disabled={item.disabled}
                  setIsOpen={setIsOpen}
                >
                  {item.title}
                </MobileLink>
              ))}
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav

interface MobileLinkProps {
  children?: React.ReactNode
  href: string
  disabled?: boolean
  pathname: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({
  children,
  href,
  disabled,
  pathname,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-xl font-medium text-foreground transition-colors hover:text-primary/90',
        pathname === href && 'text-primary',
        disabled && 'pointer-events-none opacity-60',
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}
