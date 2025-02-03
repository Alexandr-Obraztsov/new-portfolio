import { useState } from 'react'
import { WidgetsContainer } from '../WidgetsContainer/WidgetsContainer'
import { BottomMenu } from './BottomMenu/BottomMenu'
import { Desktop } from './Desktop/Desktop'
import s from './DesktopPage.module.css'
import { Header } from './Header/Header'

export const DesktopPage = () => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div className={s.desktopContainer}>
			<div className={s.desktop}>
				<Header />
				<Desktop />
				<BottomMenu />
				<WidgetsContainer />
			</div>
		</div>
	)
}
