'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun
        className='size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90'
        aria-hidden='true'
      />
      <Moon
        className='absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0'
        aria-hidden='true'
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
