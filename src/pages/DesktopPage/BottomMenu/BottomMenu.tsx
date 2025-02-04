import dino from '@/assets/icons/desktop/dino.png'
import { socials } from '@/consts/socials'
import { useEffect, useRef } from 'react'
import s from './BottomMenu.module.css'

const menuItems = [
	{ img: dino, title: 'Dino', link: '#' },
	...Object.values(socials),
]

export const BottomMenu = () => {
	const ref = useRef<HTMLUListElement>(null)

	useEffect(() => {
		if (!ref.current) return

		const elements = ref.current.querySelectorAll('li')
		const iconSize = +getComputedStyle(ref.current)
			.getPropertyValue('--icon-size')
			.replace('px', '')

		const handleMove = (event: MouseEvent) => {
			requestAnimationFrame(() => {
				elements.forEach(item => {
					const rect = item.getBoundingClientRect()
					const offsetX = event.clientX - (rect.left + rect.width / 2)
					const size =
						Math.max(iconSize, (1.6 - Math.abs(offsetX / 300)) * iconSize) +
						'px'

					item.style.width = size
					item.style.height = size
				})
			})
		}

		const handleLeave = () => {
			requestAnimationFrame(() => {
				elements.forEach(item => {
					item.style.width = iconSize + 'px'
					item.style.height = iconSize + 'px'
				})
			})
		}

		ref.current.addEventListener('mousemove', handleMove)
		ref.current.addEventListener('mouseleave', handleLeave)

		return () => {
			ref.current?.removeEventListener('mousemove', handleMove)
			ref.current?.removeEventListener('mouseleave', handleLeave)
		}
	}, [])

	return (
		<ul className={s.bottomMenu} ref={ref}>
			{menuItems.map(item => (
				<li key={item.title} className={s.menuItem}>
					<a href={item.link}>
						<img src={item.img} alt={item.title} width={'100%'} />
						<span className={s.itemName}>{item.title}</span>
					</a>
				</li>
			))}
		</ul>
	)
}
