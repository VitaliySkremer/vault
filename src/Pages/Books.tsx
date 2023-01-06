import { ListCompositions } from "../Components/ListCompositions/ListCompositions"
import { EKind} from "../Store/Composition"
import Composition from "../Store/Composition"
import { observer } from "mobx-react-lite"

export const Books = observer(() => {

  const list = Composition.list.filter(item=>item.kind===EKind.BOOK);

  return (
    <>
      <ListCompositions listCompositions={list}/>
    </>
  )
})