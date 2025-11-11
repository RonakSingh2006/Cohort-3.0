import { RecoilRoot, useRecoilValue} from 'recoil';
import { todosAtomFamily } from './atoms';
import { Suspense } from 'react';

function App() {
  return <RecoilRoot>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Todo id={1}/>
      <Todo id={2} />
      <Todo id={3}/>
      <Todo id={100} />
    </Suspense>
  </RecoilRoot>
}

// eslint-disable-next-line react/prop-types
function Todo({id}) {
  const todo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {todo}
      <br />
    </>
  )
}

export default App
