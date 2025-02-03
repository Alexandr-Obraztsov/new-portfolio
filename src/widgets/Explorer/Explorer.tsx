import { ReactNode } from 'react'
import { BaseWidget } from '../../components/BaseWidget/BaseWidget'
import { Label, LabelPropsType } from '../../components/Label/Label'
import { Widget } from '../types/Widget.types'
import s from './Explorer.module.css'
type Props = {
	header?: ReactNode
	title: string
	labels: LabelPropsType[]
	widget: Widget
}

export const Explorer = ({ header, title, labels, widget }: Props) => {
	return (
		<BaseWidget title={title} widget={widget}>
			{header}
			<div className={s.explorerContainer}>
				{labels.map(lb => (
					<Label
						key={lb.title}
						title={lb.title}
						imgSrc={lb.imgSrc}
						position={lb.position}
						onClick={lb.onClick}
						styles={{
							labelTitle: {
								fontSize: '16px',
								lineHeight: '16px',
							},
							label: { gap: '0px' },
						}}
					/>
				))}
			</div>
		</BaseWidget>
	)
}
