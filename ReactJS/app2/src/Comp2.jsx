export default function Comp2({ user }) {

    return <div>
        {Object.keys(user).map((key) => {
            return <p>{key} : {user[key]}</p>
        })}
    </div>
}

