import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrievePart } from "../logic"
import PartItemDetail from './PartItemDetail'

export default function () {
    const navigate = useNavigate()
    const { vehicleId, partId } = useParams()
    const [part, setPart] = useState()

    useEffect(() => {
        try {
            retrievePart(sessionStorage.token, vehicleId, partId)
                .then(part => {
                    setPart(part)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div>
        <a onClick={() => navigate(`/vehicle/${vehicleId}/parts`)}>Volver</a>

        {part ? <PartItemDetail content={part} /> : <p>Parte no encontrado</p>}

    </div>
}