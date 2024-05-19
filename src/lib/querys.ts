import { groq } from 'next-sanity'

export const getProjectsQuery = groq`*[_type == 'projects' && (defined(category) && category == $category || !defined(category) || $category == '')] {
  _id,
  name,
  "image": {
    "url": image.asset->url,
    "alt": image.alt
  },
  repo,
  link,
  category,
  technologies[]->{
    name,
    "image": image.asset->url,
    color
  },
  description
}`

export const getLatestProjectsQuery = groq`*[_type == 'projects'] | order(_createdAt desc) {
  _id,
  name,
  "image": {
    "url": image.asset->url,
    "alt": image.alt
  },
  repo,
  link,
  category,
  technologies[]->{
    name,
    "image": image.asset->url,
    color
  },
  description
}`
