import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { ArrowDown, MouseSimple } from 'phosphor-react'
import { TitleSection } from './components/TitleSection'
import { AboutSection } from './components/AboutSection'
import { TechnologiesSection } from './components/TechnologiesSection'

const App = () => {

  return (
    <main>
      <TitleSection />
      <AboutSection />
      <TechnologiesSection />
    </main>
  )
}

export default App
