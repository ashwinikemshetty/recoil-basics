import { selector } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notifications,
  notificationsAtom,
  asyncNotifications,
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

export const totalNotificationSingleSelector = selector({
  key: "totalNotificationSingleSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});

export const asyncTotalNotificationSelector = selector({
  key: "asyncTotalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(asyncNotifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  },
});
