import ImageUrlBuilder from '@sanity/image-url'
import { type SanityImageSource } from '@sanity/image-url/lib/types/types'

import { client } from './sanity'

const builder = ImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
