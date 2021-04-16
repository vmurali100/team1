import React, { Component } from 'react'

export default class ChildComp extends Component {
    render() {
        console.log("Hello from Child Componenet in Console")
        return (
            <div>
                <h2>Hello From Child Component</h2>
            </div>
        )
    }
}
