import useNotificationStore from "./useNotificationStore";

const useNotificationQueue = () => useNotificationStore(({ q }) => q)

export default useNotificationQueue