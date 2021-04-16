import React, { PureComponent } from 'react'

export default class PureCom extends PureComponent {
    render() {
        console.log("Hello from Pure Child Componenet in Console")

        return (
            <div>
                <h2>Hello From Child Component</h2>
            </div>
        )
    }
}
