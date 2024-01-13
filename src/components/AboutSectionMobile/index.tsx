import picture from '../../assets/picture.jpg'
import { motion } from 'framer-motion'
import WavingHand from '../../assets/waving-hand.svg'
import { GoDown } from '../GoDown'
import { Title } from '../Title'
import { AboutDialog } from '../AboutDialog'
import { useTranslation } from 'react-i18next'

export const AboutSectionMobile: React.FC = () => {

    const {t} = useTranslation()

    return (
        <section className="h-screen relative flex flex-col justify-center items-center lg:hidden" id='about-me-mobile'>
            <article className='flex flex-col items-center gap-12 w-10/12 max-w-[900px]'>
                <Title text={t("aboutSection.title")} />
                <div className="flex flex-col items-center gap-8 justify-center relative">
                    <div  className='w-[250px] h-[250px]'>
                        <img src={picture} alt='Selfie do desenvolvedor' className='w-full h-full  rounded-full object-cover' />
                        <motion.div initial={{ opacity: 0 }} className='relative' whileInView={{ opacity: 1 }} transition={{ type: 'linear', duration: .2, delay: 2 }}>
                            <motion.img initial={{ rotate: -25 }} animate={{ rotate: 25 }} transition={{ type: "linear", duration: .3, repeatType: 'reverse', repeat: Infinity }} src={WavingHand} alt='Emoji acenando' className='absolute w-[120px] bottom-[-30px] left-[-40px]' />
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-4 w-[400px] text-center">
                        <motion.p initial={{ opacity: 0, y: -10 }} className='' whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: .5, ease: "linear" }}>
                            {t('aboutSection.description')}
                        </motion.p>
                        <AboutDialog />
                    </div>

                </div>
            </article>
            <GoDown startOnView text='Continue...' />
        </section>



    )

}
