import styles from './TextArea.module.scss'
import {TextareaHTMLAttributes} from "react";

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement>{
}

export const TextArea = ({...other}:ITextArea) => {
	return (
		<textarea className={styles.textarea} {...other}></textarea>
	)
}