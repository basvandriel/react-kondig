export default interface QueueableState {
    q: string[]
    nq: (value: string) => void 
    dq: (value: string) => void
}