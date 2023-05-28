import { Project } from "../Project"
import { Title } from "../Title"
import {motion} from 'framer-motion'
import GlassOn from '../../assets/projects/glass-on.png'
import CrwnClothing from '../../assets/projects/crwn-clothing.png'
import OdontoDashboard from '../../assets/projects/odonto dasbhoard.png'
import MyPersonalTrainer from '../../assets/projects/my-personal-trainer.png'
import { useTranslation } from "react-i18next"

export const ProjectsSection = () => {

    const {t} = useTranslation()

    return (
        <section id="projects" className="relative min-h-screen lg:min-h-full flex flex-col justify-center gap-12 my-[20vh] lg:my-0 ">
            <Title text={t("projectsSection.title")} />
            <div className="lg:grid flex flex-col grid-cols-12 w-11/12 items-center mx-auto  gap-8 lg:gap-12">
                <motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.6, delay:.3, ease:"easeOut"}} className="col-span-4 w-11/12 lg:w-full mx-auto lg:mx-0 lg:h-[300px]">
                    <Project title="Crwn Clothing" description={t("projectsSection.crwn-clothing.description")} src={CrwnClothing} alt="Crwn Clothing project" />
                </motion.div>
                <motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.6, delay:.6, ease:"easeOut"}} className="col-span-8 w-11/12 lg:w-full mx-auto lg:h-[300px]">
                    <Project src={GlassOn} title="Glass On" description={t("projectsSection.glass-on.description")} alt="Glass On project" />
                </motion.div>
                <motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.6, delay:.9, ease:"easeOut"}} className="col-span-7 w-11/12 lg:w-full mx-auto lg:h-[300px]">

                    <Project src={OdontoDashboard} title="Odonto Dashboard" description={t("projectsSection.odonto-dashboard.description")} alt="Odonto Dashboard project" />
                </motion.div>
                <motion.div initial={{x:-50,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:.6, delay:1.2, ease:"easeOut"}} className="col-span-5 w-11/12 lg:w-full mx-auto h-[300px]">

                    <Project src={MyPersonalTrainer} title="My Personal Trainer" description={t("projectsSection.my-personal-trainer.description")} alt="My Personal Trainer project" />
                </motion.div>

            </div>
        </section>
    )

}