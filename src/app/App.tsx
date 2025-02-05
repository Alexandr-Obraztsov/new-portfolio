import { switchTheme } from '@/helpers/switchTheme'
import { useEffect } from 'react'
import { DesktopPage } from '../pages/DesktopPage/DesktopPage'
import './App.css'

function App() {
	useEffect(() => {
		const savedTheme =
			(localStorage.getItem('theme') as 'light' | 'dark') ||
			window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
		if (savedTheme) {
			switchTheme(savedTheme)
		}
	}, [])
	return <DesktopPage />
}

export default App
