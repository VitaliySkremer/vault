import {Button} from "../../UI/Button/Button";
import styles from '../Menu.module.scss'
export const WatchStatistics = () => {
	return (
		<>
			<Button style={{width:'100%'}}>
					<span className={styles.button__text}>
						Посмотреть статистику
					</span>
			</Button>
		</>
	)
}