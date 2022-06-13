import { deleteUser } from '../logic'
import { useParams, useNavigate } from 'react-router-dom'

export default function () {
    const navigate = useNavigate()

    const { userId } = useParams()

    const remove = event => {
        event.preventDefault()

        const { target: { password: { value: password } } } = event

        try {
            deleteUser(sessionStorage.token, userId, password)
                .then(() => {
                    alert('usuario eliminado')

                    navigate('/users')
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }


    return <form onSubmit={remove}>
        <input type="password" name="password" placeholder="Contraseña" />
        <button>Eliminar</button>
    </form>
}