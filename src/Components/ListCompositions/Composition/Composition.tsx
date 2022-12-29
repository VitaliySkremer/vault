import {EKind, IComposition} from "../ListCompositions";
import styles from './Composition.module.scss'

interface CompositionProps {
	composition: IComposition;
}

export const Composition = ({composition}:CompositionProps) => {
	return (
		<button className={styles.composition}>
			<img className={styles.img} src={composition.img} alt={composition.title}/>
			<div className={styles.body__block}>
				<span className={styles.title}>{composition.title}</span>
				<span className={styles.path}>{composition.kind === EKind.Anime ? 'просмотренно': 'прочитанно'} {composition.countParts} из {composition.totalCountParts}</span>
			</div>
			<span className={styles.status}>{composition.status}</span>
			<div className={styles.rating}>
				{new Array(composition.rating).fill(' ').map((item, index)=>
					<span key={index}>&#9733;</span>
				)}
			</div>
		</button>
	)
}