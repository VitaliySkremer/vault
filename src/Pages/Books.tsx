import { ListCompositions } from "../Components/ListCompositions/ListCompositions"
import Composition from "../Store/Composition"
import { observer } from "mobx-react-lite"
import { EKind } from "../Store/Types";

export const Books = observer(() => {

  const list = Composition.list.filter(item=>item.kind===EKind.BOOK);

  return (
    <ListCompositions listCompositions={list}/>
  )
})