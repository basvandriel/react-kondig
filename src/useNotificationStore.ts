import create from "zustand";
import State from './QueueableState'

export default create<State>((set) => ({
    /**
     * The notification queue
     */
    q: [],

    /**
     * Adds a notification too the queue
     * 
     * @param value 
     * @returns 
     */
    nq: (value: string) => set(({ q: queue }) => ({ q: [...queue, value] })),

    /**
     * Removes a notification from the list
     */
    dq: (value: string) => set(({ q }) => ({ q: q.filter(n => value !== n) })),
}))