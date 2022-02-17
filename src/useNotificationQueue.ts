import { useEffect } from "react";
import useNotificationStore from "./useNotificationStore";

const useNotificationQueue = () => {
    const queue = useNotificationStore(({ q }) => q)

    /**
     * Clear the timeouts on unmount
     */
    useEffect(() => {
        return () => queue.forEach(({ timer }) => timer && clearTimeout(timer['timeout']))
    }, [])
   
    return queue
}

export default useNotificationQueue