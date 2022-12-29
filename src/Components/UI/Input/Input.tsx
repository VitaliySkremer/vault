import {FC, InputHTMLAttributes} from "react";
import styles from './Input.module.scss'
interface IInput extends InputHTMLAttributes<HTMLInputElement>{
}

export const Input:FC<IInput> = ({...other}) => {
	return (
		<input {...other} className={styles.input}/>
	)
}