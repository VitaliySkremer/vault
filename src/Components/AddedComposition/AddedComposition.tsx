import {Input} from "../UI/Input/Input";
import styles from './AddedComposition.module.scss'
import {Button} from "../UI/Button/Button";
import {TextArea} from "../UI/TextArea/TextArea";
import {Select} from "../UI/Select/Select";
import {Rating} from "../UI/Rating/Rating";
import {useAddComposition} from "../../Hooks/useAddComposition";
import { selectKindList, selectStatusList } from "../../Store/Data";

interface IAddedCompositionProps {
	onClose?: ()=>void;
}

export const AddedComposition = ({onClose = ()=>{}}:IAddedCompositionProps) => {

	const {
		title,
		setTitle,
		img,
		setImg,
		totalCountParts,
		setTotalCountParts,
		countParts,
		setCountParts,
		body,
		setBody,
		kind,
		setSelectKind,
		status,
		setSelectStatus,
		rating,
		handlerRating,
		addComposition
	} = useAddComposition(onClose);

	return (
		<div className={styles.wrapper}>
			<Input
				type='text'
				placeholder='Название произведения'
				style={{marginBottom:'15px'}}
				value={title}
				onChange={(event)=>setTitle(event.target.value)}
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
					value={totalCountParts}
					onChange={(event)=>setTotalCountParts(event.target.value)}
				/>
				<Input
					placeholder='частей/серий просмотрено'
					type='number'
					min='0'
					value={countParts}
					onChange={(event)=>setCountParts(event.target.value)}
				/>
			</div>
			<TextArea
				placeholder='краткое описание'
				style={{marginBottom:'15px'}}
				value={body}
				onChange={(event)=> setBody(event.target.value)}
			/>
			<div className={styles.select__block}>
				<Select choose={kind} list={selectKindList} setIsChoose={setSelectKind}/>
				<Select choose={status} list={selectStatusList} setIsChoose={setSelectStatus}/>
			</div>
			<div className={styles.rating__block}>
				<Rating icon='★' rating={rating} countStars={5} setRating={handlerRating}/>
			</div>
			<Button onClick={addComposition}>
				<span className={styles.button__text}>
					Добавить
				</span>
			</Button>
		</div>
	)
}