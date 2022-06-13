import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveUser } from "../logic"
import UserItemDetail from './UserItemDetail'

export default function () {
    const navigate = useNavigate()
    const { userId } = useParams()
    const [user, setUser] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, userId)
                .then(user => {
                    setUser(user)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div>
        <a onClick={() => navigate('/users')}>Volver</a>

        {user ? <UserItemDetail content={user} /> : <p>Usuario no encontrado</p>}

    </div>
}