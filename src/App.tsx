import { HomeSection } from './components/HomeSection'
import { AboutSection } from './components/AboutSection'
import { TechnologiesSection } from './components/TechnologiesSection'
import { Header } from './components/Header'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import {Wave} from './components/Wave'

const App = () => {

  return (
    <>
    <Header />
    <main>
      <HomeSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
      <Wave />
    </main>

    </>
  )
}

export default App
