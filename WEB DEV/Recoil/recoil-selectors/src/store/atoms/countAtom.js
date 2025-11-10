import {atom, selector} from 'recoil';
export const countAtom = atom({
  default : 0,
  key : "counter"
})

export const evenSelector = selector({
  key : "evenSelector",
  get : function({get}){
    const counter = get(countAtom);

    return counter%2 === 0;
  }
})