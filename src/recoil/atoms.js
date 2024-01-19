import { atom } from "recoil";

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
