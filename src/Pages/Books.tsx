import {EKind, EStatus, IComposition, ListCompositions} from "../Components/ListCompositions/ListCompositions";

const list:IComposition[] = [
  {id: 'dfhr', body:'123', img:'https://arhlib.ru/wp-content/uploads/2020/08/s1200-2.jpg', countParts: 4, totalCountParts: 10, rating: 3, title:'Война и мир', status: EStatus.COMPLETED, kind:EKind.BOOK},
  {id: 'dwf', body:'123', img:'https://i.ytimg.com/vi/_YsHaBInybQ/maxresdefault.jpg', countParts: 0, totalCountParts: 10, rating: 5, title:'Дом страха', status: EStatus.FUTURE, kind:EKind.BOOK},
  {id: 'уа', body:'123', img:'https://i.ytimg.com/vi/_YsHaBInybQ/maxresdefault.jpg', countParts: 0, totalCountParts: 10, rating: 4, title:'Дом страха', status: EStatus.FUTURE, kind:EKind.BOOK},
  {id: 'чссиа', body:'123', img:'https://i.ytimg.com/vi/_YsHaBInybQ/maxresdefault.jpg', countParts: 0, totalCountParts: 10, rating: 3, title:'Дом страха', status: EStatus.FUTURE, kind:EKind.BOOK},
  {id: 'вварва', body:'123', img:'https://i.ytimg.com/vi/_YsHaBInybQ/maxresdefault.jpg', countParts: 0, totalCountParts: 10, rating: 3, title:'Дом страха', status: EStatus.FUTURE, kind:EKind.BOOK},
  {id: 'dwвапывf', body:'123', img:'https://i.ytimg.com/vi/_YsHaBInybQ/maxresdefault.jpg', countParts: 0, totalCountParts: 10, rating: 3, title:'Дом страха', status: EStatus.FUTURE, kind:EKind.BOOK},
  {id: 'аыс', body:'123', img:'https://i.ytimg.com/vi/_YsHaBInybQ/maxresdefault.jpg', countParts: 0, totalCountParts: 10, rating: 3, title:'Дом страха', status: EStatus.FUTURE, kind:EKind.BOOK},
  {id: 'мывм', body:'123', img:'https://i.ytimg.com/vi/_YsHaBInybQ/maxresdefault.jpg', countParts: 0, totalCountParts: 10, rating: 3, title:'Дом страха', status: EStatus.FUTURE, kind:EKind.BOOK},
  {id: 'dчсмисмwf', body:'123', img:'https://i.ytimg.com/vi/_YsHaBInybQ/maxresdefault.jpg', countParts: 0, totalCountParts: 10, rating: 3, title:'Дом страха', status: EStatus.FUTURE, kind:EKind.BOOK},
  {id: 'смтмстмт', body:'123', img:'https://i.ytimg.com/vi/_YsHaBInybQ/maxresdefault.jpg', countParts: 0, totalCountParts: 10, rating: 3, title:'Дом страха', status: EStatus.FUTURE, kind:EKind.BOOK},
]

export const Books = () => {
  return (
    <>
      <ListCompositions listCompositions={list}/>
    </>
  )
}