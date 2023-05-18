import { List } from "phosphor-react"
import Brazil from '../../assets/brazil.svg'
import USA from '../../assets/usa.svg'
import { useState } from "react"


export const Header = () => {

    const [selectedLanguage, setLanguage] = useState(true)


    return (
        <header className="fixed w-screen py-6 px-4 lg:px-16 bg-black z-10 flex justify-end lg:justify-between bg-transparent  backdrop-blur-3xl backdrop-brightness-90">
            <List className="text-white lg:hidden cursor-pointer hover:text-gray-600 transition-colors" size={32} />
            <a href="#home" className="text-lg font-bold transition-colors hover:text-gray-400">Tomaz Xavier</a>


            <nav className="lg:flex gap-8 items-center hidden text-white">
                <a href="#about-me" className="transition-colors hover:text-gray-400 font-semibold">Sobre mim</a>
                <a href="#technologies"  className="transition-colors hover:text-gray-400 font-semibold">Tecnologias</a>
                <a href="#projects"  className="transition-colors hover:text-gray-400 font-semibold">Projetos</a>
                <a href="#contact"  className="transition-colors hover:text-gray-400 font-semibold">Contato</a>
                <img src={selectedLanguage ? Brazil : USA} onClick={() => setLanguage(prevState => !prevState) } alt="selected-language" width={'30px'} className="cursor-pointer" />
            </nav>
        </header>
    )

}