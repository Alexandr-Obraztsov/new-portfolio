import s from './Menu.module.css'

export const Menu = () => {
	return (
		<nav className={s.menu}>
			<ul>
				<li>About</li>
				<li>Projects</li>
				<li>Contact</li>
			</ul>
		</nav>
	)
}
