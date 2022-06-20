import { retrieveAllUsers } from '../logic'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserItem from './UserItem'
import Context from './Context'

export default function ({ onDetailUser }) {
    const navigate = useNavigate()
    const { setFeedback } = useContext(Context)
    const [users, setUsers] = useState()

    useEffect(() => {
        try {
            retrieveAllUsers(sessionStorage.token)
                .then(users => setUsers(users))
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }, [])

    const handleDetailUser = id => onDetailUser(id)


    return <div>
        <a onClick={() => navigate('/')}>Volver</a>
        <h2>USUARIOS</h2>
        {
            users ?
                <ul>
                    {users.map(user => <li key={user.id} onClick={() => handleDetailUser(user.id)} >
                        <UserItem content={user} />
                    </li>)}
                </ul>
                : <p>no hay usuarios</p>
        }
        <button onClick={() => navigate('/user')}>añadir usuario nuevo</button> {/* añadir icono */}
    </div>
}