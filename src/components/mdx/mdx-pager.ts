interface MdxPagerItem {
  title: string
  slug: string
}

export const getPager = (
  currentPage: MdxPagerItem,
  allPosts: MdxPagerItem[],
) => {
  const allFlattenedPosts = allPosts.flat()
  const currentIndex = allFlattenedPosts.findIndex(
    (post) => post.slug === currentPage.slug,
  )
  const nextPost =
    currentIndex !== allFlattenedPosts.length - 1
      ? allFlattenedPosts[currentIndex + 1]
      : null
  const previousPost =
    currentIndex !== 0 ? allFlattenedPosts[currentIndex - 1] : null
  return { nextPost, previousPost }
}
