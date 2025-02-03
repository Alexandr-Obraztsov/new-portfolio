import me from '../../assets/icons/widgets/about/me.png'
import { BaseWidget } from '../../components/BaseWidget/BaseWidget'
import { WidgetProps } from '../types/WidgetProps.types'
import s from './About.module.css'

export const About = ({ widget }: WidgetProps) => {
	return (
		<BaseWidget title='About Me' widget={widget}>
			<img className={s.picture} src={me} alt='me' />
		</BaseWidget>
	)
}
