import picture from '../../assets/picture.jpg'
import { motion } from 'framer-motion'
import WavingHand from '../../assets/waving-hand.svg'
import { GoDown } from '../GoDown'
import { Title } from '../Title'

export const AboutSection = () => {

    return (
        <section className="h-screen relative flex flex-col justify-center items-center" id='about-me'>
            <article className='flex flex-col items-center gap-12 w-10/12 max-w-[900px]'>
                <Title text='Sou um desenvolvedor fullstack' />
                <div className="flex items-center gap-8 justify-center relative">
                    <motion.div whileInView={{ x: -300 }} transition={{ duration: 1, ease: "easeOut", delay: 3 }} className='w-[250px] h-[250px]'>
                        <img src={picture} alt='Selfie do desenvolvedor' className='w-full h-full  rounded-full object-cover' />
                        <motion.div initial={{ opacity: 0 }} className='relative' whileInView={{ opacity: 1 }} transition={{ type: 'linear', duration: .2, delay: 6 }}>
                            <motion.img initial={{ rotate: -25 }} animate={{ rotate: 25 }} transition={{ type: "linear", duration: .3, repeatType: 'reverse', repeat: Infinity }} src={WavingHand} alt='Emoji acenando' className='absolute w-[120px] bottom-[-30px] left-[-40px]' />
                        </motion.div>
                    </motion.div>

                    <div className="flex flex-col absolute gap-4 left-4 w-[400px]">
                        <motion.p initial={{ opacity: 0, y: -10 }} className='' whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 4, duration: .5, ease: "linear" }}>
                            Eu desenvolvo sistemas e aplicações web, como APIs RESTful e Single Page Applications.
                        </motion.p>
                        <motion.span initial={{ opacity: 0, y: -10 }} className='underline cursor-pointer transition-colors hover:text-gray-400' whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 4.5, duration: .5, ease: "linear" }}>
                            Leia mais
                        </motion.span>
                    </div>

                </div>
            </article>
            <GoDown startOnView text='Continue...' />
        </section>
    )

}