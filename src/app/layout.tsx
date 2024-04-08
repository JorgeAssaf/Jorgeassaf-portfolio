import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'

import { siteConfig } from '@/config/site'
import { fontmono, Satoshi } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Analytics } from '@/components/analytics'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: {
    default: siteConfig.name,
    template: `${siteConfig.name} - %s`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'TypeScript',
    'Shadcn',
    'Jorge Assaf',
    'Portfolio',
    'Blog',
    'Web Development',
    'Frontend Development',
    'Fullstack Development',
    'Sanity',
  ],
  authors: [
    {
      name: 'Jorge Assaf',
      url: 'https://github.com/JorgeAssaf',
    },
  ],
  creator: 'Jorge Assaf',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    creator: '@AssafEnrique',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col antialiased',
          fontmono.variable,
          Satoshi.className,
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
