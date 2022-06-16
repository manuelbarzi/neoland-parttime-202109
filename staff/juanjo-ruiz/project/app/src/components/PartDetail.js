import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrievePart } from "../logic"
import PartItemDetail from './PartItemDetail'

export default function () {
    const navigate = useNavigate()
    const { partId } = useParams()
    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        try {
            retrievePart(sessionStorage.token, vehicleId, partId)
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

        {vehicle ? <PartItemDetail content={vehicle} /> : <p>Vehículo no encontrado</p>}

    </div>
}