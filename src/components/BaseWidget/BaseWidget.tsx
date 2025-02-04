import { ReactNode, useRef } from 'react'
import { useWidgets } from '../../hooks/useWidgets'
import { Widget } from '../../widgets/types/Widget.types'
import { Draggable } from '../Draggable/Draggable'
import s from './BaseWidget.module.css'
import { Header } from './Header/Header'

type Props = {
	widget: Widget
	title: string
	children: ReactNode
	onClose?: () => void
}

export const BaseWidget = ({ title, widget, children, onClose }: Props) => {
	const { closeWidget, setActiveWidget } = useWidgets()
	const ref = useRef<HTMLDivElement>(null)

	const handleFocus = () => {
		setActiveWidget({ id: widget.id })
	}

	const handleClose = () => {
		ref.current!.className = s.close
		onClose?.()
		setTimeout(() => closeWidget({ id: widget.id }), 100)
	}

	const widgetClasses = `${s.baseWidget} ${!widget.isActive && s.disabled}`

	return (
		<Draggable
			defaultClass={widgetClasses}
			defaultPosition={{ x: '50%', y: '50%' }}
			handleId='header'
			onFocus={handleFocus}
		>
			<div>
				<article ref={ref} className=''>
					<header
						id='header'
						className={(!widget.isActive && s.disabled) || ''}
					>
						<Header title={title} onClose={handleClose} />
					</header>
					<section className={s.widgetBody}>{children}</section>
				</article>
			</div>
		</Draggable>
	)
}
