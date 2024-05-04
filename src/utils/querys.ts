import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == "projects"]{
    _id,
    name,
    "image":{
      "url": image.asset->url,
      "alt": image.alt,
    },
    repo,
    link,
    category,
    technologies[]->{
      name,
      "image": image.asset->url,
      color,
    },
    description,
  }`

