import { renderHook, act } from "@testing-library/react-hooks";
import useKondig from "../src/useKondig";
import useNotificationStore from "../src/useNotificationStore";

it('should workas a hook', () => {
    const kondig = renderHook(() => useKondig())

    act(() => {
        kondig.result.current("Kaassaus")
    })

    const store = renderHook(() => useNotificationStore())
    expect(store.result.current.q[0].value).toBe('Kaassaus')
})