import styles from './MainInfo.module.scss'
import Composition from "../../Store/Composition";
import {observer} from "mobx-react-lite";
import {SelectCompositionComponent} from "./SelectCompositionComponent/SelectCompositionComponent";

export const MainInfo = observer(() => {
	const composition = Composition.selectComposition;

	return (
		<article className={styles.info__block}>
				{composition
					?<SelectCompositionComponent composition={composition}/>
					:<div>Выберите произведение</div>
				}
		</article>
	)
})