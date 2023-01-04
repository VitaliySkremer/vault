import {InputHTMLAttributes, ReactNode} from 'react'
import styles from './Radio.module.scss'
interface IRadio extends InputHTMLAttributes<HTMLInputElement>{
  children: ReactNode;
}

export const Radio = ({children,...other}: IRadio) => {
  return (
    <label className={styles.label}>
      <input className={styles.input} type="radio" {...other}/>
      <span className={styles.span}>
        {children}
      </span>
    </label>
  )
}
