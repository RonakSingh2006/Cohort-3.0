import { RecoilRoot, useRecoilValue } from "recoil"
import { networkAtom } from "./store/atoms/NetworkAtom"
import { jobsAtom } from "./store/atoms/jobsAtom";
import { messageAtom } from "./store/atoms/messageAtom";
import { notificationAtom } from "./store/atoms/notificationAtom";
import { totalNotification } from "./store/selectors/totalNotification";
function App() {

  return <>

    <RecoilRoot>
      <div>Home</div>

      <MyNetwork/>
      <Jobs/>
      <Messages/>
      <Notifications/>

      <Me/>

    </RecoilRoot>


  </>
}

function MyNetwork(){
  const networkCount = useRecoilValue(networkAtom);

  return <div>My Network ({getVal(networkCount)}) </div>
}

function Jobs(){
  const jobCount = useRecoilValue(jobsAtom);
  return <div>Jobs ({getVal(jobCount)}) </div>
}

function Messages(){
  const messageCount = useRecoilValue(messageAtom);
  return <div>Messages ({getVal(messageCount)}) </div>
}

function Notifications(){
  const notificationCount = useRecoilValue(notificationAtom);
  return <div>Notifications ({getVal(notificationCount)})</div>
}


function Me(){
  const totalCount = useRecoilValue(totalNotification);

  return <div>Total : ({totalCount})</div>
}

function getVal(val){
  return val >= 100 ? "99+" : val;
}

export default App
