import {Composition} from "./Composition/Composition";
import styles from './ListCompositions.module.scss'
export enum EStatus {
	COMPLETED = 'Завершён',
	PROCESS = 'В процессе',
	FUTURE = 'В планах'
}

export enum EKind {
	BOOK = 'Книга',
	Anime = 'Аниме',
}

export interface IComposition {
	id: string;
	title: string;
	img: string;
	body: string;
	rating: 1 | 2 | 3 | 4 | 5;
	totalCountParts: number;
	countParts: number;
	status: EStatus;
	kind: EKind;
}

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