import helloAnimation from '@/assets/animations/hello.json'
import { useLottie } from 'lottie-react'
import { useEffect, useState } from 'react'
import { WidgetsContainer } from '../WidgetsContainer/WidgetsContainer'
import { BottomMenu } from './BottomMenu/BottomMenu'
import { Desktop } from './Desktop/Desktop'
import s from './DesktopPage.module.css'
import { Header } from './Header/Header'

export const DesktopPage = () => {
	const [isLoading, setIsLoading] = useState(true)
	const { View, play } = useLottie({
		animationData: helloAnimation,
		loop: false,
		autoplay: false,
	})

	useEffect(() => {
		setTimeout(() => {
			play()
		}, 500)

		setTimeout(() => {
			setIsLoading(false)
		}, 5000)
	}, [play, setIsLoading])

	return (
		<div className={s.desktopContainer + ' ' + (isLoading && s.hidden)}>
			<div className={s.desktop + ' ' + (isLoading && s.hidden)}>
				<Header />
				<Desktop />
				<BottomMenu />
				<WidgetsContainer />
			</div>
			<div className={s.loading + ' ' + (!isLoading && s.hidden)}>{View}</div>
		</div>
	)
}
