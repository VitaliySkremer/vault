import styles from './Rating.module.scss'
interface IRatingProps {
  countStars: number;
  rating: number;
  setRating:(rating:number)=> void;
  icon: string;
}

export const Rating = ({countStars,rating,setRating,icon}:IRatingProps) => {

  return (
    <ul className={styles.rating__list}>
      {new Array(countStars).fill(null).map((item,index)=>
        <button
          key={index}
          className={[styles.rating, index+1<=rating?styles.rating__active:''].join(' ')}
          onClick={()=>setRating(index+1)}
        >{icon}
        </button>
      )}
    </ul>
  )
}