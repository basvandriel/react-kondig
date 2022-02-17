import create from "zustand";
import State from './QueueableState'

import { Notification } from "./QueueableState";

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
    nq: (n: Notification) => set(({ q: queue }) => ({ q: [...queue, n] })),

    /**
     * Removes a notification from the list
     */
    dq: (id: string) => set(({ q }) => ({ q: q.filter(n => id !== n.id) })),

    /**
     * Removes all notifications
     */
    rm: () => set(({ q }) => ({ q: []}))
}))