import Brazil from '../../assets/brazil.svg'
import USA from '../../assets/usa.svg'
import { useTranslation } from "react-i18next"
import { SidebarMobile } from "../SidebarMobile"


export const Header = () => {

    const { i18n, t} = useTranslation()

    const switchLanguage = () => {
        const language = i18n.language === 'pt-BR' ? 'en' : 'pt-BR' 
        i18n.changeLanguage(language)
    }

    return (
        <header className="fixed w-screen py-6 px-4 lg:px-16 bg-black z-10 flex justify-between bg-transparent  backdrop-blur-3xl backdrop-brightness-90 items-center">
            <a href="#home" className="text-lg font-bold transition-colors hover:text-gray-400">Tomaz Xavier</a>

            <SidebarMobile switchLanguage={switchLanguage} />
            <nav className="lg:flex gap-8 items-center hidden text-white">
                <a href="#about-me" className="transition-colors hover:text-gray-400 font-semibold">{t("components.header.about")}</a>
                <a href="#technologies"  className="transition-colors hover:text-gray-400 font-semibold">{t("components.header.tech")}</a>
                <a href="#projects"  className="transition-colors hover:text-gray-400 font-semibold">{t("components.header.projects")}</a>
                <a href="#contact"  className="transition-colors hover:text-gray-400 font-semibold">{t("components.header.contact")}</a>
                <img src={i18n.language === "pt-BR" ? Brazil : USA} onClick={() => switchLanguage() } alt="selected-language" width={'30px'} className="cursor-pointer" />
            </nav>
        </header>
    )

}