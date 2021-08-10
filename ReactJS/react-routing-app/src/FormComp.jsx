import axios from 'axios';
import React, { useState, useEffect } from 'react'

export const FormComp = () => {
    const [genderValues, setgenderValues] = useState([{
        value: 'Male',
        checked: false
    },
    {
        value: 'Female',
        checked: false
    }
    ])
    const [user, setuser] = useState({
        gender: {
            value: '',
            checked: false
        }, subjects: []
    })
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])
    const handleChange = (e) => {
        let allGenderValue = [...genderValues];
        resetGenderValues()
        allGenderValue.forEach(gValue => {
            if (gValue.value == e.target.value) {
                gValue.checked = true
            }
        })
        setgenderValues(allGenderValue)
    }

    const handleCheckBox = (e) => {
        console.log(e.target.checked)
        var newUser = { ...user }

        if (e.target.checked) {
            if (newUser.subjects.length == 0) {
                newUser.subjects.push(e.target.value)
            } else {
                if (newUser.subjects.indexOf(e.target.value) == -1) {
                    newUser.subjects.push(e.target.value)
                }
            }
        } else {
            newUser.subjects = newUser.subjects.filter((sub) => sub != e.target.value)
        }
        setuser(newUser)
    }

    const handleSubmit = () => {
        let newUser = { ...user }
        genderValues.forEach((gender => {
            if (gender.checked) {
                newUser.gender = gender
            }
        }))

        axios.post(" http://localhost:3000/users", newUser).then(res => {
            console.log("User Added Successfully")
            getUsers()
            resetGenderValues()
        })
    }

    const getUsers = () => {
        axios.get("http://localhost:3000/users").then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
    }

    const handleDelete = (user) => {
        axios.delete("http://localhost:3000/users/" + user.id).then(() => {
            getUsers()
        })
    }

    const resetGenderValues = () => {
        let allGenderValue = [...genderValues];
        allGenderValue.forEach(gender => {
            gender.checked = false
        })
        setgenderValues(allGenderValue)
    }
    const handleEdit = (user) => {
        resetGenderValues()
        let allGenderValue = [...genderValues];
        allGenderValue.forEach(gender => {
            if (gender.value == user.gender) {
                gender.checked = true
            }
        })
        setgenderValues(allGenderValue)
        setuser(user)
    }
    return (
        <div className="container">
            <form>
                <label htmlFor="gender">Gender</label> <br />
                {genderValues.map((gender) => {
                    return <>
                        <input type="radio" checked={gender.checked} name="gender" value={gender.value} onChange={(e) => { handleChange(e) }} />
                        <span>{gender.value}</span>
                    </>

                })}
                <br /><br />
                <label htmlFor="subject">Subject</label> <br />

                <input type="checkbox" name="subject" id="" value="HTML" onChange={(e) => { handleCheckBox(e) }} />HTML
                <br /><input type="checkbox" name="subject" id="" value="CSS" onChange={(e) => { handleCheckBox(e) }} />CSS
                <br /><input type="checkbox" name="subject" id="" value="JS" onChange={(e) => { handleCheckBox(e) }} />JS
                <br /> <input type="checkbox" name="subject" id="" value="REACT JS" onChange={(e) => { handleCheckBox(e) }} />REACT JS
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>

            <table border="1" className="table">
                <thead>
                    <tr>
                        <th>Sl NO</th>
                        <th>Gender</th>
                        <th>Subjects</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => <tr>
                        <td>{i + 1}</td>
                        <td>{user.gender.value}</td>
                        <td>{user.subjects}</td>
                        <td><button className="btn btn-warning" onClick={() => { handleEdit(user) }}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() => { handleDelete(user) }}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
