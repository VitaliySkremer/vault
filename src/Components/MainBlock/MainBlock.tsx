import styles from './MainBlock.module.scss'

export const MainBlock = () => {
	return (
		<div className={styles.main}>
			<p>
				Привет, друг надеюсь сегодня ты был хорошим мальчиком и стал хотяб на капельку лучше чем вчера&#9786;
			</p>
			<p>
				тут ты можешь вести статистику по прочитанным книгам и просмотренным аниме, а также внести свои аниме, который хочешь увидеть в будущем!
			</p>
			<p>
				Удачи тебе, друг!!
			</p>
		</div>
	)
}