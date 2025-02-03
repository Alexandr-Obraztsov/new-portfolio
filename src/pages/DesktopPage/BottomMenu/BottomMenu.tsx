import dino from '@/assets/icons/desktop/dino.png'
import github from '@/assets/icons/desktop/github.png'
import instagram from '@/assets/icons/desktop/instagram.png'
import linkedin from '@/assets/icons/desktop/linkedin.png'
import telegram from '@/assets/icons/desktop/telegram.png'
import vk from '@/assets/icons/desktop/vk.png'
import { useEffect, useRef } from 'react'
import s from './BottomMenu.module.css'

const menuItems = [
	{ src: dino, name: 'Dino', href: '#' },
	{ src: telegram, name: 'Telegram', href: '#' },
	{ src: github, name: 'GitHub', href: '#' },
	{ src: linkedin, name: 'LinkedIn', href: '#' },
	{ src: vk, name: 'VK', href: '#' },
	{ src: instagram, name: 'Instagram', href: '#' },
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
						Math.max(iconSize, (1.7 - Math.abs(offsetX / 350)) * iconSize) +
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
				<li key={item.name} className={s.menuItem}>
					<a href={item.href}>
						<img src={item.src} alt={item.name} width={'100%'} />
						<span className={s.itemName}>{item.name}</span>
					</a>
				</li>
			))}
		</ul>
	)
}
