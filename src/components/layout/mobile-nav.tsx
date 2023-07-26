'use client'
import { type FC, useState } from 'react'
import { usePathname } from 'next/navigation'
import { MainNavItem } from '@/app/types/site'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '../ui/sheet'
import { Button } from '../ui/button'
import { Icons } from '../icons'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'

interface MobileNavProps {
  items: MainNavItem[]
}

const MobileNav: FC<MobileNavProps> = ({ items }) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='h-20 items-center flex md:hidden justify-between'>
      <div className='flex text-left md:flex'>
        <Link
          aria-label='Home'
          href='/'
        >
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
            <Icons.menu size='26' />
            <span className='sr-only'>Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='pl-1px-7 pr-0'>
          <SheetHeader>
            <div className='my-5'>
              <Link
                aria-label='Home'
                href='/'
                className='flex items-center'
                onClick={() => setIsOpen(false)}
              >
                <p className='text-2xl font-bold md:inline-block'>
                  JA<span className='text-primary'>.</span>
                </p>
              </Link>
            </div>
          </SheetHeader>

          {items?.map((item) => (
            <SheetDescription key={item.title}>
              <MobileLink
                href={`${item.href}`}
                pathname={pathname}
                setIsOpen={setIsOpen}
              >
                {item.title}
              </MobileLink>
            </SheetDescription>
          ))}
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
        'text-foreground text-lg transition-colors hover:text-primary',
        pathname === href && 'text-primary',
        disabled && 'pointer-events-none opacity-60',
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}
