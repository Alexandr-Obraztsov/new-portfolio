import { Desktop } from './Desktop/Desktop'
import s from './DesktopPage.module.css'
import { StatusBar } from './Header/StatusBar'

export const DesktopPage = () => {
	return (
		<div className={s.desktopContainer}>
			<StatusBar />
			<Desktop />
		</div>
	)
}
