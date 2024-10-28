import type { Metadata } from 'next'
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/constants'
import { allPosts } from 'content-collections'
import { FileWarningIcon } from 'lucide-react'

import { siteConfig } from '@/config/site'
import { slugify } from '@/lib/utils'
import { PaginationButtons } from '@/components/ui/pagination-buttons'
import { PostCard } from '@/components/cards/post-card'
import CategoryButtons from '@/components/category-buttons'
import { FramerDiv } from '@/components/framer'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Here my last resources about web development, mobile development, ui/ux design, devops, blogs etc',
  keywords: [
    'web development',
    'mobile development',
    'ui/ux design',
    'devops',
    'blogs',
    'resources',
  ],
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { category, page: activePage } = await searchParams
  const page = Number.parseInt(activePage as string) || 1
  const postsPerPage = 6
  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage

  return (
    <>
      <PageHeader
        title='Recources for developers'
        page
        description='Here my last resources about web development, mobile development, ui/ux design, devops, blogs etc'
      />

      <FramerDiv
        initial='hidden'
        animate='show'
        viewport={{ once: true }}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className='flex flex-row gap-5 md:flex-col'
      >
        <div className='relative flex flex-col gap-5 md:flex-row'>
          <CategoryButtons
            categories={siteConfig.blogCategories}
            className='top-32 flex flex-row flex-wrap gap-3 md:sticky md:flex-col'
            withAll
            withIcons
            buttonVariant={'ghost'}
            buttonSize={'lg'}
            iconStyle='size-4 md:size-5'
            buttonClassName='text-sm md:text-base '
            activeCategory='bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90'
          />
          <div className='flex w-full flex-col items-center justify-center gap-5 md:grid md:grid-cols-2'>
            {category ? (
              allPosts.filter((post) =>
                post.categories
                  .map((category) => slugify(category))
                  .includes(
                    Array.isArray(category) ? category.join('') : category,
                  ),
              ).length > 0 ? (
                allPosts
                  .slice(startIndex, endIndex)
                  .map((post, i) => (
                    <PostCard key={post._id} post={post} i={i} />
                  ))
              ) : (
                <NotFoundPosts />
              )
            ) : allPosts.length === 0 ? (
              <NotFoundPosts />
            ) : (
              allPosts
                .slice(startIndex, endIndex)
                .map((post, i) => <PostCard key={post._id} post={post} i={i} />)
            )}
          </div>
        </div>
      </FramerDiv>
      <PaginationButtons
        className='mt-10'
        page={page}
        totalPage={Math.ceil(allPosts.length / postsPerPage)}
      />
    </>
  )
}

const NotFoundPosts = () => (
  <div className='col-span-2 flex min-h-[26.25rem] w-full flex-col items-center justify-center'>
    <FileWarningIcon className='mb-5 mt-7 size-12 text-primary' />

    <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
      No posts found 😢
    </h2>
    <p className='leading-7 [&:not(:first-child)]:mt-2'>
      Try changing the filters or reloading the page
    </p>
  </div>
)

