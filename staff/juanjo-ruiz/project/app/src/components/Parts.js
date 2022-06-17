import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { retrieveAllParts } from "../logic"
import PartItem from "./PartItem"

export default function ({ onDetailPart }) {
    const navigate = useNavigate()
    const { vehicleId } = useParams()

    const [parts, setParts] = useState()
    
    useEffect(() => {
        try {
            retrieveAllParts(sessionStorage.token, vehicleId)
                .then(parts => setParts(parts))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleDatailPart = (vehicleId, partId) => onDetailPart(vehicleId, partId)

    return <div>
        <a onClick={() => navigate(`/vehicle/${vehicleId}`)}>Volver</a>
        <h3>Partes</h3>
        {
            parts ?
                <ul>
                    {parts.map(part => <li key={part.id} onClick={() => handleDatailPart(vehicleId, part.id)}>
                        <PartItem content={part} />
                    </li>)}
                </ul>
                : <p>No hay partes</p>
        }
        <button onClick={() => navigate(`/vehicle/${vehicleId}/part`)}>Añadir parte</button>
    </div>
}