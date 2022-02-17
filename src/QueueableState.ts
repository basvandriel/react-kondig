interface Timer{
    timeout: NodeJS.Timeout
}

export interface Notification{
    id: string
    value: string
    timer?: Timer
}


export default interface QueueableState {
    q: Notification[]
    nq: (n: Notification) => void 
    dq: (id: string) => void
    rm: () => void
}