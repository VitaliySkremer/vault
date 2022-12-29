import React, {ReactNode, useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import styles from './Modal.module.scss'

interface IModal {
	children:ReactNode;
	onClose: ()=> void;
}

export const Modal = ({children, onClose}:IModal) => {
	const node = document.getElementById('modal');
	const ref = useRef<HTMLDivElement>(null)

	useEffect(()=>{
		function handler(event: MouseEvent){
			if(event.target === ref.current){
				onClose();
			}
		}

		document.addEventListener('click', handler)

		return ()=>{
			document.removeEventListener('click', handler)
		}
	}, [])

	if(!node) return null;

	return ReactDOM.createPortal((
			<div ref={ref} className={styles.modal}>
				<div className={styles.modal__block}>
					{children}
				</div>
			</div>
		), node)
}