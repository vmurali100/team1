import React, { useState } from 'react'

export const UserForm = () => {
    const [fname, setfname] = useState("") // Step 1 . Declaring a Value with Use State
    const handleChange = (e) => {

        console.log(e.target.value)
        setfname(e.target.value)
    }
    return (
        <div>
            <h2>Hello From Use Form</h2>
            <form>
                <label htmlFor="fname">First Name : </label>
                <input type="text" name="fname" onChange={(e) => { handleChange(e) }} value={fname} /> <br />
                <button>Add User</button>
            </form>
        </div>
    )
}
