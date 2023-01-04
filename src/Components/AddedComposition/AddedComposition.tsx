import {Input} from "../UI/Input/Input";
import {useState} from "react";
import styles from './AddedComposition.module.scss'
import {Button} from "../UI/Button/Button";
import {TextArea} from "../UI/TextArea/TextArea";
import {EKind, EStatus} from "../../Store/Composition";
import {Select} from "../UI/Select/Select";

const selectKindList:Array<string> = [
	EKind.BOOK,
	EKind.Anime,
]

const selectStatusList:Array<string> = [
	EStatus.COMPLETED,
	EStatus.FUTURE,
	EStatus.PROCESS,
]
export const AddedComposition = () => {
	const [img, setImg] = useState('');
	const [kind, setKind] = useState<string>(EKind.Anime);
	const [status, setStatus] = useState<string>(EStatus.FUTURE);

	const setSelectKind = (item:string) =>{
		setKind(item);
	}

	const setSelectStatus = (item:string) =>{
		setStatus(item);
	}

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
					placeholder='частей/серий просмотрено'
					type='number'
					min='0'
				/>
			</div>
			<TextArea
				placeholder='краткое описание'
				style={{marginBottom:'15px'}}
			/>
			<div className={styles.select__block}>
				<Select choose={kind} list={selectKindList} setIsChoose={setSelectKind}/>
				<Select choose={status} list={selectStatusList} setIsChoose={setSelectStatus}/>
			</div>
			<Button>
				<span className={styles.button__text}>
					Добавить
				</span>
			</Button>
		</div>
	)
}