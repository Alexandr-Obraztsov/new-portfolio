import { useWidgets } from '../../../hooks/useWidgets'
import s from './Header.module.css'

type Props = {
	title: string
	id: string
}

export const Header = ({ title, id }: Props) => {
	const { closeWidget } = useWidgets()

	return (
		<div className={s.header}>
			<button className={s.close} onClick={() => closeWidget({ id })}></button>
			<h2 className={s.title}>{title}</h2>
		</div>
	)
}
