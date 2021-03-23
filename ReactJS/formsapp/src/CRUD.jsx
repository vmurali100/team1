import React, { useEffect, useState } from 'react';
import axios from 'axios'

export const CRUD = () => {
    const [user, setuser] = useState({ fname: "", lname: "", email: "", id: "" })
    const [users, setusers] = useState([]);
    const [isEdit, setisEdit] = useState(false)
    useEffect(() => {
        getAllUsers()
    }, [])
    const getAllUsers = () => {
        axios.get("http://localhost:3000/users").then((res) => {
            console.log(res.data)
            setusers(res.data)
        })
    }
    const deleteUser = (user) => {
        axios.delete("http://localhost:3000/users/" + user.id).then((res) => {
            console.log("user Deleted")
        })
    }
    const editUser = (user) => {
        console.log(user)
        setisEdit(true)
        setuser(user)
    }
    const updateUser = () => {
        axios.put("http://localhost:3000/users/" + user.id, user).then(res => {
            getAllUsers()
            setisEdit(false)
            clearForm()

        })
    }

    const addUser = () => {
        console.log(user)
        axios.post("http://localhost:3000/users", user).then(res => {
            getAllUsers()
            clearForm()
        })
    }

    const handleChange = (e) => {
        let newUser = { ...user };
        newUser[e.target.name] = e.target.value;
        setuser(newUser)
    }

    const clearForm = () => {
        setuser({ fname: "", lname: "", email: "", id: "" })
    }
    return (
        <div>
            <h2>Hello From CRUD Component</h2>
            <table border="1">
                <thead>
                    <tr><th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Id</th>
                        <th>Edit</th>
                        <th>Delete</th></tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return <tr key={i}>{Object.values(user).map((val, j) => {
                            return <td key={j}>{val}</td>
                        })}
                            <td><button onClick={() => { editUser(user) }}>Edit</button></td>
                            <td><button onClick={() => { deleteUser(user) }}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            <form>
                <label htmlFor="fname">First Name :</label>
                <input type="text" name="fname" value={user.fname} onChange={(e) => { handleChange(e) }} /><br />
                <label htmlFor="lname">Last Name :</label>
                <input type="text" name="lname" value={user.lname} onChange={(e) => { handleChange(e) }} /> <br />
                <label htmlFor="email">Email :</label>
                <input type="text" name="email" value={user.email} onChange={(e) => { handleChange(e) }} /> <br />

                {!isEdit && <button type="button" onClick={addUser}>Add User</button>}
                {isEdit && <button type="button" onClick={updateUser}>Update</button>}
            </form>
        </div>
    )
}
