import styles from './Menu.module.scss'
import {AddedItem} from "./AddedItem/AddedItem";
import {WatchStatistics} from "./WatchStatistics/WatchStatistics";
import {ReactNode} from "react";

interface IMenuList {
	component:ReactNode;
}

const menuList:IMenuList[] = [
	{component: <AddedItem/>},
	{component: <WatchStatistics/>},
]

export const Menu = () => {
	return (
		<ul className={styles.menu}>
			{menuList.map((item,index)=>
				<li key={index} className={styles.menu_item}>
					{item.component}
				</li>
			)}
		</ul>
	)
}