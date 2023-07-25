import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == "project"]{
    _id,
    name,
     "image": image.asset->url,
    github,
    url,
    technologies[]->{
      name,
      "image": image.asset->url
    },
    content
  }`

export const CategoryQuery = groq`*[_type == "category"]{
  _id,
  title,
}`

export const PostQuery = groq`*[_type == "post"]{
  _id,
  title,
  _createdAt,
  categories[]->{
    title,
  },
  description,
  author->{
    name,
  },
   'slug': slug.current,
}`
