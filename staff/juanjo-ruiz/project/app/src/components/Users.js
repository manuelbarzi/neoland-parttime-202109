import { retrieveAllUsers, findUsers } from '../logic'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserItem from './UserItem'
import Context from './Context'

export default function ({ onDetailUser }) {
    const navigate = useNavigate()
    const { setFeedback } = useContext(Context)
    const [users, setUsers] = useState()
    const [results, setResults] = useState()
    const [controls, setControls] = useState()

    useEffect(() => {
        try {
            retrieveAllUsers(sessionStorage.token)
                .then(users => setUsers(users))
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }, [])

    const search = event => {
        event.preventDefault()

        const { target: { q: { value: query } } } = event

        try {
            findUsers(sessionStorage.token, query)
                .then(results => {
                    setResults(results)
                    setControls(true)
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    const handleButton = () => {
        results.length ?
            setControls(false)
            : navigate('/')
    }

    const handleDetailUser = id => onDetailUser(id)

    return <div>
        <a onClick={handleButton}>Volver</a>
        <h2>USUARIOS</h2>

        <form onSubmit={search}>
            <label>Buscador de usuarios</label>
            <input type="search" name="q" required />
            <button>Buscar</button>
        </form>

        <div>
            {controls ?
                results.length ?
                    <ul>
                        {results.map(result => <li key={result.id} onClick={() => handleDetailUser(result.id)} >
                            <UserItem content={result} />
                        </li>)}
                    </ul>
                    :
                    <p>no hay usuarios con este nombre</p>
                :
                users ?
                    <ul>
                        {users.map(user => <li key={user.id} onClick={() => handleDetailUser(user.id)} >
                            <UserItem content={user} />
                        </li>)}
                    </ul>
                    : <p>no hay usuarios</p>
            }
        </div>
        <button onClick={() => navigate('/user')}>añadir usuario nuevo</button> {/* añadir icono */}
    </div>
}