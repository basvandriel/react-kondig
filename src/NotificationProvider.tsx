import React from "react";
import useNotificationQueue from "./useNotificationQueue";


const NotificationProvider = () => {
    const queue = useNotificationQueue()

    return (
        <>
            {queue.map((v, i) => <span key={i}>{v}</span>)}
        </>
    )
}

export default NotificationProvider