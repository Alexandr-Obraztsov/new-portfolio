import { CSSProperties } from 'react'
import s from './Label.module.css'

export type Position = {
	x: number
	y: number
}

export type LabelPropsType = {
	title: string
	imgSrc: string
	position: Position
	onClick?: () => void
	styles?: {
		label?: CSSProperties
		labelIcon?: CSSProperties
		labelTitle?: CSSProperties
	}
}

export const Label = ({
	title,
	imgSrc,
	position,
	onClick,
	styles,
}: LabelPropsType) => {
	const { label, labelIcon, labelTitle } = styles || {}
	const positionStyles: CSSProperties = {
		gridRowStart: position.y,
		gridColumnStart: position.x,
	}

	return (
		<div style={positionStyles} className={s.labelContainer}>
			<div style={label} className={s.label} onClick={onClick}>
				<img
					style={labelIcon}
					className={s.labelIcon}
					src={imgSrc}
					alt={`Image of: "${title}"`}
				/>
				<span style={labelTitle} className={s.labelTitle}>
					{title}
				</span>
			</div>
		</div>
	)
}
