import { selector } from "recoil";
import { jobsAtom } from "../atoms/jobsAtom";
import { messageAtom } from "../atoms/messageAtom";
import { networkAtom } from "../atoms/NetworkAtom";
import { notificationAtom } from "../atoms/notificationAtom";

export const totalNotification = selector({
  key : "totalNotificationCount",
  get : ({get})=>{
    const jobCount = get(jobsAtom);
    const messageCount = get(messageAtom);
    const networkCount = get(networkAtom);
    const notificationCount = get(notificationAtom);

    return jobCount + messageCount + networkCount + notificationCount;
  }
})