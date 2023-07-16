import Hero from "@/components/hero"
import dynamic from "next/dynamic"
const Projects = dynamic(() => import("@/components/projects"))

export default function Home() {

  return (
    <main>
      <Hero />
      <Projects />
    </main>
  )
}
