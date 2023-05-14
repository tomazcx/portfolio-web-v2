import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { ArrowDown, MouseSimple } from 'phosphor-react'
import { TitleSection } from './components/TitleSection'
import { AboutSection } from './components/AboutSection'

const App = () => {

  return (
    <main>
      <TitleSection />
      <AboutSection />
    </main>
  )
}

export default App
