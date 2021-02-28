export default function Comp1() {

    var allNames = ["Ram", "Ravi", "Sam", "Sundar", "Kiran"]

    return <div>
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