// <div className='flex grid-cols-[150px,calc(100%-170px)] flex-col gap-5 md:grid'>
//         <CategoryButtons
//           categories={siteConfig.blogCategories}
//           className='flex flex-row flex-wrap gap-3 md:flex-col'
//           withAll
//           buttonClassName='text-xs md:text-sm'
//           activeCategory='bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground/90'
//         />
//         <FramerSection
//           initial='hidden'
//           animate='show'
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             show: {
//               transition: {
//                 staggerChildren: 0.15,
//               },
//             },
//           }}
//           className='flex flex-col gap-5'
//         >
//           <FramerH2
//             variants={FADE_DOWN_ANIMATION_VARIANTS}
//             className='text-2xl font-bold'
//           >
//             {siteConfig.blogCategories.find(
//               (category) => slugify(category.title) === searchParams.category,
//             )?.title ?? 'All posts'}
//           </FramerH2>

//           {allPosts.length > 0 ? (
//             <FramerDiv
//               variants={FADE_DOWN_ANIMATION_VARIANTS}
//               className='flex snap-x snap-mandatory gap-5 overflow-x-scroll '
//             >
//               {allPosts.map((post) => (
//                 <PostCard key={post._id} post={post} />
//               ))}
//               {allPosts.map((post) => (
//                 <PostCard key={post._id} post={post} />
//               ))}
//               {allPosts.map((post) => (
//                 <PostCard key={post._id} post={post} />
//               ))}
//             </FramerDiv>
//           ) : (
//             <div className='flex flex-col items-center justify-center'>
//               <FileWarningIcon className='mb-5 mt-7 size-10 text-primary' />

//               <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
//                 No posts found
//               </h2>
//               <p className='leading-7 [&:not(:first-child)]:mt-2'>
//                 Try changing the filters or reloading the page
//               </p>
//             </div>
//           )}
//         </FramerSection>
//         </div>

// export default PaginationButtons
// import type { Metadata } from 'next'
// import Link from 'next/link'
// import { notFound } from 'next/navigation'
// import { Formaters } from '@/helpers/formaters'
// import { allPosts } from "content-collections";
// import { ChevronLeft, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

// import { cn, slugify } from '@/lib/utils'
// import { Badge } from '@/components/ui/badge'
// import { buttonVariants } from '@/components/ui/button'
// import { MdxComponent } from '@/components/mdx/mdx-component'
// import { getPager } from '@/components/mdx/mdx-pager'

// import '@/styles/mdx.css'

// import Image from 'next/image'

// import icons, { LinkedIn, Placeholder } from '@/components/icons'

// interface PostPageProps {
//   params: {
//     slug: string[]
//   }
// }

// // eslint-disable-next-line @typescript-eslint/require-await
// export async function generateStaticParams() {
//   return allPosts.map((post) => ({
//     slug: post.slug.split('/'),
//   }))
// }

// function getPostFromParams(params: PostPageProps['params']) {
//   const slug = params.slug.join('/')

//   const post = allPosts.find((post) => post.slugAsParams === slug)
//   if (!post) {
//     return notFound()
//   }

//   return post
// }

// export function generateMetadata({ params }: PostPageProps): Metadata {
//   const post = getPostFromParams(params)
//   if (!post) {
//     return {
//       metadataBase: new URL(
//         process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
//       ),
//       title: 'Post not found',
//     }
//   }
//   const url = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

//   const ogUrl = new URL(`${url}/api/og`)
//   ogUrl.searchParams.set('title', post.title)
//   ogUrl.searchParams.set('type', 'Blog Post')
//   ogUrl.searchParams.set('mode', 'dark')

//   return {
//     metadataBase: new URL(url),
//     title: post.title,
//     authors: {
//       name: post.author.name,
//     },
//     openGraph: {
//       title: post.title,
//       type: 'article',
//       url: url + post.slug,
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: post.title,
//         },
//       ],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,

//       images: [ogUrl.toString()],
//     },
//   }
// }

// export default function PostPage({ params }: PostPageProps) {
//   const post = getPostFromParams(params)
//   if (!post) notFound()
//   const pager = getPager(post, allPosts)
//   return (
//     <section className='flex flex-row-reverse justify-center gap-14 py-10'>
//       <div className='sticky top-32 h-fit max-w-[200px] bg-primary-foreground'>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem totam
//         odit modi rerum, dolor ullam assumenda veniam quaerat aspernatur
//         Praesentium quidem autem harum nemo eligendi mollitia accusantium facere
//         eius sunt accusamus!
//       </div>
//       <div className=' max-w-[75ch]'>
//         <Badge className='mb-10 hover:bg-primary hover:text-primary-foreground'>
//           <Link
//             href={{
//               pathname: '/blog',
//               query: { category: slugify(post.categories[0]) },
//             }}
//             className='flex flex-wrap items-center justify-start gap-1.5 text-[0.625rem] md:text-sm '
//           >
//             <ChevronLeft size='20' />
//             Blog
//             <ChevronLeft size='20' />
//             {post.categories.map((category, i) => (
//               <span key={category}>
//                 {category}
//                 {i < post.categories.length - 1 && ' / '}
//               </span>
//             ))}
//           </Link>
//         </Badge>

//         <article className='border-b pb-2'>
//           <span className='text-sm text-muted-foreground'>
//             Published on {Formaters.formatDate(post.date)}
//           </span>
//           <h1 className='mt-3 scroll-m-20 text-4xl font-bold leading-tight tracking-tight transition-colors first:mt-0 lg:text-5xl'>
//             {post.title}
//           </h1>
//           <div className='my-4 flex items-center justify-between gap-10'>
//             <div className='mt-1 flex items-center gap-3'>
//               {post.author.image && (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={post.author.image}
//                   decoding='async'
//                   alt={post.author.name}
//                   className='rounded-full'
//                   width={40}
//                   height={40}
//                 />
//               )}
//               <div className='flex flex-col'>
//                 <p className='leading-7'>{post.author.name}</p>
//                 <span className='text-xs text-muted-foreground'>
//                   @{post.author.name.split(' ').join('').toLowerCase()}
//                 </span>
//               </div>
//             </div>
//             <div className='flex gap-1.5 text-sm text-muted-foreground'>
//               {post.author.links.map((link) => {
//                 const LucideIcon = icons[link.name as keyof typeof icons]
//                 return (
//                   <Link
//                     key={link.url}
//                     href={link.url}
//                     target='_blank'
//                     rel='noopener noreferrer'
//                     className={cn(
//                       buttonVariants({ variant: 'ghost', size: 'icon' }),
//                     )}
//                   >
//                     <LucideIcon
//                       className='size-4 fill-white'
//                       aria-hidden='true'
//                     />
//                     <span className='sr-only'>{link.name}</span>
//                   </Link>
//                 )
//               })}
//             </div>
//           </div>
//           <div className='relative aspect-video '>
//             {post.mainImage ? (
//               <Image
//                 src={post.mainImage || ''}
//                 alt={`${post.title} image`}
//                 fill
//                 className='rounded-lg object-cover'
//               />
//             ) : (
//               <Image
//                 src='/images/placeholder.svg'
//                 alt='Placeholder'
//                 fill
//                 className='z-10 rounded-lg  object-cover'
//               />
//             )}
//           </div>
//         </article>

//         <div className='pb-8 pt-10'>
//           <MdxComponent post={post} />
//         </div>

//         <div className='mt-7 flex items-center justify-between'>
//           {pager?.previousPost ? (
//             <Link
//               aria-label='Previous post'
//               href={pager.previousPost.slug}
//               className={cn(buttonVariants({ variant: 'ghost' }))}
//             >
//               <ChevronLeftIcon className='mr-2 size-4' aria-hidden='true' />
//               {pager.previousPost.title}
//             </Link>
//           ) : null}
//           {pager?.nextPost ? (
//             <Link
//               aria-label='Next post'
//               href={pager.nextPost.slug}
//               className={cn(buttonVariants({ variant: 'ghost' }), 'ml-auto')}
//             >
//               {pager.nextPost.title}
//               <ChevronRightIcon className='ml-2 size-4' aria-hidden='true' />
//             </Link>
//           ) : null}
//         </div>
//       </div>
//     </section>
//   )
// }
