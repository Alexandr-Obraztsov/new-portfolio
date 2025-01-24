import { useWidgets } from '../../hooks/useWidgets'
import { About } from '../../widgets/About/About'
import { Contact } from '../../widgets/Contact/Contact'
import { Explorer } from '../../widgets/Explorer/Explorer'
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
			[WidgetType.PROJECTS]: Explorer,
			[WidgetType.TRASH]: Explorer,
		}

		const WidgetComponent = widgetsMap[widget.type]

		if (!WidgetComponent) {
			throw new Error(`Unknown widget type: ${widget.type}`)
		}

		return <WidgetComponent key={widget.id} widget={widget} />
	})
}
