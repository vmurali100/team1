import React, { useState } from 'react'
export default function Comp1() {

    var allNames = ["Ram", "Ravi", "Sam", "Sundar", "Kiran"]
    let [num, setnum] = useState(0)

    const changeNumber = () => {
        let newnum = num + 1
        setnum(newnum)
    }
    return <div>
        <button onClick={changeNumber}>Change Number</button>
        <h2>My Number : {num}</h2>
        {allNames.map((val) => {
            return <h2>{val}</h2>
        })}
    </div>
    // eslint-disable-next-line no-lone-blocks
    // Object.values(person) will convert An object in to Array
    // .map method will itereate through an array of values and it will reurn
    // return <div>
    //     {Object.values(person).map((val) => {
    //         return <h2>{val}</h2>
    //     })}
    // </div>
}