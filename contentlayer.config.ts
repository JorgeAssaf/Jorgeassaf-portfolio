import { slugify } from '@/lib/utils'
import rehypeShiki from '@shikijs/rehype'
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkToc from 'remark-toc'

const AuthorLinks = defineNestedType(() => ({
  name: 'AuthorLinks',
  fields: {
    name: {
      type: 'string',
      required: true,
    },
    url: {
      type: 'string',
      required: true,
    },
  },
}))

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: {
      type: 'string',
      default: 'Anonymous',
    },
    username: {
      type: 'string',
    },
    links: {
      type: 'list',
      of: AuthorLinks,
      required: true,
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
    description: { type: 'string', required: true },
    originalUrl: { type: 'string' },
    mainImage: { type: 'string', default: '/images/placeholder.svg' },
    date: { type: 'date', required: true, default: new Date().toString() },
    author: { type: 'nested', of: Author, required: true },
    categories: {
      type: 'list',
      of: { type: 'string' },
      required: true,
      typeField: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `${slugify(post._raw.flattenedPath).split('/').pop()}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
    toc: {
      type: 'json',
      resolve: (doc) => {
        const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g

        const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(
          ({ groups }) => {
            const flag = groups?.flag
            const content = groups?.content

            return {
              level:
                flag?.length == 1
                  ? 'one'
                  : flag?.length == 2
                    ? 'two'
                    : flag?.length == 3
                      ? 'three'
                      : 'four',
              text: content,
              slug: content ? content : undefined,
            }
          },
        )

        return headings
      },
    },
  },
}))

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      [
        rehypeShiki as never,
        {
          themes: {
            dark: 'catppuccin-frappe',
            light: 'catppuccin-latte',
          },

          grid: false,
          defaultTheme: 'dark',
        },
      ],
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            ariaHidden: true,
            tabIndex: -1,
          },
        },
      ],
    ],
  },
})
