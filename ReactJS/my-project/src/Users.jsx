import React, { useState } from 'react';

export const Users = () => {
    const [allUsers, setallUsers] = useState(users)
    return (
        <div>
            {allUsers.map((user) => {
                return <div className="userDetails">
                    <table>
                        <tr>
                            <td>User First Name </td>
                            <td>{user.fname}</td>
                        </tr>
                        <tr>
                            <td>User Last Name</td>
                            <td>{user.lname}</td>
                        </tr>
                        <tr>
                            <td>User Tel </td>
                            <td>{user.tel}</td>
                        </tr>
                        <tr>
                            <td>User Address </td>
                            <td>{user.address}</td>
                        </tr>
                    </table>
                </div>

            })}
        </div>
    )
}


let users = [
    {
        "fname": "Rhonda",
        "lname": "Platt",
        "tel": "(927)959-8303",
        "address": "9742 Vestibulum Dr",
        "city": "Northern Ca",
        "state": "OR",
        "zip": 48564
    },
    {
        "fname": "Waddie",
        "lname": "Ellingwood",
        "tel": "(762)215-2450",
        "address": "394 Malesuada St",
        "city": "Zionsville",
        "state": "DC",
        "zip": 17032
    },
    {
        "fname": "Abdul",
        "lname": "Garcia",
        "tel": "(801)226-5887",
        "address": "4920 Libero Rd",
        "city": "Massillon",
        "state": "WI",
        "zip": 85486
    },
    {
        "fname": "Leatrice",
        "lname": "Ibarrondo",
        "tel": "(179)828-4062",
        "address": "7973 Aliquam Ln",
        "city": "Stettler",
        "state": "MT",
        "zip": 80012
    },
    {
        "fname": "Shauntell",
        "lname": "Montgomery",
        "tel": "(861)138-7174",
        "address": "9632 Libero Dr",
        "city": "Wilmington",
        "state": "NC",
        "zip": 22607
    },
    {
        "fname": "Pritesh",
        "lname": "Montilla",
        "tel": "(754)572-2119",
        "address": "7471 Etiam St",
        "city": "Lindale",
        "state": "TX",
        "zip": 60111
    },
    {
        "fname": "Donald",
        "lname": "Neilson",
        "tel": "(251)245-9987",
        "address": "4079 Tellus Ct",
        "city": "Phoenix",
        "state": "OH",
        "zip": 65340
    },
    {
        "fname": "Rick",
        "lname": "Hatton",
        "tel": "(235)649-6418",
        "address": "4683 Quis Ln",
        "city": "Hudsonville",
        "state": "NH",
        "zip": 66055
    },
    {
        "fname": "Yewawde",
        "lname": "Graham",
        "tel": "(776)165-9458",
        "address": "5781 Rutrum Ct",
        "city": "Kingwood",
        "state": "AR",
        "zip": 40169
    },
    {
        "fname": "Hugh",
        "lname": "Popsikle",
        "tel": "(604)554-3852",
        "address": "2228 Suspendisse Ln",
        "city": "Furlong",
        "state": "OK",
        "zip": 32756
    }
]