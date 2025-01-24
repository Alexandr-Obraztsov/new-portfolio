import projects from '../../assets/icons/projects.png'
import { BaseWidget } from '../../components/BaseWidget/BaseWidget'
import { Label } from '../../components/Label/Label'
import { Widget } from '../types/Widget.types'
import s from './Explorer.module.css'
type Props = {
	widget: Widget
}

export const Explorer = ({ widget }: Props) => {
	const createLabel = (
		title: string,
		imgSrc: string,
		position: { x: number; y: number }
	) => (
		<Label
			title={title}
			imgSrc={imgSrc}
			position={position}
			styles={{
				labelTitle: {
					color: '#6666667a',
					fontSize: '16px',
					lineHeight: '16px',
				},
				label: { gap: '0px' },
			}}
		/>
	)

	return (
		<BaseWidget title='Explorer' widget={widget}>
			<div className={s.explorerContainer}>
				{Array(5)
					.fill(null)
					.map((_, index) =>
						createLabel(`label ${index}`, projects, { x: index + 1, y: 1 })
					)}
			</div>
		</BaseWidget>
	)
}
