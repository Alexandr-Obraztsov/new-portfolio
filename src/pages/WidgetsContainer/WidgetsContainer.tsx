import { useWidgets } from '../../hooks/useWidgets'
import { About } from '../../widgets/About/About'
import { Contact } from '../../widgets/Contact/Contact'
import { Music } from '../../widgets/Music/Music'
import { Trash } from '../../widgets/Trash/Trash'
import { WidgetType } from '../../widgets/types/Widget.types'
import { WidgetProps } from '../../widgets/types/WidgetProps.types'

export const WidgetsContainer = () => {
	const { widgets } = useWidgets()

	return widgets.map(widget => {
		const widgetsMap: Record<
			WidgetType,
			({ widget }: WidgetProps) => JSX.Element
		> = {
			[WidgetType.ABOUT]: About,
			[WidgetType.CONTACT]: Contact,
			[WidgetType.TRASH]: Trash,
			[WidgetType.MUSIC]: Music,
			[WidgetType.PROJECTS]: Trash,
			[WidgetType.SKILLS]: Trash,
		}

		const WidgetComponent = widgetsMap[widget.type]

		if (!WidgetComponent) {
			throw new Error(`Unknown widget type: ${widget.type}`)
		}

		return <WidgetComponent key={widget.id} widget={widget} />
	})
}
