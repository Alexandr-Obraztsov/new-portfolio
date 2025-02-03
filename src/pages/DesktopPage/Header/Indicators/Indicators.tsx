import battery from '../../../../assets/icons/desktop/battery.png'
import microphone from '../../../../assets/icons/desktop/microphone.png'
import sound from '../../../../assets/icons/desktop/sound.png'
import wifi from '../../../../assets/icons/desktop/wifi.png'
import s from './Indicators.module.css'

export const Indicators = () => {
	return (
		<section className={s.indicators}>
			<img src={wifi} alt='wifi icon' />
			<img src={battery} alt='battery icon' />
			<img src={microphone} alt='microphone icon' />
			<img src={sound} alt='sound icon' />
			<div className={s.username}>Alexandr Obraztsov</div>
		</section>
	)
}
