import { RecoilRoot, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

// eslint-disable-next-line react/prop-types
function Todo({id}) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  
  return <div>{todo.state === 'loading' ? <h1>Loading....</h1> : todo.contents}</div>;
}

export default App
