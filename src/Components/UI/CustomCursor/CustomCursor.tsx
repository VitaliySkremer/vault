import { useEffect, useRef } from "react"
import styles from './Cursor.module.scss'
export const CustomCursor = () => {

  const cursor = useRef<HTMLDivElement>(null);

  useEffect(()=>{

    const moveCursor = (event: MouseEvent) =>{
      const mouseY = event.clientY;
      const mouseX = event.clientX;
      if(cursor.current){
        cursor.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    }

    window.addEventListener('mousemove', moveCursor);

  },[])

  return (
    <i ref={cursor} className={styles.cursor}>
    </i>
  )
}
