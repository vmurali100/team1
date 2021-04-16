import React from 'react'
import { GrandChild } from './GrandChild'

export const Child = ({ message }) => {
    return (
        <div>
            <GrandChild message={message} />
        </div>
    )
}
