import { IComposition } from "../../Store/Composition";
import {Composition} from "./Composition/Composition";
import styles from './ListCompositions.module.scss'


interface IListCompositionsProps {
	listCompositions: IComposition[]
}

export const ListCompositions = ({listCompositions}:IListCompositionsProps) => {
	return (
		<ul>
			{listCompositions.map(item=>
				<li key={item.id} className={styles.list__item}>
					<Composition composition={item}/>
				</li>
			)}
		</ul>
	)
}