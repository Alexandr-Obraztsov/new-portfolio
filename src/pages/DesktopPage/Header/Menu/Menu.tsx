import s from './Menu.module.css'

export const Menu = () => {
	return (
		<nav className={s.menu}>
			<ul>
				<li>About</li>
				<li>Skills</li>
				<li>Project</li>
				<li>Contact</li>
			</ul>
		</nav>
	)
}
