import { ReactNode, useCallback, useEffect, useRef } from 'react'
import s from './Draggable.module.css'

type Props = {
	defaultClass?: string
	defaultPosition?: {
		x: string
		y: string
	}
	children: ReactNode
	handleId?: string
	onFocus?: () => void
}

export const Draggable = ({
	defaultPosition = { x: '50%', y: '50%' },
	defaultClass,
	children,
	handleId,
	onFocus,
}: Props) => {
	const ref = useRef<HTMLDivElement>(null)
	const offsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
	const dragging = useRef<boolean>()

	const handleStart = useCallback(
		(e: MouseEvent | TouchEvent) => {
			onFocus?.()

			if (handleId) {
				const target = e.target as HTMLElement
				let current = target

				while (current !== e.currentTarget) {
					if (current.id === handleId) break
					current = current.parentElement!
				}

				if (current.id !== handleId) return
			}

			dragging.current = true

			const { clientX, clientY } = e instanceof MouseEvent ? e : e.touches[0]
			const { left, top, width, height } = ref.current!.getBoundingClientRect()
			offsetRef.current = {
				x: clientX - left - width / 2,
				y: clientY - top - height / 2,
			}

			window.addEventListener('mousemove', handleMove)
			window.addEventListener('touchmove', handleMove)
			window.addEventListener('mouseup', handleEnd)
			window.addEventListener('touchend', handleEnd)
		},
		[ref, offsetRef, dragging]
	)

	const handleMove = (e: MouseEvent | TouchEvent) => {
		if (dragging.current && ref.current) {
			const { clientX, clientY } = e instanceof MouseEvent ? e : e.touches[0]
			ref.current.style.left = `${clientX - offsetRef.current.x}px`
			ref.current.style.top = `${clientY - offsetRef.current.y}px`
		}
	}

	const handleEnd = () => {
		dragging.current = false

		window.removeEventListener('mousemove', handleMove)
		window.removeEventListener('touchmove', handleMove)
		window.removeEventListener('mouseup', handleEnd)
		window.removeEventListener('touchend', handleEnd)
	}

	useEffect(() => {
		if (ref.current) {
			ref.current.addEventListener('mousedown', handleStart)
			ref.current.addEventListener('touchstart', handleStart)
		}
	}, [defaultPosition, handleStart])

	return (
		<div
			className={s.container + ' ' + defaultClass}
			style={{ left: defaultPosition.x, top: defaultPosition.y }}
			ref={ref}
		>
			{children}
		</div>
	)
}
