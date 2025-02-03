import about from '@/assets/icons/desktop/about.png'
import dino from '@/assets/icons/desktop/dino.png'
import folder from '@/assets/icons/desktop/folder.png'
import letter from '@/assets/icons/desktop/letter.png'
import music from '@/assets/icons/desktop/music.png'
import trash from '@/assets/icons/desktop/trash.png'
import { Label, LabelPropsType } from '@/components/Label/Label'
import { useWidgets } from '@/hooks/useWidgets'
import { WidgetType } from '@/widgets/types/Widget.types'
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
		title: 'Google Dino',
		imgSrc: dino,
		widgetType: WidgetType.GAME,
		position: { x: 2, y: 1 },
	},
	{
		title: 'Contact',
		imgSrc: letter,
		widgetType: WidgetType.CONTACT,
		position: { x: 1, y: 3 },
	},
	{
		title: 'Projects',
		imgSrc: folder,
		widgetType: WidgetType.PROJECTS,
		position: { x: 1, y: 2 },
	},
	{
		title: 'Music',
		imgSrc: music,
		widgetType: WidgetType.MUSIC,
		position: { x: 1, y: 4 },
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
