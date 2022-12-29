import {EKind, EStatus, IComposition, ListCompositions} from "../Components/ListCompositions/ListCompositions";

const list:IComposition[] = [
  {id: 'dfhr', body:'123', img:'https://oxvo.ru/wp-content/uploads/2018/07/ataka-titanov-3.jpg', countParts: 4, totalCountParts: 10, rating: 3, title:'Атака титанов', status: EStatus.COMPLETED, kind:EKind.Anime},
  {id: 'dwf', body:'123', img:'https://slovnet.ru/wp-content/uploads/2019/07/1-2.jpg', countParts: 0, totalCountParts: 10, rating: 5, title:'Ван пачмен', status: EStatus.FUTURE, kind:EKind.Anime},
]

export const Anime = () => {
  return (
    <>
      <ListCompositions listCompositions={list}/>
    </>
  )
}