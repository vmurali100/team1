import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const Users = () => {
    const [allUsers, setallUsers] = useState([]);

    useEffect(() => {
        let url = "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
        axios.get(url).then(res => {
            setallUsers(res.data)
        })
    }, [])
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


