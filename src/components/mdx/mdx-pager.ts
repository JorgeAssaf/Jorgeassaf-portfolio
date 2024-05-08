interface MdxPagerItem {
  title: string
  url: string
}

export const getPager = (currentPage: MdxPagerItem, allPosts: MdxPagerItem[]) => {
  const allFlattenedPosts = allPosts.flat()
  const currentIndex = allFlattenedPosts.findIndex(
    (post) => post.url === currentPage.url,
  )
  const nextPost =
    currentIndex !== allFlattenedPosts.length - 1
      ? allFlattenedPosts[currentIndex + 1]
      : null
  const previousPost =
    currentIndex !== 0 ? allFlattenedPosts[currentIndex - 1] : null
  return { nextPost, previousPost }
}
