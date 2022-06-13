import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveUser, updateUser } from "../logic"

export default function () {
    const navigate = useNavigate()
    const [data, setData] = useState()
    const { userId } = useParams()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, userId)
                .then(user => { 
                    setData(user)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const update = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email } } } = event

        try {
            updateUser(sessionStorage.token, userId, name, email)
                .then(() => {
                    alert('usuario actualizado')

                    navigate('/users')
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <a onClick={() => navigate('/users')}>Volver</a>
        <form onSubmit={update}>
            <input type="name" name="name" defaultValue={data.name} />
            <input type="email" name="email" defaultValue={data.email} />
            <button>Actualizar</button>
        </form>
    </div>
}