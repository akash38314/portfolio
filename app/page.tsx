import { client } from './lib/sanity'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import College from './components/College'
import Contact from './components/Contact'
import Footer from './components/Footer'

async function getData() {
  try {
    const [personalInfo, projects, skills] = await Promise.all([
      client.fetch(`*[_type == "personalInfo"][0]`),
      client.fetch(`*[_type == "project"] | order(featured desc, _createdAt desc)`),
      client.fetch(`*[_type == "skill"] | order(category asc)`)
    ])
    return { personalInfo, projects, skills }
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return { personalInfo: null, projects: [], skills: [] }
  }
}

export default async function Home() {
  const { personalInfo, projects, skills } = await getData()
  
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero personalInfo={personalInfo} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <About />
      <College />
      <Contact />
      <Footer />
    </main>
  )
}