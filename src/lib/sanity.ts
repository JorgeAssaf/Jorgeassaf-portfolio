import { createClient, type SanityClient } from 'next-sanity'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const apiVersion = process.env.SANITY_API_VERSION ?? '2021-03-25'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
}) satisfies SanityClient
