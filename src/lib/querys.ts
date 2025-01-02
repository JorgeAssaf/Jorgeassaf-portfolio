import { defineQuery } from 'next-sanity'

export const GETPROJECTSQUERY =
  defineQuery(`*[_type == 'projects' && (defined(category) && category == $category || !defined(category) || $category == '')] {
  _id,
  name,
  "image": {
    "url": image.asset->url,
    "alt": image.alt
  },
  createdAt,   
  repo,
  link,
  category,
  technologies[]->{
    name,
    "image": image.asset->url,
    color
  },
  description
}`)

export const getLatestProjectsQuery =
  defineQuery(`*[_type == 'projects'][0..2] | order(_createdAt desc) {
  _id,
  name,
  "image": {
    "url": image.asset->url,
    "alt": image.alt
  },
  createdAt,
  repo,
  link,
  category,
  technologies[]->{
    name,
    "image": image.asset->url,
    color
  },
  description
}`)
