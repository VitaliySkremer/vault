import {Input} from "../UI/Input/Input";
import {useState} from "react";
import styles from './AddedComposition.module.scss'
import {Button} from "../UI/Button/Button";
import {TextArea} from "../UI/TextArea/TextArea";
import { Radio } from "../UI/Radio/Radio";
export const AddedComposition = () => {
	const [img, setImg] = useState('');
	return (
		<div className={styles.wrapper}>
			<Input
				type='text'
				placeholder='Название произведения'
				style={{marginBottom:'15px'}}
			/>
			<Input
				type='text'
				value={img}
				onChange={(event)=> setImg(event.target.value)}
				placeholder='Укажите ссылку на фотографию'
				style={{marginBottom:'10px'}}
			/>
			<img
				className={styles.img}
				src={img}
				alt='Укажите url'
			/>
			<div className={styles.path__block}>
				<Input
					placeholder='Всего частей/серий'
					type='number'
					min='1'
					style={{marginRight:'10px'}}
				/>
				<Input
					placeholder='частей/серий просмотренно'
					type='number'
					min='0'
				/>
			</div>
			<TextArea
				placeholder='краткое описание'
				style={{marginBottom:'10px'}}
			/>
			<div>
				<Radio>
					Аниме
				</Radio>
				<Radio>
					Книга
				</Radio>
			</div>
			<Button>
				<span className={styles.button__text}>
					Добавить
				</span>
			</Button>
		</div>
	)
}