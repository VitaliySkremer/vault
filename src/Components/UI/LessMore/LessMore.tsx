import {useLayoutEffect, useRef, useState} from "react";
import styles from './LessMore.module.scss'

export const LessMore = ({text}:{text:string}) => {
  const [isLessMore, setIsLessMore] = useState(false);
  const [hide, setHide] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null)
  useLayoutEffect(()=>{
    setIsLessMore(false);
    setHide(false);
    setIsLessMore(text.length >= 150)
  },[text])

  return (
    <>
      <p ref={ref} className={[styles.body, isLessMore && !hide?styles.body__less:''].join(' ')}>
        {text}
      </p>
      {isLessMore &&(
        <button className={styles.button} onClick={()=> setHide(!hide)}>
          {hide ? 'Скрыть':'Показать больше'}
        </button>
      )}
    </>
  )
}