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
