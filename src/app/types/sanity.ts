export interface Projects {
  image: {
    url: string
    alt: string
  },
  category: string
  technologies: Technology[]
  name: string
  repo: string
  link: string
  description: string
  _id: string
  _createdAt: Date
}

export interface Technology {
  name: string
  image: string
  color: string
}
