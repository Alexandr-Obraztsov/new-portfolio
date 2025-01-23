import { bindActionCreators } from 'redux'
import {
	closeWidget,
	openWidget,
	selectWidgets,
	setActiveWidget,
} from '../store/slices/widgetsSlice/widgetsSlice'
import { useAppDispatch } from './useAppDispatch'
import { useAppSelector } from './useAppSelector'

export const useWidgets = () => {
	const dispatch = useAppDispatch()
	const widgets = useAppSelector(selectWidgets)

	const actions = {
		openWidget: bindActionCreators(openWidget, dispatch),
		closeWidget: bindActionCreators(closeWidget, dispatch),
		setActiveWidget: bindActionCreators(setActiveWidget, dispatch),
	}

	return { widgets, ...actions }
}
