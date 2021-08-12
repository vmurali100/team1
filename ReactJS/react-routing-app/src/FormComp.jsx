import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ChildComponet from './ChildComponet';

export const FormComp = () => {
    const [isEdit, setisEdit] = useState(false);
    const [id, setid] = useState("")
    const [message, setmessage] = useState("Hello Fro Form")
    const [genderValues, setgenderValues] = useState([{
        value: 'Male',
        checked: false
    },
    {
        value: 'Female',
        checked: false
    }
    ])
    const [subjectDetails, setsubjectDetails] = useState([
        { value: "HTML", checked: false },
        { value: "CSS", checked: false },
        { value: "JS", checked: false },
        { value: "ReactJS", checked: false }
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
        resetValues()
        allGenderValue.forEach(gValue => {
            if (gValue.value == e.target.value) {
                gValue.checked = true
            }
        })
        setgenderValues(allGenderValue)
    }

    const handleCheckBox = (e) => {
        console.log(e.target.value);
        let allCheckBoxValues = [...subjectDetails];
        allCheckBoxValues.forEach(check => {
            if (e.target.value == check.value) {
                if (check.checked) {
                    check.checked = false
                } else {
                    check.checked = true
                }
            }

        })
        setsubjectDetails(allCheckBoxValues)
    }

    const handleSubmit = () => {
        if (!isEdit) {
            let newUser = { ...user }
            genderValues.forEach((gender => {
                if (gender.checked) {
                    newUser.gender = gender
                }
            }))
            newUser.subjects = []
            subjectDetails.forEach(subject => {
                if (subject.checked) {
                    newUser.subjects.push(subject)
                }
            })

            axios.post(" http://localhost:3000/users", newUser).then(res => {
                console.log("User Added Successfully")
                getUsers()
                resetValues()
                setisEdit(false)
            })
        } else if (isEdit) {
            let newUser = { ...user }
            genderValues.forEach((gender => {
                if (gender.checked) {
                    newUser.gender = gender
                }
            }))
            newUser.subjects = []
            subjectDetails.forEach(subject => {
                if (subject.checked) {
                    newUser.subjects.push(subject)
                }
            })
            axios.put(" http://localhost:3000/users/" + id, newUser).then(res => {
                console.log("User Added Successfully")
                getUsers()
                resetValues()
                setisEdit(false)

            })
        }

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

    const resetValues = () => {
        let allGenderValue = [...genderValues];
        allGenderValue.forEach(gender => {
            gender.checked = false
        })
        let allSubjectDetails = [...subjectDetails]
        allSubjectDetails.forEach(subject => {
            subject.checked = false
        })
        setsubjectDetails(allSubjectDetails)
        setgenderValues(allGenderValue)
    }
    const handleEdit = (user) => {
        setisEdit(true)
        setid(user.id)
        resetValues()
        let allGenderValue = [...genderValues];
        allGenderValue.forEach(gender => {
            if (gender.value == user.gender.value) {
                gender.checked = true
            }
        })
        let allSubjectDetails = [...subjectDetails]
        allSubjectDetails.forEach(subject => {
            user.subjects.forEach(sub => {
                if (sub.value == subject.value) {
                    subject.checked = true
                }
            })
        })
        setgenderValues(allGenderValue)
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
                {subjectDetails.map((subject) =>
                    <>
                        <input type="checkbox" name="subject" checked={subject.checked} value={subject.value} onChange={(e) => { handleCheckBox(e) }} /> <span>{subject.value}</span><br /></>
                )}
                <button type="button" onClick={handleSubmit}>{isEdit ? <span>Update</span> : <span>Submit</span>}</button>
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
                        <td>{user.subjects.map((subject) => <p>{subject.value}</p>)}</td>
                        <td><button className="btn btn-warning" onClick={() => { handleEdit(user) }}>Edit</button></td>
                        <td><button className="btn btn-danger" onClick={() => { handleDelete(user) }}>Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
