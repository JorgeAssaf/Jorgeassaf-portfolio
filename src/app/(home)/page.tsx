import Hero from "@/components/hero"
import Projects from "@/components/projects"

export const dynamic = 'force-dynamic'

export default function Home() {

  return (
    <main>
      <Hero />
      <Projects />
    </main>
  )
}
