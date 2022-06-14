import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveVehicle } from "../logic"
import VehicleItemDetail from './VehicleItemDetail'

export default function () {
    const navigate = useNavigate()
    const { vehicleId } = useParams()
    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        try {
            retrieveVehicle(sessionStorage.token, vehicleId)
                .then(vehicle => {
                    setVehicle(vehicle)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div>
        <a onClick={() => navigate('/vehicles')}>Volver</a>

        {vehicle ? <VehicleItemDetail content={vehicle} /> : <p>Vehículo no encontrado</p>}

    </div>
}