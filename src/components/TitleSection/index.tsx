import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { GoDown } from '../GoDown'

export const TitleSection = () => {

  return (
    <section className='h-screen ' >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 ">
        <h2 className='flex text-xl lg:text-2xl gap-2 justify-center font-semibold'>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 100, y: 0 }} transition={{ ease: "linear", duration: 1 }}>Olá!</motion.span>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 100, y: 0 }} transition={{ delay: 1.2, ease: "linear", duration: 1 }}> eu sou</motion.span>
        </h2>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ ease: "linear", delay: 2 }} className="text-center text-2xl lg:text-4xl text-blue-default font-bold">
          <Typewriter onInit={(typewriter) => {
            typewriter.pauseFor(2400).start().changeDelay(80).typeString("Tomaz Xavier")
          }} />
        </motion.h1>
      </div>
      <GoDown />
    </section>

  )

}