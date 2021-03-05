import React, { useState } from 'react'

export const UserForm = () => {
    const [user, setUser] = useState({ fname: "", lname: "" }) // Step 1 . Declaring a Value with Use State
    const handleChange = (e) => {
        let myUser = { ...user } // Will Copy the Object
        myUser[e.target.name] = e.target.value
        setUser(myUser)
    }

    const addUser = () => {
        console.log(user)
    }
    return (
        <div>
            <h2>Hello From Use Form</h2>
            <form>
                <label htmlFor="fname">First Name : </label>
                <input type="text" name="fname" onChange={(e) => { handleChange(e) }} value={user.fname} /> <br />
                <label htmlFor="lname">Last Name :</label>
                <input type="text" name="lname" value={user.lname} onChange={(e) => { handleChange(e) }} />
                <button onClick={addUser} type="button">Add User</button>
            </form>
        </div>
    )
}
