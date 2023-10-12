import { createClient, type SanityClient } from 'next-sanity'

const projectId = '88pyznww'
const dataset = 'production'
const apiVersion = '2021-03-25'

export const client: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
