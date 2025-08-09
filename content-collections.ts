import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import rehypeShiki from '@shikijs/rehype'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkToc from 'remark-toc'

import { siteConfig } from '@/config/site'

const posts = defineCollection({
  name: 'posts',
  directory: 'src/content/posts',
  include: '*.mdx',

  schema: (z) => ({
    title: z
      .string({
        description: 'The title of the post',
      })
      .max(100, {
        message: 'Title is too long',
      })
      .min(10, {
        message: 'Title is too short',
      }),
    summary: z
      .string({
        description: 'A brief summary of the post',
      })
      .min(20, {
        message: 'Summary is too short',
      })
      .max(250, {
        message: 'Summary is too long',
      }),
    originalUrl: z.string().max(125).optional(),
    mainImage: z.string().optional().default('/images/placeholder.svg'),
    date: z.string(),
    author: z.object({
      name: z.string().optional().default('Anonymous'),
      username: z.string().optional(),
      role: z.string(),
      links: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        }),
      ),
      image: z.string().url(),
    }),
    categories: z.array(
      z
        .string({
          description: 'The categories this post belongs to',
        })
        .refine(
          (val) => siteConfig.blogCategories.map((c) => c.title).includes(val),
          {
            message: 'Invalid category',
            path: ['categories'],
          },
        ),
    ),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkToc],
      rehypePlugins: [
        [
          rehypeShiki,
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
    })

    const toc = () => {
      const regulrExp = new RegExp(/(?<flag>#+)\s(?<content>.*)/, 'g')
      const headings = Array.from(document.content.matchAll(regulrExp)).map(
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
    }

    return {
      ...document,
      mdx,
      _id: document._meta.filePath,
      slug: document._meta.filePath.replace(/\.mdx$/, ''),
      slugAsParams: document._meta.filePath
        .replace(/\.mdx$/, '')
        .replace(/\//g, '-'),
      toc: toc(),
    }
  },
})

export default defineConfig({
  collections: [posts],
})
