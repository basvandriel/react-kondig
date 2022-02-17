import useNotificationStore from "./useNotificationStore"
import { nanoid } from 'nanoid'

/**
 * The ms how long a notification should last
 */
const DEFAULT_TIMEOUT_MS = 2000



const useKondig = () => {
    const { nq, dq } = useNotificationStore()

    return (
        value: string, 
        duration: number | undefined = DEFAULT_TIMEOUT_MS
    ) => {
        const id = nanoid()
        const timeout = setTimeout(
            () => dq(value), duration
        )
        return nq({ id, value, timer: { timeout } })
    }
}

export default useKondig