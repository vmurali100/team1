import React, { useState } from 'react'
import Parent from './Parent'

export const Main = () => {
    const [message, setmessage] = useState("Hello From Main Component")
    return (
        <div>
            <Parent message={message} />
        </div>
    )
}
