import type { ServerRuntime } from 'next'
import { ImageResponse } from 'next/og'

import { cn } from '@/lib/utils'

export const runtime: ServerRuntime = 'edge'

export function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const parsedValues = Object.fromEntries(url.searchParams)

    const { mode, title, description, type } = parsedValues
    return new ImageResponse(
      (
        <div
          // eslint-disable-next-line tailwindcss/enforces-shorthand
          tw='flex h-full w-full flex-col items-center justify-center'
          style={{
            color: mode === 'dark' ? '#fff' : '#000',
            background: mode === 'dark' ? '#09090b' : '#ffffff',
          }}
        >
          <div
            tw='flex max-w-4xl flex-col items-center justify-center'
            style={{
              whiteSpace: 'pre-wrap',
            }}
          >
            {type ? (
              <div tw='px-8 text-xl font-medium uppercase leading-tight tracking-tight'>
                {type}
              </div>
            ) : null}
            <h1
              tw={cn(
                'px-8 text-6xl font-bold leading-tight tracking-tight',
                mode === 'dark' ? 'text-zinc-100' : 'text-zinc-800',
              )}
            >
              {title}
            </h1>
            {description ? (
              <p
                tw={cn(
                  'px-20 text-center text-3xl font-normal leading-tight tracking-tight',
                  mode === 'dark' ? 'text-zinc-400' : 'text-zinc-500',
                )}
              >
                {description}
              </p>
            ) : null}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
    }

    return new Response('Failed to generate image', { status: 500 })
  }
}
