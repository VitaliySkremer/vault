import {useLayoutEffect, useRef, useState} from "react";
import styles from './LessMore.module.scss'

export const LessMore = ({text}:{text:string}) => {
  const [isLessMore, setIsLessMore] = useState(false);
  const [hide, setHide] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null)
  useLayoutEffect(()=>{
    if(ref.current) {
      setIsLessMore(ref.current?.offsetHeight>=120)
    }
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