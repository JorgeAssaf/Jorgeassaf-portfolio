import rehypeShiki from '@shikijs/rehype'
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: {
      type: 'string',
      default: 'Anonymous',
    },
    image: {
      type: 'string',
      required: true,
    },
  },
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    author: { type: 'nested', of: Author, required: true },
    categories: { type: 'list', of: { type: 'string' }, required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `${post._raw.flattenedPath.split('/').pop()}`,
    },
  },
}))

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [
        rehypeShiki as never,
        {
          themes: {
            dark: 'catppuccin-frappe',
            light: 'catppuccin-latte',
          },
          defaultTheme: 'dark',
        },
      ],
    ],
  },
})
