import styles from './Snow.module.scss'

const SnowList:any[] = new Array(150).fill('');

export const Snow = () => {
  return (
    <>
      {SnowList.map((item, index)=>
        <span key={index} className={styles.snow}/>
      )}
    </>
  )
}