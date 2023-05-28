import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { GoDown } from '../GoDown'
import { useTranslation } from 'react-i18next'

export const HomeSection = () => {

  const {t} = useTranslation()

  return (
    <section className='h-screen flex flex-col justify-center ' id='home' >
      <div className="flex flex-col gap-4 ">
        <h2 className='flex text-xl lg:text-2xl gap-2 justify-center font-semibold'>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 100, y: 0 }} transition={{ ease: "linear", duration: 1 }}>{t('homeSection.hello')}</motion.span>
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 100, y: 0 }} transition={{ delay: 1.2, ease: "linear", duration: 1 }}>{t("homeSection.greetings")}</motion.span>
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