import github from '../../../assets/icons/github.png'
import linkedin from '../../../assets/icons/linkedin.png'
import telegram from '../../../assets/icons/telegram.png'
import s from './BottomMenu.module.css'

const menuItems = [
	{
		src: telegram,
		alt: 'telegram',
		href: '#',
	},
	{
		src: github,
		alt: 'github',
		href: '#',
	},
	{
		src: linkedin,
		alt: 'linkedin',
		href: '#',
	},
]

export const BottomMenu = () => {
	return (
		<ul className={s.bottomMenu}>
			{menuItems.map(item => (
				<li key={item.alt}>
					<a href={item.href} className={s.menuItem}>
						<img src={item.src} alt={item.alt} width={'100%'} />
					</a>
				</li>
			))}
		</ul>
	)
}
