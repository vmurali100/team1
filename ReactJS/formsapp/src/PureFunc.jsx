import React from 'react'

const PureFunc = () => {
    console.log("Functional Child Componenet")
    return (
        <div>

        </div>
    )
}

export default React.memo(PureFunc)