import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        console.log("constructor in LifecycleB Triggered")
        localStorage.setItem("Secret", "Some Secred Information ")
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps LifeCycleB Triggered")
        return null
    }

    getSnapshotBeforeUpdate() {
        console.log(" getSnapshotBeforeUpdate in LifeCycleB Triggered")
        return null
    }

    shouldComponentUpdate() {
        console.log(" shouldComponentUpdate in LifeCycleB Triggered")
        return false
    }

    componentDidUpdate() {
        console.log(" componentDidUpdate in LifeCycleB Triggered")

    }
    componentWillUnmount() {
        console.log("componentWillUnmount is trigged ")
        localStorage.clear()
    }
    render() {
        console.log("render in LigeCycleB triggered")
        return (
            <div>
                <h2>Value received From LifeCycleA = {this.props.name}</h2>
            </div>
        )
    }
}
