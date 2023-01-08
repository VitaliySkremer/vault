import { observer } from "mobx-react-lite"
import { ListCompositions } from "../Components/ListCompositions/ListCompositions"
import Composition from "../Store/Composition"
import { EKind } from "../Store/Types"

export const Anime = observer(() => {
  return (
    <ListCompositions listCompositions={Composition.list.filter(item=>item.kind===EKind.Anime)}/>
  )
})