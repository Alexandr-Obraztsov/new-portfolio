import { useState } from 'react'
import check from '../../assets/contact/check.png'
import { BaseWidget } from '../../components/BaseWidget/BaseWidget'
import { WidgetProps } from '../types/WidgetProps.types'
import s from './Contact.module.css'
import { ContactForm } from './ContactForm/ContactForm'

export const Contact = ({ widget }: WidgetProps) => {
	const [isSended, setSended] = useState(false)

	const letterClasses = `${isSended && s.sended} ${s.letter}`
	const successMessageClasses = `${s.successMessage} ${isSended && s.sended}`

	const handleSend = () => {
		setSended(true)
		setTimeout(() => {
			setSended(false)
		}, 4000)
	}

	return (
		<BaseWidget title='Contact' widget={widget}>
			<div className={s.letterContainer}>
				<img src={check} alt='check' className={successMessageClasses} />
				<div className={letterClasses}>
					<div className={s.letterBang}></div>
					<div className={s.letterBody}>
						<ContactForm onSend={handleSend} />
					</div>
				</div>
			</div>
		</BaseWidget>
	)
}
