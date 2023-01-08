export enum EStatus {
  COMPLETED = 'Завершён',
  PROCESS = 'В процессе',
  FUTURE = 'Запланировано',
  ABANDONED = 'Брошено',
  POSTPONED = 'Отложено'
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
  status: EStatus;
  kind: EKind;
}