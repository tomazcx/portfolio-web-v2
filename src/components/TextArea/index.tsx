import {TextareaHTMLAttributes} from "react"

export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	register:any
	label: string
}

export const Textarea = ({register, label, ...rest}: ITextarea) => {

	return (
		<fieldset className="flex flex-col gap-2 w-full">
			<label htmlFor={rest.id} className="text-lg font-bold">{label}</label>
			<textarea {...register(rest.name)} {...rest} className="w-full bg-gray-700 rounded-xl p-1.5"></textarea>
		</fieldset>
	)
}
