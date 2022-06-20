import { retrieveActiveVehicles } from '../logic'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { findVehicles } from '../logic'
import VehicleItem from './VehicleItem'
import Context from './Context'

export default function ({ onDetailVehicle }) {
    const navigate = useNavigate()
    const { setFeedback } = useContext(Context)
    const [vehicles, setVehicles] = useState()

    useEffect(() => {
        try {
            retrieveActiveVehicles(sessionStorage.token)
                .then(vehicles => setVehicles(vehicles))
                .catch(error => setFeedback({level: 'error', message: error.message}))
        } catch (error) {
            setFeedback({level: 'error', message: error.message})
        }
    }, [])

    const search = event => {
        event.preventDefault()

        const query = event.target.q.value

        try {
            findVehicles(sessionStorage.token, query)
                .then()
                .catch(error => setFeedback({level: 'error', message: error.message}))
        } catch (error) {
            setFeedback({level: 'error', message: error.message})
        }
    }

    const handleDetailVehicle = id => onDetailVehicle(id)

    return <div>
        <a onClick={() => navigate('/')}>volver</a>
        <h2>VEHÍCULOS</h2>

        <from onSubmit={search}>
            <label>Buscador de matrículas</label>
            <input type="search" name="q" required />
            <button>Buscar</button>
        </from>

        <div>
            {
                vehicles ?
                    <ul>
                        {vehicles.map(vehicle => <li key={vehicle.id} onClick={() => handleDetailVehicle(vehicle.id)} >
                            <VehicleItem content={vehicle} />
                        </li>)}
                    </ul>
                    : <p>no hay vehículos activos</p>
            }
        </div>
        <button onClick={() => navigate('/vehicle')}>añadir vehículo</button> {/* añadir icono */}
    </div>
}