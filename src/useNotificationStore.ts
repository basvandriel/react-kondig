import create from "zustand";

interface State {
    q: string[]
    nq: (value: string) => void 
}

export default create<State>((set) => ({
    /**
     * The notification queue
     */
    q: [],

    /**
     * Removes a notification from the list
     * 
     * @param value 
     * @returns 
     */
    nq: (value: string) => set(({ q: queue }) => ({ q: [...queue, value] }))
}))