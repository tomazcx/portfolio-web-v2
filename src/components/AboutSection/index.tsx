import picture from '../../assets/picture.jpg'
import { motion } from 'framer-motion'
import WavingHand from '../../assets/waving-hand.svg'
import { GoDown } from '../GoDown'
import { Title } from '../Title'

export const AboutSection = () => {

    return (
        <section className="h-screen relative" id='about-me'>
            <article className='flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-12 w-10/12 max-w-[700px]'>
                <Title text='Sou um desenvolvedor fullstack' />
                <motion.div className='w-[250px] h-[250px]'>
                    <img src={picture} alt='Selfie do desenvolvedor' className='w-full h-full  rounded-full object-cover' />
                    <motion.div initial={{ opacity: 0 }} className='relative' whileInView={{ opacity: 1 }} transition={{ type: 'linear', duration: .2, delay: 5 }}>
                        <motion.img initial={{ rotate: -25 }} animate={{ rotate: 25}} transition={{ type: "linear", duration: .3, repeatType: 'reverse', repeat: Infinity }} src={WavingHand} alt='Emoji acenando' className='absolute w-[120px] bottom-[-30px] left-[-40px]' />
                    </motion.div>
                </motion.div>
                <motion.p initial={{ opacity: 0, y: -10 }} className='text-center' whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 3, duration: .5, ease: "linear" }}>
                    Eu desenvolvo sistemas e aplicações web, como APIs RESTful e Single Page Applications.
                </motion.p>
            </article>
            <GoDown startOnView text='Continue...' />
        </section>
    )

}