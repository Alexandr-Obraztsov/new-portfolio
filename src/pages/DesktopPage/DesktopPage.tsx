import { WidgetsContainer } from '../WidgetsContainer/WidgetsContainer'
import { BottomMenu } from './BottomMenu/BottomMenu'
import { Desktop } from './Desktop/Desktop'
import s from './DesktopPage.module.css'
import { Header } from './Header/Header'

export const DesktopPage = () => {
	return (
		<div className={s.desktopContainer}>
			<Header />
			<Desktop />
			<BottomMenu />
			<WidgetsContainer />
		</div>
	)
}
