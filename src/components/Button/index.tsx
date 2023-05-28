import React, { ButtonHTMLAttributes } from "react";

type Button = {
    text:string
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Button> = ({text,...rest}) => {

    return (
        <button {...rest} className="bg-blue-default text-white hover:bg-blue-default/70 transition-colors rounded-xl w-full lg:w-auto px-12 py-2 font-semibold"> {text}</button>
    )

}