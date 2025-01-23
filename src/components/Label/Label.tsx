import { CSSProperties } from 'react'
import s from './Label.module.css'

export type Position = {
	x: number
	y: number
}

export type LabelPropsType = {
	title: string
	imgSrc: string
	onClick?: () => void
	position: Position
}

export const Label = ({ title, imgSrc, position, onClick }: LabelPropsType) => {
	const positionStyles: CSSProperties = {
		gridRowStart: position.y,
		gridColumnStart: position.x,
	}

	return (
		<div style={positionStyles} className={s.labelContainer}>
			<div className={s.label} onClick={onClick}>
				<img
					className={s.labelIcon}
					src={imgSrc}
					alt={`Image of: "${title}"`}
				/>
				<span className={s.labelTitle}>{title}</span>
			</div>
		</div>
	)
}
