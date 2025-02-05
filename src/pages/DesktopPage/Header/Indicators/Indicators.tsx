import battery from '@/assets/icons/desktop/battery.svg'
import search from '@/assets/icons/desktop/search.svg'
import settings from '@/assets/icons/desktop/settings.png'
import wifi from '@/assets/icons/desktop/wifi.svg'
import { getDateAsString } from '@/helpers/getDateAsString'
import { useEffect, useState } from 'react'
import useMedia from 'use-media'
import s from './Indicators.module.css'

const icons = [
	{
		src: battery,
		alt: 'battery',
		width: '35.7px',
		height: '17px',
	},
	{
		src: wifi,
		alt: 'wifi',
		width: '25px',
		height: '17px',
	},
	{
		src: search,
		alt: 'search',
		width: '24px',
		height: '24px',
	},
	{
		src: settings,
		alt: 'settings',
		width: '30px',
		height: '30px',
	},
]

export const Indicators = () => {
	const [date, setDate] = useState(getDate())
	const isMobile = useMedia({ maxWidth: '768px' })

	function getDate() {
		return {
			weekday: getDateAsString({ weekday: 'short' }),
			date: getDateAsString({ month: 'short', day: 'numeric' }),
			time: getDateAsString({ hour: 'numeric', minute: '2-digit' }),
		}
	}

	useEffect(() => {
		setDate(getDate())
		const interval = setInterval(() => {
			setDate(getDate())
		}, 1000)
		return () => clearInterval(interval)
	}, [isMobile])

	return (
		<section className={s.indicators}>
			{icons.map(icon => (
				<img
					src={icon.src}
					alt={icon.alt}
					style={{
						width: icon.width,
						height: icon.height,
					}}
				/>
			))}
			<span>{date.weekday}</span>
			<span>{date.date}</span>
			<span>{date.time}</span>
		</section>
	)
}
