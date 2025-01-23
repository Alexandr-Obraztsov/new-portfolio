import s from './Header.module.css'
import { Indicators } from './Indicators/Indicators'
import { Menu } from './Menu/Menu'
import { Time } from './Time/Time'

export const Header = () => {
	return (
		<header className={s.statusBar}>
			<Menu />
			<Time />
			<Indicators />
		</header>
	)
}
