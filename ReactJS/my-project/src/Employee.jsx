import React, { useState } from 'react'

export const Employee = () => {
    // Use State is a Built in Hook
    const [emp, setemp] = useState({ fname: "", lname: "" });
    console.log(emp)
    const handleChange = (e) => {
        let newEmp = { ...emp }
        let fieldName = e.target.name
        newEmp[fieldName] = e.target.value
        setemp(newEmp)
    }

    const handleSubmit = () => {
        console.log(emp)
    }
    return (
        <div>
            <h3>Welcome to Employee Component</h3>
            <hr />

            <form>
                <label htmlFor="fname">First Name : </label>
                <input type="text" name="fname" value={emp.fname} id="fname" onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="lname">Last Name : </label>
                <input type="lname" name="lname" id="lname" value={emp.lname} onChange={(e) => { handleChange(e) }} /> <br />
                <button type="button" onClick={handleSubmit}>Get Details</button>
            </form>
        </div>
    )
}
