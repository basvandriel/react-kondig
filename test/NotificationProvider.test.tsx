import { render} from '@testing-library/react'
import { act, renderHook } from '@testing-library/react-hooks'
import React from 'react'
import NotificationProvider from '../src/NotificationProvider'
import useKondig from '../src/useKondig'

beforeEach(() => {
    const { result } = renderHook(() => useKondig())

    act(()=>{
        result.current("Notification!")
    })
})

it('should render existing notifications', () => {
    const { debug } = render(<NotificationProvider />)

    debug()
})