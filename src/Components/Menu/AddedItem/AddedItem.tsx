import {Button} from "../../UI/Button/Button";
import styles from '../Menu.module.scss'
import {Modal} from "../../UI/Modal/Modal";
import {useState} from "react";
import {AddedComposition} from "../../AddedComposition/AddedComposition";
export const AddedItem = () => {
	const [isModal, setIsModal] = useState(false);

	const hendler = (event: React.MouseEvent) =>{
		event.stopPropagation()
		setIsModal(true);
	}

	const onClose = () =>{
		setIsModal(false)
	}

	return (
		<>
			<Button onClick={hendler} style={{width:'100%'}}>
					<span className={styles.button__text}>
						Добавить произведение
					</span>
			</Button>
			{isModal && (
				<Modal onClose={onClose}>
					<AddedComposition/>
				</Modal>
			)}
		</>
	)
}