import {motion} from 'framer-motion'

type Title = {
    text:string
}

export const Title:React.FC<Title> = ({text}) => {

    return (
       <motion.h3 className='text-center text-xl lg:text-2xl font-semibold text-white' initial={{opacity:0, y:-10}} whileInView={{opacity:1, y:0}} transition={{duration:1, delay:2}}>{text}</motion.h3>
    )

}