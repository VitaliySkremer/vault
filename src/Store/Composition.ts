import { makeAutoObservable } from "mobx";
import { IComposition } from "./Types";

class CompositionStore{

  list: IComposition[] = localStorage.Compositions ? JSON.parse(localStorage.Compositions) : []

  selectComposition: IComposition | null = localStorage.SelectComposition ? JSON.parse(localStorage.SelectComposition) : null;

  constructor(){
    makeAutoObservable(this)
  }

  addComposition(composition: IComposition){
    this.list.push(composition)
    localStorage.Compositions = JSON.stringify(this.list)
  }

  removeComposition(id: string){
    this.list = this.list.filter(item=> item.id !== id);
    this.selectComposition = null;
    localStorage.Compositions = JSON.stringify(this.list)
    localStorage.SelectComposition = JSON.stringify(null);
  }

  selectComp(composition:IComposition){
    this.selectComposition = composition;
    localStorage.SelectComposition = JSON.stringify(composition);
  }

  updateComposition(composition: IComposition){
    this.list = this.list.map(item=>{
      if(item.id===composition.id){
        return composition;
      }
      return item;
    })
    localStorage.Compositions = JSON.stringify(this.list)
  }

}
export default new CompositionStore();