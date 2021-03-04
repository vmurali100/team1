import React, { Component } from 'react';

class Comp5 extends Component {
    constructor() {
        super()
        this.state = {
            fname: "Murali",
            person: {
                "fname": "Lowell",
                "lname": "Flamme",
                "tel": "(925)313-3374",
                "address": "2838 Tincidunt Ave",
                "city": "Arvada",
                "state": "MD",
                "zip": 41213
            },
            allUsers: [
                {
                    "fname": "Braulio",
                    "lname": "Culp",
                    "tel": "(609)615-0543"
                },
                {
                    "fname": "Wenjie",
                    "lname": "Armstrong",
                    "tel": "(771)917-4231"
                },
                {
                    "fname": "Steven",
                    "lname": "Morrow",
                    "tel": "(412)472-3791"
                },
                {
                    "fname": "Ty",
                    "lname": "Leon",
                    "tel": "(627)885-5548"
                },
                {
                    "fname": "Edith",
                    "lname": "Pace",
                    "tel": "(252)464-9931"
                },
                {
                    "fname": "Sunil",
                    "lname": "Antunes",
                    "tel": "(238)032-0551"
                },
                {
                    "fname": "Monica",
                    "lname": "Sundell",
                    "tel": "(558)431-9202"
                },
                {
                    "fname": "Geoff",
                    "lname": "Rock",
                    "tel": "(533)414-7251"
                },
                {
                    "fname": "Curtis",
                    "lname": "Warner",
                    "tel": "(152)977-6589"
                },
                {
                    "fname": "Rob",
                    "lname": "Wuertz",
                    "tel": "(140)407-5142"
                }
            ]
        }
    }
    render() {
        return <div>Hello From Component 5 {this.state.fname}</div>
    }
}
export default Comp5