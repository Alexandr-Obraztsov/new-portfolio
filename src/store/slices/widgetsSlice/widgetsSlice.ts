import { createSlice } from '@reduxjs/toolkit'
import { v1 } from 'uuid'
import { Widget, WidgetType } from '../../../widgets/types/Widget.types'

const initialState = {
	widgets: [] as Widget[],
}

export const widgetsSlice = createSlice({
	name: 'widgets',
	initialState,
	reducers: creator => {
		return {
			openWidget: creator.reducer<{ type: WidgetType }>((state, action) => {
				const id = v1()
				state.widgets.forEach(widget => (widget.isActive = false))
				state.widgets.push({
					id,
					isActive: true,
					type: action.payload.type,
				})
			}),

			closeWidget: creator.reducer<{ id: string }>((state, action) => {
				const index = state.widgets.findIndex(w => w.id === action.payload.id)
				if (index !== -1) state.widgets.splice(index, 1)
			}),

			setActiveWidget: creator.reducer<{ id: string }>((state, action) => {
				state.widgets.forEach(
					widget => (widget.isActive = widget.id === action.payload.id)
				)
			}),
		}
	},
	selectors: {
		selectWidgets: state => state.widgets,
	},
})

export const { openWidget, closeWidget, setActiveWidget } = widgetsSlice.actions
export const actions = { openWidget, closeWidget }
export const { selectWidgets } = widgetsSlice.selectors
