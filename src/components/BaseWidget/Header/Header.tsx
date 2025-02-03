import s from './Header.module.css'

type Props = {
	title: string
	onClose: () => void
}

export const Header = ({ title, onClose }: Props) => {
	return (
		<div className={s.header}>
			<button className={s.close} onClick={onClose}></button>
			<h2 className={s.title}>{title}</h2>
		</div>
	)
}
