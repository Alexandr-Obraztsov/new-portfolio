import folder from '../../assets/icons/desktop/folder.png'
import { Explorer } from '../Explorer/Explorer'
import { WidgetProps } from '../types/WidgetProps.types'

export const Trash = ({ widget }: WidgetProps) => {
	return (
		<Explorer
			widget={widget}
			title='Trash'
			labels={[
				{
					title: 'Trash 01',
					imgSrc: folder,
					position: { x: 1, y: 1 },
					onClick: () => {
						console.log('onclick')
					},
				},
			]}
		/>
	)
}
