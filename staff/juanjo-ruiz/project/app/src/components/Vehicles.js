import { retrieveActiveVehicles } from '../logic'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import VehicleItem from './VehicleItem'

export default function ({ onDetailVehicle }) {
    const [vehicles, setVehicles] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveActiveVehicles(sessionStorage.token)
                .then(vehicles => setVehicles(vehicles))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleDetailVehicle = id => onDetailVehicle(id)

    return <div>
        <a onClick={() => navigate('/')}>volver</a>
        <h2>VEHÍCULOS</h2>
        {
            vehicles ?
                <ul>
                    {vehicles.map(vehicle => <li key={vehicle.id} onClick={() => handleDetailVehicle(vehicle.id)} >
                        <VehicleItem content={vehicle} />
                    </li>)}
                </ul>
                : <p>no hay vehículos activos</p>
        }
        <button onClick={() => navigate('/vehicle')}>añadir vehículo</button> {/* añadir icono */}
    </div>
}