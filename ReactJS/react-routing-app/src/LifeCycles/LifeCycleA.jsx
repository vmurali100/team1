import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'
export default class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Murali",
            showChild: false
        }
        console.log("Constructor LifeCycleA Triggered")
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps LifeCycleA Triggered")
        return null
    }
    render() {
        console.log("Render Life Cycle Trigged")
        return (
            <div>
                <button onClick={() => { this.setState({ showChild: !this.state.showChild }) }}>Show Child</button>
                <button onClick={() => { this.setState({ name: "Murali Krishna" }) }}>Change Name</button>
                {this.state.showChild && <LifeCycleB name={this.state.name} />}
            </div>
        )
    }
}
