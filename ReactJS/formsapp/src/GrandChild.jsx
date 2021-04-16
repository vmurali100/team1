import React from 'react'
import { Sample } from './Sample'

export const GrandChild = ({ message }) => {
    return (
        <div>
            <Sample message={message} />
        </div>
    )
}
