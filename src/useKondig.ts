import { useEffect } from "react"
import useNotificationStore from "./useNotificationStore"



const useKondig = () => {
    const { nq } = useNotificationStore()

    return (value: string) => nq(value)
}

export default useKondig