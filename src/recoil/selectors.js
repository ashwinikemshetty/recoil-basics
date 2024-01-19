import { selector } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
} from "./atoms";

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkCount = get(networkAtom);
    const jobsCount = get(jobsAtom);
    const messagingCount = get(messagingAtom);
    const notificationCount = get(notificationsAtom);
    return networkCount + jobsCount + messagingCount + notificationCount;
  },
});
