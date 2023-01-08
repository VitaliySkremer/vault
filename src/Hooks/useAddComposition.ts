import {useState} from "react";
import { EKind, EStatus, IComposition } from "../Store/Types";
import Composition from "../Store/Composition";

export const useAddComposition = (onClose: ()=>void)=>{
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [img, setImg] = useState('');
  const [totalCountParts, setTotalCountParts] = useState('');
  const [kind, setKind] = useState<EKind>(EKind.Anime);
  const [status, setStatus] = useState<EStatus>(EStatus.FUTURE);
  const [rating,setRating] = useState<number>(1);

  const setSelectKind = (item:EKind) =>{
    setKind(item);
  }

  const setSelectStatus = (item:EStatus) =>{
    setStatus(item);
  }

  const handlerRating = (rat: number)=>{
    setRating(rat)
  }

  const addComposition = () =>{
    const composition:IComposition = {
      id: Math.random().toString(7),
      title,
      img,
      body,
      rating,
      totalCountParts: Number(totalCountParts),
      status,
      kind
    }

    Composition.addComposition(composition);
    if(onClose) onClose();
  }

  return {
    title,
    setTitle,
    img,
    setImg,
    totalCountParts,
    setTotalCountParts,
    body,
    setBody,
    kind,
    setSelectKind,
    status,
    setSelectStatus,
    rating,
    handlerRating,
    addComposition
  }
}