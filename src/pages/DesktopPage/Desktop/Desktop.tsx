import about from '../../../assets/icons/about.png'
import contact from '../../../assets/icons/contact.png'
import document from '../../../assets/icons/document.png'
import projects from '../../../assets/icons/projects.png'
import trash from '../../../assets/icons/trash.png'
import { Label, LabelPropsType } from '../../../components/Label/Label'
import { useWidgets } from '../../../hooks/useWidgets'
import { WidgetType } from '../../../widgets/types/Widget.types'
import s from './Desktop.module.css'

type LabelType = Omit<LabelPropsType, 'onClick'> & { widgetType: WidgetType }

const labels: LabelType[] = [
	{
		title: 'About me',
		imgSrc: about,
		widgetType: WidgetType.ABOUT,
		position: { x: 1, y: 1 },
	},
	{
		title: 'Contact',
		imgSrc: contact,
		widgetType: WidgetType.CONTACT,
		position: { x: 1, y: 3 },
	},
	{
		title: 'Skills',
		imgSrc: document,
		widgetType: WidgetType.SKILLS,
		position: { x: 1, y: 2 },
	},
	{
		title: 'Projects',
		imgSrc: projects,
		widgetType: WidgetType.PROJECTS,
		position: { x: 2, y: 1 },
	},
	{
		title: 'Trash',
		imgSrc: trash,
		widgetType: WidgetType.TRASH,
		position: { x: -2, y: -2 },
	},
]

export const Desktop = () => {
	const { widgets, openWidget } = useWidgets()

	const handleClick = (widgetType: WidgetType) => () => {
		openWidget({ type: widgetType })
	}

	return (
		<main className={s.desktop}>
			{labels.map(label => (
				<Label
					key={label.title}
					title={label.title}
					imgSrc={label.imgSrc}
					onClick={handleClick(label.widgetType)}
					position={label.position}
				/>
			))}
		</main>
	)
}
