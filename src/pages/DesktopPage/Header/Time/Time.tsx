import { useEffect, useState } from 'react'
import { getFullDate } from '../../../../helpers/getFullDate'
import s from './Time.module.css'
export const Time = () => {
	const [date, setDate] = useState(getFullDate())

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(getFullDate())
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return <div className={s.time}>{date}</div>
}
