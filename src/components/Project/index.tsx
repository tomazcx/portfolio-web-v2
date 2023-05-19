import { ImgHTMLAttributes } from "react"

type Project= {
    title: string
    description:string
} & ImgHTMLAttributes<HTMLImageElement>

export const Project:React.FC<Project> = ({title, description,...rest}) => {

    return (
        <div className="w-full h-full overflow-hidden group rounded lg border-2 border-white relative cursor-pointer">
            <img className="h-full w-full object-cover transition-all place-content-end cursor-pointer group-hover:scale-[1.1] group-hover:brightness-[0.3]" {...rest} />
            <div className="flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-4">
                <h1 className="text-xl font-semibold select-none">{title}</h1>
                <p className="text-center select-none">{description}</p>
            </div>
        </div>

    )

}