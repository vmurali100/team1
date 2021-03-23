import React, { useEffect } from 'react';
import axios from 'axios'

export const CRUD = () => {
    useEffect(() => {
        getAllUsers()
    }, [])
    const getAllUsers = () => {
        axios.get("http://localhost:3000/users").then((res) => {
            console.log(res)
        })
    }
    const deleteUser = () => { }
    const editUser = () => { }
    const updateUser = () => { }

    return (
        <div>
            <h2>Hello From CRUD Component</h2>
        </div>
    )
}
