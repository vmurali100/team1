import React, { useState } from 'react'
import { Child } from './Child'

export const Parent = () => {
    const [message, setmessage] = useState("Hello From Parent Component");
    const [age, setage] = useState(30)
    return (
        <div>
            <Child message={message} changeMessage={setmessage} age={age} changeAge={setage} />
        </div>
    )
}
