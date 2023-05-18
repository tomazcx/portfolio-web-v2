import {InputHTMLAttributes} from "react"

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

export const Input = ({label, ...rest}: IInput) => {

	return (
		<fieldset className="flex flex-col gap-2 w-full">
			<label htmlFor={rest.id} className="text-lg font-bold">{label}</label>
			<input {...rest} className="w-full bg-gray-700 rounded-xl p-1.5" />
		</fieldset>
	)
}
