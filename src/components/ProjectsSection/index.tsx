import { Title } from "../Title"
import {motion} from 'framer-motion'

export const ProjectsSection = () => {


    return (
        <section id="projects" className="relative h-screen flex flex-col justify-center gap-12 ">
            <Title text="Para desenvolver diversos projetos!" />
            <div className="grid grid-cols-12 px-24 gap-12">
                <motion.div initial={{x:1000}} whileInView={{x:0}} transition={{duration:.6, delay:.5, ease:"easeOut"}} className="col-span-4 bg-red-400 h-[300px]"></motion.div>
                <motion.div initial={{x:-600}} whileInView={{x:0}} transition={{duration:.6, delay:.3, ease:"easeOut"}} className="col-span-8 bg-blue-400 h-[300px]"></motion.div>
                <motion.div initial={{x:-600}} whileInView={{x:0}} transition={{duration:.6, delay:.7, ease:"easeOut"}} className="col-span-7 bg-green-400 h-[300px]"></motion.div>
                <motion.div initial={{y:-200}} whileInView={{y:0}} transition={{duration:.6, delay:.2, ease:"easeOut"}} className="col-span-5 bg-purple-400 h-[300px]"></motion.div>

            </div>
        </section>
    )

}