import { AnchorHTMLAttributes } from "react"

type SocialMedia = {
    icon: React.ReactNode
    text: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const SocialMedia: React.FC<SocialMedia> = ({ icon, text, ...rest }) => {

    return (
        <a {...rest}  className="flex flex-col gap-4 items-center group" >
            {icon}
            <span className="group-hover:text-blue-default transition-colors">{text}</span>
        </a>

    )

}