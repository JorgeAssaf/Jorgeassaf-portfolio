import { ImageResponse } from 'next/server'
import { Satoshi } from '@/lib/fonts'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 36,
  height: 36,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 26,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          borderRadius: '50%',
          fontFamily: `${Satoshi}`,
          justifyContent: 'center',
          color: 'white',
        }}
      >
        A
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,


    },
  )
}
