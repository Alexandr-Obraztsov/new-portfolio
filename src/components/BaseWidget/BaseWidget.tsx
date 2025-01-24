import { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'
import { getWidgetRandomCoord } from '../../helpers/getWidgetRandomCoord'
import { useWidgets } from '../../hooks/useWidgets'
import { Widget } from '../../widgets/types/Widget.types'
import s from './BaseWidget.module.css'
import { Header } from './Header/Header'

type Props = {
	widget: Widget
	title: string
	children: ReactNode
}

export const BaseWidget = ({ title, widget, children }: Props) => {
	const { setActiveWidget } = useWidgets()
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const ref = useRef<HTMLElement | null>(null)

	const handleDrag = (e: DraggableEvent, data: DraggableData) => {
		if (data.node)
			setPosition({
				x: data.x,
				y: data.y,
			})
	}

	const handleFocus = () => {
		setActiveWidget({ id: widget.id })
	}

	useLayoutEffect(() => {
		if (ref.current) {
			const width = ref.current.offsetWidth
			const height = ref.current.offsetHeight
			setPosition({
				x: getWidgetRandomCoord(0, document.body.offsetWidth - width),
				y: getWidgetRandomCoord(0, document.body.offsetHeight - height),
			})
		}
	}, [])

	const widgetClasses = `${s.baseWidget} ${!widget.isActive && s.disabled}`

	return (
		<Draggable
			defaultClassName={widgetClasses}
			position={position}
			onDrag={handleDrag}
			onMouseDown={handleFocus}
			handle='header'
		>
			<div>
				<article ref={ref}>
					<header className={(!widget.isActive && s.disabled) || ''}>
						<Header title={title} id={widget.id} />
					</header>
					<section className={s.widgetBody}>{children}</section>
				</article>
			</div>
		</Draggable>
	)
}
