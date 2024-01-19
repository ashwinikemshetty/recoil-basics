import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
} from "./recoil/atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const messagingCount = useRecoilValue(messagingAtom);

  const totalCount =
    networkCount + jobsCount + notificationsCount + messagingCount;

  return (
    <>
      <button>Home</button>
      <button>My network ({networkCount > 99 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notifications ({notificationsCount})</button>
      <button>Me ({totalCount})</button>
    </>
  );
}

export default App;
