import {useState} from "react";
import styles from './Select.module.scss'
interface ISelectProps {
  choose: string;
  list: Array<string>;
  setIsChoose: (choose: string)=> void;
}

export const Select = ({choose, setIsChoose, list}:ISelectProps) => {
  const [isActive, setIsActive] = useState(false)

  const setChoose = (item: string)=> () =>{
    setIsChoose(item);
    setIsActive(false);
  }

  return (
    <div className={styles.select__form}>
      <button className={styles.button} onClick={()=>setIsActive(!isActive)}>
        <span>
          {choose}
        </span>
      </button>
      {isActive && (
        <ul className={styles.list}>
          {list.map(item=>
            <li key={item}>
              <button onClick={setChoose(item)}>
                {item}
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  )
}