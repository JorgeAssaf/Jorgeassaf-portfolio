'use client'
import { FC, useState } from 'react'
import { usePathname } from 'next/navigation'
import { MainNavItem } from '@/app/types/site'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { Button } from '../ui/button'
import { Icons } from '../icons'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  items: MainNavItem[]
}

const MobileNav: FC<MobileNavProps> = ({ items }) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='h-20 items-center flex md:hidden   justify-between'>
      <div className='flex items-center space-x-2 md:flex'>
        <p className='text-2xl font-bold md:inline-block'>
          JA<span className='text-blue-500'>.</span>
        </p>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant='ghost' size='icon' className='md:hidden flex '>
            <Icons.menu className='h-6 w-6' aria-hidden='true' />
          </Button>
        </SheetTrigger>
        <SheetContent className='w-[300px]' side='left'>
          <SheetHeader>
            <SheetTitle>
              <p className=" text-2xl font-bold">
                JA<span className="text-blue-500">.</span>
              </p>
            </SheetTitle>
            {items?.map((item) => (
              <SheetDescription key={item.label}>

                <MobileLink
                  href={`${item.href}`}
                  pathname={pathname}
                  setIsOpen={setIsOpen}
                >
                  {item.title}
                </MobileLink>

              </SheetDescription>
            ))}
          </SheetHeader>
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
        "text-foreground/70 text-lg transition-colors hover:text-blue-500",
        pathname === href && "text-blue-500",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )
}