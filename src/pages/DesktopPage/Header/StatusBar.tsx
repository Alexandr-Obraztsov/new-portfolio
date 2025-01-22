import { Indicators } from './Indicators/Indicators'
import { Menu } from './Menu/Menu'
import s from './StatusBar.module.css'
import { Time } from './Time/Time'

export const StatusBar = () => {
	return (
		<header className={s.statusBar}>
			<Menu />
			<Time />
			<Indicators />
		</header>
	)
}
