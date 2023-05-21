import {motion} from 'framer-motion'
import { TechnologiesSlider } from '../TechnologiesSlider'
import backend from '../../assets/technologies/backend'
import frontend from '../../assets/technologies/frontend'
import { GoDown } from '../GoDown'
import { Title } from '../Title'
import { useState } from 'react'

export const TechnologiesSection = () => {

    const [hoveredTechnology, setHoveredTechnology] = useState('')

    return (
        <section className="h-[100vh] flex flex-col justify-center gap-32 relative" id='technologies'>
            <Title text={`Já utilizei diversas tecnologias${hoveredTechnology !== '' ? `, como ${hoveredTechnology}` : "..."}`} />
            <div className="flex flex-col gap-12">
                <TechnologiesSlider elements={backend} direction='left' setHoveredTechnology={setHoveredTechnology} />
                <TechnologiesSlider elements={frontend} direction='right' setHoveredTechnology={setHoveredTechnology} />
            </div>
            <GoDown startOnView />
        </section>
    )

}