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
  _updatedAt,
  _createdAt
}`

export const PostQuery = groq`*[_type == "post"]{
  _id,
  title,
  "image": image.asset->url,
  _updatedAt,
  _createdAt,
  categories[]->{
    title,
  },
  body,
}`
