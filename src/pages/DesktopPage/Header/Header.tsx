import s from './Header.module.css'
import { Indicators } from './Indicators/Indicators'
import { Menu } from './Menu/Menu'

export const Header = () => {
	return (
		<header className={s.header}>
			<Menu />
			<Indicators />
		</header>
	)
}
