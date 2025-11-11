import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) =>{
      return async () => {
        
        // await new Promise(r => setTimeout(r, 5000));
        const res = await axios.get(`https://dummyjson.com/todos/${id}`);
        console.log(res.data.todo);
        return res.data.todo;
      }
    }
  })
});