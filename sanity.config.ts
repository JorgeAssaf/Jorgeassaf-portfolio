import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

import { schemaTypes } from '@/schemas'

const projectId = '88pyznww'
const dataset = 'production'
export default defineConfig({
  basePath: '/admin', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`

  projectId,
  dataset,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})