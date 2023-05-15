import { motion } from 'framer-motion'
import backendTechs from '../../assets/technologies/backend/index'
import Marquee from 'react-fast-marquee'

type Slider ={
    elements:string[]
    direction: 'left' | 'right'
}

export const TechnologiesSlider:React.FC<Slider> = ({elements, direction}) => {


    return (
            <Marquee
            speed={100}
            direction={direction}
            >
                {elements.map(tech => (
                    <div className='h-[4rem] lg:h-[8rem] mx-4'><img width={200} className='w-full object-cover h-full' src={tech} /></div>
                ))}

            </Marquee>

    )

}