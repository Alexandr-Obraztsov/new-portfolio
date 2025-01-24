import { useForm } from 'react-hook-form'
import s from './ContactForm.module.css'
type Props = {
	onSend: () => void
}

type FormFields = {
	name: string
	email: string
	message: string
}

export const ContactForm = ({ onSend }: Props) => {
	const { register, reset, handleSubmit } = useForm({
		values: {
			name: '',
			email: '',
			message: '',
		} as FormFields,
	})
	const handleSend = (data: FormFields) => {
		onSend()
		setTimeout(() => {
			reset()
		}, 2000)
	}

	return (
		<form className={s.contactForm} onSubmit={handleSubmit(handleSend)}>
			<div className={s.contactField}>
				<input type='text' placeholder='Name' {...register('name')} />
				<span></span>
			</div>
			<div className={s.contactField}>
				<input type='email' placeholder='Email' {...register('email')} />
				<span></span>
			</div>
			<div className={s.contactField}>
				<textarea placeholder='Message' {...register('message')} rows={6} />
				<span></span>
			</div>
			<button className={s.formButton} type='submit'>
				Send
			</button>
		</form>
	)
}
