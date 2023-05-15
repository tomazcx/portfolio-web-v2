import {motion} from 'framer-motion'
import { TechnologiesSlider } from '../TechnologiesSlider'
import backend from '../../assets/technologies/backend'
import frontend from '../../assets/technologies/frontend'

export const TechnologiesSection = () => {

    return (
        <section className="h-[100vh] flex flex-col justify-center gap-32 relative">
            <motion.h3 className='text-center text-xl font-semibold text-white' initial={{opacity:0, y:-10}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:2}}>Já utilizei diversas tecnologias...</motion.h3>
            <div className="flex flex-col gap-12">
                <TechnologiesSlider elements={backend} direction='left' />
                <TechnologiesSlider elements={frontend} direction='right' />
            </div>
        </section>
    )

}