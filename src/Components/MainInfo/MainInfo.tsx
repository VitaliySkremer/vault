import styles from './MainInfo.module.scss'
import Composition from "../../Store/Composition";
import {observer} from "mobx-react-lite";
import {SelectCompositionComponent} from "./SelectCompositionComponent/SelectCompositionComponent";

export const MainInfo = observer(() => {
	return (
		<article className={styles.info__block}>
				{Composition.selectComposition
					?<SelectCompositionComponent composition={Composition.selectComposition}/>
					:<div>Выберите произведение</div>
				}
		</article>
	)
})