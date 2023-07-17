import { createClient } from 'next-sanity'

const projectId = '88pyznww'
const dataset = 'production'
const apiVersion = '2021-03-25'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
