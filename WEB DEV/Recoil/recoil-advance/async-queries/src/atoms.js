import { atom, selector } from "recoil";
import axios from "axios"

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key : "getDataFormServer",
        get : async ()=>{
            const res = await axios.get("http://127.0.0.1:3000");
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.network + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})