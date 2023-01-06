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
  rating: number;
  totalCountParts: number;
  countParts: number;
  status: EStatus;
  kind: EKind;
}

class CompositionStore{

  list: IComposition[] = [
    { id: 'dfhr', body: '123', img: 'https://arhlib.ru/wp-content/uploads/2020/08/s1200-2.jpg', countParts: 4, totalCountParts: 10, rating: 3, title: 'Война и мир', status: EStatus.COMPLETED, kind: EKind.BOOK },
    { id: 'dfhr', body: 'Уже многие годы человечество ведёт борьбу с титанами — огромными существами, которые не обладают особым интеллектом, зато едят людей и получают от этого удовольствие. После продолжительной борьбы остатки человечества построили высокую стену, окружившую страну людей, через которую титаны пройти не могли. С тех пор прошло сто лет, люди мирно живут под защитой стены. Но однажды подросток Эрэн и его сводная сестра Микаса становятся свидетелями страшного события — участок стены разрушается супертитаном, появившимся прямо из воздуха. Титаны нападают на город, и дети в ужасе видят, как один из монстров заживо съедает их мать. Эрэн клянётся, что убьёт всех титанов и отомстит за человечество.', img: 'https://oxvo.ru/wp-content/uploads/2018/07/ataka-titanov-3.jpg', countParts: 4, totalCountParts: 10, rating: 3, title: 'Атака титанов', status: EStatus.COMPLETED, kind: EKind.Anime },
    { id: 'dwf', body: '123', img: 'https://slovnet.ru/wp-content/uploads/2019/07/1-2.jpg', countParts: 0, totalCountParts: 10, rating: 5, title: 'Ван пачмен', status: EStatus.FUTURE, kind: EKind.Anime },
  ]

  selectComposition:IComposition | null = null;

  constructor(){
    makeAutoObservable(this)
  }

  addComposition(composition: IComposition){
    this.list.push(composition)
  }

  removeComposition(id: string){
    this.list = this.list.filter(item=> item.id !== id);
  }

  selectComp(composition:IComposition){
    this.selectComposition = composition;
  }

}
export default new CompositionStore();