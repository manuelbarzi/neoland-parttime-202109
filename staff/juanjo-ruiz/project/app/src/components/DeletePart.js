import { deletePart } from '../logic'
import { useParams, useNavigate } from 'react-router-dom'

export default function () {
    const navigate = useNavigate()

    const { vehicleId, partId } = useParams()

    const remove = event => {
        event.preventDefault()

        const { target: { password: { value: password } } } = event

        try {
            deletePart(sessionStorage.token, vehicleId, partId, password)
                .then(() => {
                    alert('parte eliminado')

                    navigate(`/vehicle/${vehicleId}/parts`)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }


    return <div>
        <a onClick={() => navigate(`/vehicle/${vehicleId}/part/${partId}`)}>Volver</a>
        <form onSubmit={remove}>
            <input type="password" name="password" placeholder="Contraseña" />
            <button>Eliminar</button>
        </form>
    </div>
}