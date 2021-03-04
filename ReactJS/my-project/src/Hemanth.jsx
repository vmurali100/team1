
export default function Hemanth({ age, changeAgeFunc, users }) {
    return <div>
        {age < 30 && <h2>You are not Ready For Marriage</h2>}
        {age >= 30 && age < 55 && <h2>Hemanth Age is : {age}</h2>}
        {age >= 55 && <h3>Happy Retirement Life</h3>}
        <button onClick={changeAgeFunc}>Chage Age</button>

        <hr />

        <ul>
            {users.map((user, i) => {
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
}