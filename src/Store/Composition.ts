import { makeAutoObservable } from "mobx";

export enum EStatus {
  COMPLETED = 'Завершён',
  PROCESS = 'В процессе',
  FUTURE = 'В планах'
}

export enum EKind {
  BOOK = 'Книга',
  Anime = 'Аниме',
}

export interface IComposition {
  id: string;
  title: string;
  img: string;
  body: string;
  rating: 1 | 2 | 3 | 4 | 5;
  totalCountParts: number;
  countParts: number;
  status: EStatus;
  kind: EKind;
}

class Composition{

  list: IComposition[] = [
    { id: 'dfhr', body: '123', img: 'https://arhlib.ru/wp-content/uploads/2020/08/s1200-2.jpg', countParts: 4, totalCountParts: 10, rating: 3, title: 'Война и мир', status: EStatus.COMPLETED, kind: EKind.BOOK },
    { id: 'dfhr', body: '123', img: 'https://oxvo.ru/wp-content/uploads/2018/07/ataka-titanov-3.jpg', countParts: 4, totalCountParts: 10, rating: 3, title: 'Атака титанов', status: EStatus.COMPLETED, kind: EKind.Anime },
    { id: 'dwf', body: '123', img: 'https://slovnet.ru/wp-content/uploads/2019/07/1-2.jpg', countParts: 0, totalCountParts: 10, rating: 5, title: 'Ван пачмен', status: EStatus.FUTURE, kind: EKind.Anime },
  ]


  constructor(){
    makeAutoObservable(this)
  }

  addComposition(composition: IComposition){
    this.list.push(composition)
  }

  removeComposition(id: string){
    this.list = this.list.filter(item=> item.id !== id);
  }
}

export default new Composition();