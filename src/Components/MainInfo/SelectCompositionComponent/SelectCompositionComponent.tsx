import {EStatus, IComposition} from "../../../Store/Composition";
import styles from './SelectComposition.module.scss'
import {useLayoutEffect, useState} from "react";
import {LessMore} from "../../UI/LessMore/LessMore";
import {Rating} from "../../UI/Rating/Rating";
import {Select} from "../../UI/Select/Select";
import {selectStatusList} from "../../../Store/Data";
import { Button } from "../../UI/Button/Button";
import Composition from "../../../Store/Composition";

interface ISelectCompProps {
  composition: IComposition;
}

export const SelectCompositionComponent = ({composition}:ISelectCompProps) => {
  const [rating,setRating] = useState<number>(composition.rating);
  const [status, setStatus] = useState<EStatus>(composition.status);

  useLayoutEffect(()=>{
    setRating(composition.rating);
    setStatus(composition.status)
  }, [composition])

  const setSelectStatus = (item:EStatus) =>{
    setStatus(item);
  }

  const deleteComp = () =>{
    Composition.removeComposition(composition.id);
  }

  return (
    <div className={styles.select__wrapper}>
      <img className={styles.img} src={composition.img} alt={composition.title}/>
      <p className={styles.title}>
        {composition.title}
      </p>
      <div className={styles.wrapper__block}>
        <LessMore text={composition.body}/>
      </div>
      <div className={styles.wrapper__block}>
        <Select
          choose={status}
          list={selectStatusList}
          setIsChoose={setSelectStatus}
        />
      </div>
      <div className={styles.wrapper__block}>
        <Rating countStars={5} rating={rating} setRating={setRating} icon='★'/>
      </div>
      <div>
        <Button style={{marginRight: '10px'}}>Сохранить</Button>
        <Button onClick={deleteComp}>Удалить</Button>
      </div>
    </div>
  )
}