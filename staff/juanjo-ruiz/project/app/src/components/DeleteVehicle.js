import { deleteVehicle } from '../logic'
import { useParams, useNavigate } from 'react-router-dom'

export default function () {
    const navigate = useNavigate()

    const { vehicleId } = useParams()

    const remove = event => {
        event.preventDefault()

        const { target: { password: { value: password } } } = event

        try {
            deleteVehicle(sessionStorage.token, vehicleId, password)
                .then(() => {
                    alert('vehículo eliminado')

                    navigate('/vehicles')
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }


    return <div>
        <a onClick={() => navigate(`/vehicle/${vehicleId}`)}>Volver</a>
        <form onSubmit={remove}>
            <input type="password" name="password" placeholder="Contraseña" />
            <button>Eliminar</button>
        </form>
    </div>
}