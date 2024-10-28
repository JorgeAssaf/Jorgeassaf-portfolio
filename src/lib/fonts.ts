import { JetBrains_Mono as FontMono } from 'next/font/google'
import localFont from 'next/font/local'

export const fontsans = localFont({
  src: '../fonts/satoshi.ttf',
  preload: true,
  display: 'swap',
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
  variable: '--font-sans',
})

export const fontmono = FontMono({
  weight: ['300', '400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'monospace'],
  preload: true,
  subsets: ['latin'],
})
