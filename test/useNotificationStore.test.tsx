import { renderHook, act } from '@testing-library/react-hooks'
import useNotificationStore from '../src/useNotificationStore'

it('should have an empty queue', () => {
    const {
        result: { current: { q: queue }}
    } = renderHook(() => useNotificationStore())

    expect(queue).toStrictEqual([])
})

it('should add a item an empty queue', async () => {
    const {
        result
    } = renderHook(() => useNotificationStore())

    act(() => {
        result.current.nq("Succes!")
    })
    expect(result.current.q[0]).toBe("Succes!")
})