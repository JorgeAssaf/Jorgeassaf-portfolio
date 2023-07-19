import { Header } from "@/components/header"
import Projects from "@/components/projects"
import { client } from "@/lib/sanity"
import { projectsQuery } from "@/utils/querys"

const getProjects = async () => {
  const projects = (await client.fetch<Projects[]>(projectsQuery)) ?? []
  return projects
}

const ProjectsPage = async () => {

  const projects = await getProjects()
  return (
    <section>
      <Header
        title='Projects'
        description='Here you can see my last projects'
      />
      <Projects projects={projects} title='Last Projects' />
    </section>
  )
}

export default ProjectsPage