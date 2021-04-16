import React, { Component } from 'react'
import { Child } from './Child'
import ChildComp from './ChildComp'
import PureCom from './PureCom'
import PureFunc from './PureFunc'

export default class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messsage: "Hello from parenet Component"
        }
    }

    changeMessage = () => {
        this.setState({ messsage: "Message Changed In Parenet Component" })
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.changeMessage}>Change Message</button>
                <h2>{this.state.messsage}</h2>
                <ChildComp />
                <PureCom />
                <PureFunc /> */}
                <Child message={this.props.message} />
            </div>
        )
    }
}
