import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "@/sanity/schemas"


const config = defineConfig({
  projectId: "nk66owk3",
  dataset: "portfolio",
  title: "Jorge Assaf",
  apiVersion: "2023-03-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config