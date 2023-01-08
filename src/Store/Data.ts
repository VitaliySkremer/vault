import { EKind, EStatus } from "./Types"

export const selectKindList:Array<EKind> = [
  EKind.BOOK,
  EKind.Anime,
]

export const selectStatusList:Array<EStatus> = [
  EStatus.COMPLETED,
  EStatus.FUTURE,
  EStatus.PROCESS,
  EStatus.ABANDONED,
  EStatus.POSTPONED
]