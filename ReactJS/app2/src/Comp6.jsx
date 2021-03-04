import React, { Component } from 'react'
class Comp6 extends Component {
    constructor() {
        super()
        this.state = {
            fname: "Murali",
            num: 0
        }
    }
    changeName = () => {
        this.setState({ fname: "Ram" })
        // this.state.fname = "Ram Krishna"
    }
    incrementNumber = () => {
        this.setState({ num: this.state.num + 1 })
    }
    render() {
        let { num } = this.state // Using 
        return <div>
            <button onClick={this.changeName}>Change Name</button>
            <h2>My First Name is :{this.state.fname}</h2>
            <hr />
            <button onClick={this.incrementNumber}>Increment Number</button>
            <h3>My Number : {num}</h3>
        </div>
    }
}

export default Comp6