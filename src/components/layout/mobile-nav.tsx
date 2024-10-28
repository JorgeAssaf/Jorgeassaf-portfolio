'use client'

import { useState, type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

import { cn } from '@/lib/utils'
import type { MainNavItem } from '@/types/site'

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
        <Link aria-label='Home' href='/' title='Home'>
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
                title='Home'
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
                  aria-label={`Navigate to ${item.title} page`}
                  disabled={item.disabled}
                  href={item.href!}
                  key={item.title}
                  pathname={pathname}
                  title={`Navigate to ${item.title} page`}
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

interface MobileLinkProps extends React.ComponentPropsWithRef<typeof Link> {
  disabled?: boolean
  pathname: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({
  children,
  className,
  disabled,
  href,
  pathname,
  setIsOpen,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-xl font-medium text-foreground transition-colors hover:text-primary/90',
        pathname === href && 'text-primary',
        disabled && 'pointer-events-none opacity-60',
        className,
      )}
      onClick={() => setIsOpen(false)}
      {...props}
    >
      {children}
    </Link>
  )
}
