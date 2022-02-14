import { render } from '@testing-library/react'
import React from 'react'

const Component: React.VFC = ()=>{
    return <h1>Hallo</h1>
}

it('Should render without erroring', () => {
    render(<Component/>)
})
