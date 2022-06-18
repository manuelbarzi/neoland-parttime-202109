import { retrieveActiveVehicles } from '../logic'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { findVehicles } from '../logic'
import VehicleItem from './VehicleItem'

export default function ({ onDetailVehicle }) {
    const navigate = useNavigate()
    const [vehicles, setVehicles] = useState()

    useEffect(() => {
        try {
            retrieveActiveVehicles(sessionStorage.token)
                .then(vehicles => setVehicles(vehicles))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const search = event => {
        event.preventDefault()

        const query = event.target.q.value

        try {
            findVehicles(sessionStorage.token, query)
                .then()
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
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