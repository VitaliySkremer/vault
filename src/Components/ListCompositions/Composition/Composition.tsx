import styles from './Composition.module.scss'
import CompositionStore from "../../../Store/Composition";
import { EKind, IComposition } from '../../../Store/Types';

interface CompositionProps {
	composition: IComposition;
}

export const Composition = ({composition}:CompositionProps) => {
	const handleCLick = (item:IComposition) =>{
		CompositionStore.selectComp(item);
	}

	return (
		<button onClick={()=>handleCLick(composition)} className={styles.composition}>
			<img className={styles.img} src={composition.img} alt={composition.title}/>
			<div className={styles.body__block}>
				<span className={styles.title}>{composition.title}</span>
				<span className={styles.path}>{composition.kind === EKind.Anime ? 'Серий': 'Книг'} {composition.totalCountParts}</span>
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