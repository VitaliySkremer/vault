import { IComposition } from "../../Store/Composition";
import {Composition} from "./Composition/Composition";
import styles from './ListCompositions.module.scss'
import {useEffect, useState} from "react";
import {Input} from "../UI/Input/Input";


interface IListCompositionsProps {
	listCompositions: IComposition[]
}

export const ListCompositions = ({listCompositions}:IListCompositionsProps) => {

	const [listFind, setListFind] = useState(listCompositions)
	const [text, setText] = useState('')

	useEffect(()=>{
		const test = listCompositions.filter(item=>item.title.toLowerCase().includes(text.toLowerCase()));
		setListFind(test)
	},[text,listCompositions])

	return (
		<>
			<Input
				placeholder='Поиск по названию'
				style={{marginBottom:'15px'}}
				value={text}
				onChange={(event)=> setText(event.target.value)}
			/>
			<ul>
				{listFind.map(item=>
					<li key={item.id} className={styles.list__item}>
						<Composition composition={item}/>
					</li>
				)}
			</ul>
		</>
	)
}