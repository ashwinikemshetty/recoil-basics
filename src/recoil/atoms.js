import { atom, selector } from "recoil";
import axios from "axios";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 0,
});

export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const notifications = atom({
  key: "notifications",
  default: {
    network: 0,
    jobs: 0,
    notifications: 0,
    messaging: 0,
  },
});

export const asyncNotifications = atom({
  key: "asyncNotifications",
  default: selector({
    key: "asyncNotificationSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});
