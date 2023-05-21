import Marquee from 'react-fast-marquee'

type Slider ={
    elements:{
        img:string,
        name:string
    }[],
    direction: 'left' | 'right'
    setHoveredTechnology: (tech:string) => void
}

export const TechnologiesSlider:React.FC<Slider> = ({elements, direction, setHoveredTechnology}) => {


    return (
            <Marquee
            speed={100}
            direction={direction}
            >
                {elements.map(tech => (
                    <div onMouseEnter={()=> setHoveredTechnology(tech.name)} className='h-[4rem] cursor-pointer  lg:h-[8rem] mx-2 lg:mx-6'><img width={200} className='w-full object-cover h-full' src={tech.img} /></div>
                ))}

            </Marquee>

    )

}