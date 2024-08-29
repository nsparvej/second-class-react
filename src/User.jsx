import { useEffect, useState } from "react"

export default function User(){

    const [User  , setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    return (
        <div>
            <h3>user: {User.length}</h3>
        </div>
    )
}