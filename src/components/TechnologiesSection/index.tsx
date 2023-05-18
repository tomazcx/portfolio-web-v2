import {motion} from 'framer-motion'
import { TechnologiesSlider } from '../TechnologiesSlider'
import backend from '../../assets/technologies/backend'
import frontend from '../../assets/technologies/frontend'
import { GoDown } from '../GoDown'
import { Title } from '../Title'

export const TechnologiesSection = () => {

    return (
        <section className="h-[100vh] flex flex-col justify-center gap-32 relative" id='technologies'>
            <Title text='Já utilizei diversas tecnologias...' />
            <div className="flex flex-col gap-12">
                <TechnologiesSlider elements={backend} direction='left' />
                <TechnologiesSlider elements={frontend} direction='right' />
            </div>
            <GoDown startOnView />
        </section>
    )

}