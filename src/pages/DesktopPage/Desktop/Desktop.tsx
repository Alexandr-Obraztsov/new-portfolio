import about from '../../../assets/icons/about.png'
import contact from '../../../assets/icons/contact.png'
import document from '../../../assets/icons/document.png'
import projects from '../../../assets/icons/projects.png'
import trash from '../../../assets/icons/trash.png'
import { Label } from '../../../components/Label/Label'
import s from './Desktop.module.css'

const labels = [
	{
		title: 'About me',
		imgSrc: about,
		onClick: () => console.log('clicked'),
		position: { x: 1, y: 1 },
	},
	{
		title: 'Contact',
		imgSrc: contact,
		onClick: () => console.log('clicked'),
		position: { x: 1, y: 3 },
	},
	{
		title: 'Skills',
		imgSrc: document,
		onClick: () => console.log('clicked'),
		position: { x: 1, y: 2 },
	},
	{
		title: 'Projects',
		imgSrc: projects,
		onClick: () => console.log('clicked'),
		position: { x: 2, y: 1 },
	},
	{
		title: 'Trash',
		imgSrc: trash,
		onClick: () => console.log('clicked'),
		position: { x: -2, y: -2 },
	},
]

export const Desktop = () => {
	return (
		<main className={s.desktop}>
			{labels.map(label => (
				<Label
					key={label.title}
					title={label.title}
					imgSrc={label.imgSrc}
					onClick={label.onClick}
					position={label.position}
				/>
			))}
		</main>
	)
}
