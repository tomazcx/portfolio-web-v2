import {motion } from 'framer-motion'
import { ArrowDown } from 'phosphor-react'

type GoDown = {
  startOnView?:boolean,
  text?: string
}

export const GoDown:React.FC<GoDown> = ({startOnView = false, text = "Role para baixo"}) => {


  
    return startOnView ? 
     (
        <motion.span initial={{ opacity: 0, y: -5 }} whileInView={{ opacity: 1, y: 0 }} transition={{ type: "linear", duration: 1, delay: 7 }} className='absolute bottom-[5vh] lg:bottom-[15vh] left-1/2 translate-negative-x text-center flex items-center justify-center gap-4'>
          {text}
                <motion.span initial={{ y: 10 }} animate={{ y: 0 }} transition={{ type: "linear", duration: .5, repeatType: 'reverse', repeat: Infinity }} className='text-white'>
            <ArrowDown size={24} />
          </motion.span>
        </motion.span>

    ) :
    (
        <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "linear", duration: 1, delay: 6 }} className='absolute bottom-[15vh] left-1/2 translate-negative-x text-center flex items-center justify-center gap-4'>
          Role para baixo
          <motion.span initial={{ y: 10 }} animate={{ y: 0 }} transition={{ type: "linear", duration: .5, repeatType: 'reverse', repeat: Infinity }} className='text-white'>
            <ArrowDown size={24} />
          </motion.span>
        </motion.span>

    )

}