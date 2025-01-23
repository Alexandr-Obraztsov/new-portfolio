import { useState } from 'react'
import check from '../../assets/contact/check.png'
import { BaseWidget } from '../../components/BaseWidget/BaseWidget'
import { WidgetProps } from '../types/WidgetProps.types'
import s from './Contact.module.css'
export const Contact = ({ widget }: WidgetProps) => {
	const [isSended, setSended] = useState(false)

	const letterClasses = `${isSended && s.sended} ${s.letter}`
	const successMessageClasses = `${s.successMessage} ${isSended && s.sended}`

	const handleSend = () => {
		//setSended(true)
		setTimeout(() => {
			setSended(false)
		}, 4000)
	}

	return (
		<BaseWidget title='Contact' widget={widget}>
			<div className={s.letterContainer} onClick={handleSend}>
				<img src={check} alt='check' className={successMessageClasses} />
				<div className={letterClasses}>
					<div className={s.letterBang}></div>
					<form className={s.contactForm}>
						<div className={s.contactInput}>
							<input type='text' placeholder='Name' name='name' />
							<span></span>
						</div>
						<div className={s.contactInput}>
							<input type='email' placeholder='Email' name='email' />
							<span></span>
						</div>
						<div className={s.contactInput}>
							<textarea placeholder='Message' name='message' rows={6} />
							<span></span>
						</div>
						<button className={s.formButton} type='submit'>
							Send
						</button>
					</form>
				</div>
			</div>
		</BaseWidget>
	)
}
