import { FormEvent } from "react"
import { Input } from "../Input"
import { Textarea } from "../TextArea"
import { Title } from "../Title"

export const ContactSection = () => {

    return (
        <section className="h-screen relative flex flex-col gap-24 justify-center px-24" id="contact">
            <Title text="Precisando de um programador?" />
            <form onSubmit={(e: FormEvent) => e.preventDefault()} className='flex flex-col gap-8 items-end'>
					<Input name="name" id="name" label={'Nome'} type={"text"} />
					<Input name="from" id="from" label={"Email"} type={"email"}  />
					<Input name="subject" id="subject" label={"Assunto"} type={"text"}  />
					<Textarea name="content" id="content" label={"Descrição"} rows={10} cols={30} />	
				</form>

        </section>
    )

}