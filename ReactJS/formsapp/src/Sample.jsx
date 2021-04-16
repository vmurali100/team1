import React from 'react'
import { UserConsumer } from './UseContext'

export const Sample = ({ message }) => {
    return (
        <div>
            <h2>{message}</h2>
            <UserConsumer>{(value) => {
                return <p>{value.msg}</p>
            }}</UserConsumer>
        </div>
    )
}
