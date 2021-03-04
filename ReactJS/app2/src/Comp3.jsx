export default function Comp3({ msg, user, allUsers }) {
    return <div>
        {Object.keys(user).map((key) => {
            return <h2>{key} : {user[key]}</h2>
        })}
        <h2>{msg}</h2>
        <table border="1">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Tel</th>
            </thead>
            <tbody>
                {allUsers.map((user) => {
                    return <tr>{Object.values(user).map((val) => {
                        return <td>{val}</td>
                    })}</tr>
                })}
            </tbody>
        </table>
    </div>
}