export interface Projects {
  image: string
  technologies: Technology[]
  name: string
  slug: string
  github: string
  url: string
  content: Content[]
  _id: string
  _createdAt: Date
}

export interface Content {
  markDefs: unknown[]
  children: Child[]
  _type: string
  style: string
  _key: string
}

export interface Child {
  _type: string
  marks: unknown[]
  text: string
  _key: string
}

export interface Technology {
  name: string
  image: string
}

export interface Post {
  image: null
  _updatedAt: Date
  _createdAt: Date
  categories: Category[]
  description: string
  body: Body[]
  _id: string
  author: Author
  slug: string
  title: string
}

export interface Body {
  _type: string
  style: string
  _key: string
  markDefs: unknown[]
  children: Child[]
}

export interface Author {
  image?: string
  name: string
}

export interface Child {
  _type: string
  marks: unknown[]
  text: string
  _key: string
}

export interface Category {
  title: string
}

export interface ImageBuilder {
  value: Value
  isInline: boolean
  index: number
}

export interface Value {
  _type: string
  alt: string
  _key: string
  asset: Asset
}

export interface Asset {
  _ref: string
  _type: string
}

export interface PortableTextBuilder {
  children: string[]
  index: number
  isInline: boolean
  node: Node
  value: Value
}

export interface Node {
  _type: string
  style: string
  _key: string
  markDefs: unknown[]
  children: Children[]
}

export interface Children {
  _type: string
  marks: unknown[]
  text: string
  _key: string
}

export interface Value {
  _type: string
  style: string
  _key: string
  markDefs: unknown[]
  children: Children2[]
}

export interface Children2 {
  _type: string
  marks: unknown[]
  text: string
  _key: string
}

export interface LinkBuilder {
  text: string
  value: Value
  markType: string
  markKey: string
  children: string[]
}

export interface Value {
  _key: string
  _type: string
  href: string
}
