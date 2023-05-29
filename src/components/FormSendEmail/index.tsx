import { useState } from "react"
import { Input } from "../Input"
import { Textarea } from "../TextArea"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../config/api"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "../Button"
import { useTranslation } from "react-i18next"

export const FormSendEmail: React.FC = () => {

    const {t} = useTranslation()

    const formSchema = z.object({
        name: z.string().min(3, t('contactSection.form.name.error')?? ''),
        from: z.string().min(1, t('contactSection.form.email.error')?? '').email(),
        subject: z.string().min(3, t('contactSection.form.subject.error')?? ''),
        content: z.string().min(3, t('contactSection.form.content.error')?? '')
    })

    type FormSchema = z.infer<typeof formSchema>

    const [reqError, setReqError] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>({
        resolver: zodResolver(formSchema)
    })

    const handleSendEmail: SubmitHandler<FormSchema> = async (data) => {
        try {
            await api.post("/email", data)
            toast.success(t("contactSection.form.success"))
        } catch (err) {
            setReqError(t("contactSection.form.error")?? "Erro")
        }
    }

    return (
        <form onSubmit={handleSubmit(handleSendEmail)} className='flex flex-col gap-8 items-end'>
            <ToastContainer theme="dark" autoClose={2000} />
            <Input register={register} name="name" id="name" label={t("contactSection.form.name.label")} type={"text"} />
            {errors.name?.message ? <span className="text-red-400">{errors.name.message}</span> : null}
            <Input register={register} name="from" id="from" label={t("contactSection.form.email.label")} type={"email"} />
            {errors.from?.message ? <span className="text-red-400">{errors.from.message}</span> : null}
            <Input register={register} name="subject" id="subject" label={t("contactSection.form.subject.label")} type={"text"} />
            {errors.subject?.message ? <span className="text-red-400">{errors.subject.message}</span> : null}
            <Textarea register={register} name="content" id="content" label={t("contactSection.form.content.label")} rows={10} cols={30} />
            {errors.content?.message ? <span className="text-red-400">{errors.content.message}</span> : null}
            <Button text={t("contactSection.form.button")} />
            {reqError !== "" ? <span className="text-red-400">{reqError}</span> : null}
        </form>

    )
}