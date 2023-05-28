import { Title } from "../Title"
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react"
import { SocialMedia } from "../SocialMedia"
import { FormSendEmail } from "../FormSendEmail"
import { useTranslation } from "react-i18next"

export const ContactSection = () => {

    const {t} = useTranslation()

    return (
        <section className="h-screen relative flex flex-col gap-24 justify-center w-11/12 mx-auto my-[50vh] lg:my-[30vh]" id="contact">
            <Title text={t("contactSection.title")} />
            <h2 className=" text-center text-lg lg:text-xl">{t("contactSection.subtitle-1")}</h2>
            <div className="flex gap-12 items-center mx-auto ">
                <SocialMedia
                    icon={<InstagramLogo className="text-white group-hover:text-blue-default transition-colors" size={48} />}
                    text="Instagram"
                    href="https://instagram.com/mais.dev"
                    target="_blank"
                />
                <SocialMedia
                    icon={<LinkedinLogo className="text-white group-hover:text-blue-default transition-colors" size={48} />}
                    text="Linkedin"
                    href="https://linkedin.com/in/tomazcx"
                    target="_blank"
                />

                <SocialMedia
                    icon={<GithubLogo className="text-white group-hover:text-blue-default transition-colors" size={48} />}
                    text="Github"
                    href="https://github.com/tomazcx"
                    target="_blank"
                />

            </div>

            <h2 className=" text-center text-lg lg:text-xl">{t("contactSection.subtitle-2")}</h2>
            <FormSendEmail />

        </section>
    )

}