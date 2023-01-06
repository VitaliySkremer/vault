import {IComposition} from "../../../Store/Composition";
import styles from './SelectComposition.module.scss'
import {useLayoutEffect, useRef, useState} from "react";
import {LessMore} from "../../UI/LessMore/LessMore";
interface ISelectCompProps {
  composition: IComposition;
}

export const SelectCompositionComponent = ({composition}:ISelectCompProps) => {

  const [isLess, setIsLess] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null)
  useLayoutEffect(()=>{
    if(ref.current) {
      setIsLess(ref.current?.offsetHeight>=120)
    }
  },[])


  return (
    <div className={styles.select__wrapper}>
      <img className={styles.img} src={composition.img} alt={composition.title}/>
      <p className={styles.title}>
        {composition.title}
      </p>
      <LessMore text={composition.body}/>
    </div>
  )
}