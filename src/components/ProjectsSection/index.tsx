import { Project } from "../Project"
import { Title } from "../Title"
import {motion} from 'framer-motion'
import GlassOn from '../../assets/projects/glass-on.png'
import CrwnClothing from '../../assets/projects/crwn-clothing.png'
import OdontoDashboard from '../../assets/projects/odonto dasbhoard.png'
import MyPersonalTrainer from '../../assets/projects/my-personal-trainer.png'

export const ProjectsSection = () => {


    return (
        <section id="projects" className="relative h-screen flex flex-col justify-center gap-12 ">
            <Title text="Para desenvolver diversos projetos!" />
            <div className="grid grid-cols-12 px-24 gap-12">
                <motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.6, delay:.3, ease:"easeOut"}} className="col-span-4 h-[300px]">
                    <Project title="Crwn Clothing" description="E-commerce de roupas" src={CrwnClothing} alt="Crwn Clothing project" />
                </motion.div>
                <motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.6, delay:.6, ease:"easeOut"}} className="col-span-8 h-[300px]">
                    <Project src={GlassOn} title="Glass On" description="E-commerce de óculos" alt="Glass On project" />
                </motion.div>
                <motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.6, delay:.9, ease:"easeOut"}} className="col-span-7 h-[300px]">

                    <Project src={OdontoDashboard} title="Odonto Dashboard" description="Dashboard para gerenciamento de pacientes de uma clínica odontológica." alt="Odonto Dashboard project" />
                </motion.div>
                <motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.6, delay:1.2, ease:"easeOut"}} className="col-span-5 h-[300px]">

                    <Project src={MyPersonalTrainer} title="My Personal Trainer" description="Dashboard para gerenciamento de horários e clientes de personal trainers." alt="My Personal Trainer project" />
                </motion.div>

            </div>
        </section>
    )

}