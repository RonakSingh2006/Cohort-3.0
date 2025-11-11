import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => {
      return async () => {
        const res = await axios.get(`https://dummyjson.com/todos/${id}`);
        return res.data.todo;
      }
    },
  })
});