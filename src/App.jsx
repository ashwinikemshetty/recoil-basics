import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notifications,
  notificationsAtom,
} from "./recoil/atoms";
import {
  asyncTotalNotificationSelector,
  totalNotificationSelector,
  totalNotificationSingleSelector,
} from "./recoil/selectors";
import { useEffect } from "react";
import axios from "axios";

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

  const totalCount = useRecoilValue(totalNotificationSelector);

  // From API

  const [totalNotificationsCount, setTotalNotificationsCount] =
    useRecoilState(notifications);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
      setTotalNotificationsCount(res.data);
    });
  }, []);
  const totalCountFromSingle = useRecoilValue(totalNotificationSingleSelector);

  // async notifications from API
  const asyncNotificationsCount = useRecoilValue(
    asyncTotalNotificationSelector
  );
  return (
    <>
      <button>Home</button>
      <button>My network ({networkCount > 99 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notifications ({notificationsCount})</button>
      <button>Me ({totalCount})</button>
      <button>Me From API ({totalCountFromSingle})</button>
      <button>Me From API async ({asyncNotificationsCount})</button>
    </>
  );
}

export default App;
