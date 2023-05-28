import * as Dialog from '@radix-ui/react-dialog'
import { List, X } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import Brazil from '../../assets/brazil.svg'
import USA from '../../assets/usa.svg'

type SidebarMobile = {
    switchLanguage: () => void
}

export const SidebarMobile: React.FC<SidebarMobile> = ({ switchLanguage }) => {

    const { t, i18n } = useTranslation()

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <List className="text-white lg:hidden cursor-pointer hover:text-gray-600 transition-colors" size={32} />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 bg-black/60 h-screen w-screen' />
                <Dialog.Content className='fixed top-0 right-0 h-screen bg-black z-[20] backdrop-blur-3xl bg-transparent backdrop-brightness-90  flex flex-col gap-24 py-12 px-8 w-[50vw]'>
                    <Dialog.Close><X size={32} className='text-white hover:text-gray-600 transition-colors' /></Dialog.Close>
                    <nav className='flex flex-col items-center gap-8'>
                        <a href="#about-me-mobile" className="transition-colors hover:text-gray-400 font-semibold">{t("components.header.about")}</a>
                        <a href="#technologies" className="transition-colors hover:text-gray-400 font-semibold">{t("components.header.tech")}</a>
                        <a href="#projects" className="transition-colors hover:text-gray-400 font-semibold">{t("components.header.projects")}</a>
                        <a href="#contact" className="transition-colors hover:text-gray-400 font-semibold">{t("components.header.contact")}</a>
                        <img src={i18n.language === "pt-BR" ? Brazil : USA} onClick={() => switchLanguage()} alt="selected-language" width={'30px'} className="cursor-pointer" />

                    </nav>
                </Dialog.Content>
            </Dialog.Portal>


        </Dialog.Root>
    )

}