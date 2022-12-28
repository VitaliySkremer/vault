import {HTMLAttributes, ReactNode} from "react";
import styles from './Button.module.scss'
interface IButtonProps extends HTMLAttributes<HTMLButtonElement>{
  children: ReactNode
}

export const Button = ({children, ...other}: IButtonProps) => {
  return (
    <button className={styles.btn__wrapper} {...other}>
      {children}
    </button>
  )
}