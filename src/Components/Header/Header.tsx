import styles from './Header.module.scss'
import {Navigate} from "../Navigate/Navigate";


export const Header = () => {
  return (
    <header className={styles.header}>
      <Navigate/>
    </header>
  )
}