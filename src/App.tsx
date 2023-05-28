import { HomeSection } from './components/HomeSection'
import { AboutSection } from './components/AboutSection'
import { TechnologiesSection } from './components/TechnologiesSection'
import { Header } from './components/Header'
import { ProjectsSection } from './components/ProjectsSection'
import { ContactSection } from './components/ContactSection'
import {Wave} from './components/Wave'
import { AboutSectionMobile } from './components/AboutSectionMobile'

const App = () => {

  return (
    <>
    <Header />
    <main>
      <HomeSection />
      <AboutSectionMobile />
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
