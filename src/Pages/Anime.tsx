import { observer } from "mobx-react-lite"
import { ListCompositions } from "../Components/ListCompositions/ListCompositions"
import { EKind} from "../Store/Composition"
import Composition from "../Store/Composition"

export const Anime = observer(() => {
  return (
    <>
      <ListCompositions listCompositions={Composition.list.filter(item=>item.kind===EKind.Anime)}/>
    </>
  )
})