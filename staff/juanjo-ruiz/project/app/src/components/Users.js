import { retrieveAllUsers } from '../logic'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserItem from './UserItem'

export default function () {
    const [users, setUsers] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveAllUsers(sessionStorage.token)
                .then(users => setUsers(users))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div>
        <h2>USUARIOS</h2>
        {
            users ?
                <ul>
                    {users.map(user => <li key={user.id}>
                        <UserItem content={user} />
                    </li>)}
                </ul>
                : <p>no hay usuarios</p>
        }
    </div>
}