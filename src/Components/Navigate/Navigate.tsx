import {Button} from "../UI/Button/Button";
import styles from "./Navigate.module.scss";
import {Link} from "react-router-dom";

export const Navigate = () => {
  return (
    <nav className={styles.nav}>
      <Link to='/'>
        <Button>
          <span className={styles.nav__text}>
            Главная
          </span>
        </Button>
      </Link>
      <Link to='/anime'>
        <Button>
          <span className={styles.nav__text}>
            Аниме
          </span>
        </Button>
      </Link>
      <Link to='/books'>
        <Button>
          <span className={styles.nav__text}>
            Книги
          </span>
        </Button>
      </Link>
    </nav>
  )
}