import React, { useCallback, useEffect, useRef, useState } from 'react'
import useSound from 'use-sound'
import back from '../../assets/icons/widgets/music/back.png'
import next from '../../assets/icons/widgets/music/next.png'
import pauseIcon from '../../assets/icons/widgets/music/pause.png'
import playIcon from '../../assets/icons/widgets/music/play.png'
import okeyImg from '../../assets/images/okey.jpg'
import wonderfulWorldImg from '../../assets/images/wonderfulworld.jpg'
import okey from '../../assets/music/okey.mp3'
import wonderfulWorld from '../../assets/music/wonderfulWorld.mp3'
import { BaseWidget } from '../../components/BaseWidget/BaseWidget'
import { WidgetProps } from '../types/WidgetProps.types'
import s from './Music.module.css'

const musics = [
	{
		name: 'Wonderful World',
		author: 'Louis Armstrong',
		src: wonderfulWorld,
		img: wonderfulWorldImg,
	},
	{
		name: 'Окей (Remix)',
		author: 'Тима Белорусских',
		src: okey,
		img: okeyImg,
	},
]

export const Music = ({ widget }: WidgetProps) => {
	const [isActive, setIsActive] = useState(false)
	const [progress, setProgress] = useState(0)
	const timelineRef = useRef<HTMLDivElement>(null)
	const [musicIndex, setMusicIndex] = useState(0)

	const [currTime, setCurrTime] = useState({
		min: '00',
		sec: '00',
	})

	const [play, { stop, pause, duration, sound }] = useSound(
		musics[musicIndex].src,
		{
			autoplay: isActive,
			onload: () => {
				stop()
				setProgress(0)
				setCurrTime({ min: '00', sec: '00' })
			},
			onend: () => {
				handleClickNext()
			},
		}
	)

	const handleClickPlay = () => {
		if (isActive) {
			pause()
			setIsActive(false)
		} else {
			play()
			setIsActive(true)
		}
	}

	const handleClickNext = () => {
		setMusicIndex(prev => (prev + 1) % musics.length)
	}

	const handleClickBack = () => {
		setMusicIndex(prev => (prev - 1 + musics.length) % musics.length)
	}

	const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		document.addEventListener('mousemove', handleMouseMove)
		document.addEventListener('mouseup', onMouseUp)
		handleMouseMove(e as unknown as MouseEvent)
		pause()
	}

	const getSoundPlayTime = useCallback(() => {
		const min = Math.floor(sound.seek([]) / 60)
		const sec = Math.floor(sound.seek([]) % 60)

		setCurrTime({
			min: min < 10 ? `0${min}` : `${min}`,
			sec: sec < 10 ? `0${sec}` : `${sec}`,
		})
	}, [sound, setCurrTime])

	const handleMouseMove = useCallback(
		(e: MouseEvent) => {
			const { left, width } = timelineRef.current!.getBoundingClientRect()
			const x = e.clientX - left
			const progress = Math.min(1, Math.max(0, x / width))
			setProgress(progress)
			if (sound) sound.seek([(progress * duration!) / 1000])
			getSoundPlayTime()
		},
		[duration, sound, getSoundPlayTime]
	)

	const onMouseUp = useCallback(() => {
		document.removeEventListener('mousemove', handleMouseMove)
		document.removeEventListener('mouseup', onMouseUp)
		if (sound && isActive) play()
	}, [handleMouseMove, sound, isActive, play])

	const handleCloseWidget = () => {
		stop()
		setIsActive(false)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (sound && duration) {
				getSoundPlayTime()
				setProgress((sound.seek([]) * 1000) / duration)
			}
		}, 1000)
		return () => clearInterval(interval)
	}, [sound, duration, getSoundPlayTime])

	return (
		<BaseWidget title='Music' widget={widget} onClose={handleCloseWidget}>
			<div className={s.musicContainer}>
				<div className={s.info}>
					<div
						className={s.musicPicture}
						style={{ backgroundImage: `url(${musics[musicIndex].img})` }}
					></div>
					<span className={s.musicTitle}>{musics[musicIndex].name}</span>
					<span className={s.musicAuthor}>{musics[musicIndex].author}</span>
				</div>
				<div className={s.controls}>
					<img src={back} alt='back' onClick={handleClickBack} />
					<img
						src={isActive ? pauseIcon : playIcon}
						alt='pause'
						onClick={handleClickPlay}
					/>
					<img src={next} alt='next' onClick={handleClickNext} />
				</div>
				<div className={s.timeline} ref={timelineRef} onMouseDown={onMouseDown}>
					<div className={s.progressBar}>
						<div
							className={s.progress}
							style={{ width: `${progress * 100}%` }}
						/>
					</div>
					<span className={s.currentTime}>
						{currTime.min}:{currTime.sec}
					</span>
				</div>
			</div>
		</BaseWidget>
	)
}
