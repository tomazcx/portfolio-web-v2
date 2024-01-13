import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'
import { X } from 'phosphor-react'
import { useTranslation } from 'react-i18next'

export const AboutDialog: React.FC = () => {

    const { t } = useTranslation()

    return (
        <Dialog.Root>
            <Dialog.Trigger className='lg:text-left'>
                <motion.span initial={{ opacity: 0, y: -10 }} className='underline cursor-pointer transition-colors hover:text-gray-400' whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 2.7, duration: .5, ease: "linear" }}>
                    {t("aboutSection.read-more")}
                </motion.span>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 bg-black/60 h-screen w-screen' />
                <Dialog.Content className='w-11/12 h-auto max-w-[800px] max-h-[90vh] z-[15] overflow-y-scroll rounded-xl bg-black-default flex flex-col gap-4 p-8 pb-12 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <Dialog.Close>
                        <X className='text-white hover:text-gray-400 transition-colors' size={32} />
                    </Dialog.Close>
                    <Dialog.Title className='text-center text-2xl' >
                        {t("components.aboutMeDialog.title")}
                    </Dialog.Title>
                    <hr className='border-blue-default w-full mb-6 max-w-[40px] border-2 mx-auto' />
                    <p className='text-justify'>{t("components.aboutMeDialog.description")}</p>

                    <h2 className='text-center mt-4 text-xl'>{t("components.aboutMeDialog.degree")}</h2>
                    <hr className='border-blue-default w-full mb-6 max-w-[40px] border-2 mx-auto' />
                    <div className="flex flex-col mt-4">
                        <p className='text-center'>{t("components.aboutMeDialog.degree-technician")}</p>
                        <span className='text-center'>{t("components.aboutMeDialog.degree-technician-duration")}</span>
                    </div>

                    <div className="flex flex-col mt-4">
                        <p className='text-center'>{t("components.aboutMeDialog.degree-college")}</p>
                        <span className='text-center'>{t("components.aboutMeDialog.degree-college-duration")}</span>
                    </div>


                </Dialog.Content>

            </Dialog.Portal>

        </Dialog.Root>
    )

}
