import React from 'react'

export const Child = ({ message, changeMessage, age, changeAge }) => {
    return (
        <div>
            <button onClick={() => { changeMessage("Message Changed From Child Component") }}>Change Message</button>
            <h2>{message}</h2>
            <hr />
            <button onClick={() => { changeAge(35) }}>Change Age</button>
            <h2>Default Age is : {age}</h2>
        </div>
    )
}
