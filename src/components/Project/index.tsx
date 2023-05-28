import { ImgHTMLAttributes } from "react"

type Project= {
    title: string
    description:string
} & ImgHTMLAttributes<HTMLImageElement>

export const Project:React.FC<Project> = ({title, description,...rest}) => {

    return (
        <div className="lg:h-full w-full overflow-hidden group rounded-lg border-2 border-white relative cursor-pointer  h-[200px] ">
            <img className="h-full w-full object-cover transition-all place-content-end cursor-pointer group-hover:scale-[1.1] group-hover:brightness-[0.3]" {...rest} />
            <div className="flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-4">
                <h1 className="text-lg lg:text-xl font-semibold text-center select-none">{title}</h1>
                <p className="text-center text-sm lg:text-md select-none">{description}</p>
            </div>
        </div>

    )

}