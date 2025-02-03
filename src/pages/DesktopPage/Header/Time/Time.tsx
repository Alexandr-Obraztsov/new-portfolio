import { useEffect, useState } from 'react'
import useMedia from 'use-media'
import { getDateAsString } from '../../../../helpers/getDateAsString'
import s from './Time.module.css'
export const Time = () => {
	const [date, setDate] = useState(getDateAsString({}))
	const isMobile = useMedia({ maxWidth: '768px' })

	useEffect(() => {
		setDate(getDateAsString({ weekday: !isMobile }))
		const interval = setInterval(() => {
			setDate(getDateAsString({ weekday: !isMobile }))
		}, 1000)

		return () => clearInterval(interval)
	}, [isMobile])

	return <div className={s.time}>{date}</div>
}
