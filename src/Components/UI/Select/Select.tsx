import {useState} from "react";
import styles from './Select.module.scss'
import {EKind, EStatus} from "../../../Store/Composition";
interface ISelectProps<T> {
  choose: string;
  list: Array<T>;
  setIsChoose: (choose: T)=> void;
}

export const Select = ({choose, setIsChoose, list}:ISelectProps<any>) => {
  const [isActive, setIsActive] = useState(false)

  const setChoose = (item: EStatus | EKind)=> () =>{
    setIsChoose(item);
    setIsActive(false);
  }

  return (
    <div className={styles.select__form}>
      <button className={styles.button} onClick={()=>setIsActive(!isActive)}>
        <span>
          {choose}
        </span>
        <svg className={isActive?styles.isActive: ''} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 9L8 2L15 9" stroke="var(--main-color)" strokeWidth="2"/>
        </svg>
      </button>
      {isActive && (
        <ul className={styles.list}>
          {list.map(item=>
            <li key={item}>
              <button onClick={setChoose(item)} disabled={item===choose}>
                {item}
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  )
}