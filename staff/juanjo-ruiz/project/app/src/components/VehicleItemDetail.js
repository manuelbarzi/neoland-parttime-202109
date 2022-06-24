import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function ({ content, onDetailView }) {
    const navigate = useNavigate()
    const { vehicleId } = useParams()
    const [state, setState] = useState()
    const [part, setPart] = useState()

    useEffect(() => {
        if (content.active === true) {
            setState('Activo')
        } else {
            setState('Desactivado')
        }
    })

    useEffect(() => {
        if (!content.parts.length) {
            setPart(0)
        } else {
            setPart(content.parts.length)
        }
    }, [])

    const handleDetailView = (vehicleId, viewId) => onDetailView(vehicleId, viewId)

    return <div>
        {content.views.length ? <img src={content.views[0].image} onClick={() => handleDetailView(vehicleId, content.views[0]._id)} /> : <p>No hay foto</p>}
        {content.views.length ? <img src={content.views[1].image} onClick={() => handleDetailView(vehicleId, content.views[1]._id)}/> : <p>No hay foto</p>}
        {content.views.length ? <img src={content.views[2].image} onClick={() => handleDetailView(vehicleId, content.views[2]._id)}/> : <p>No hay foto</p>}
        {content.views.length ? <img src={content.views[3].image} onClick={() => handleDetailView(vehicleId, content.views[3]._id)}/> : <p>No hay foto</p>}
        <p>{content.lisense}</p>
        <p>{content.brand}</p>
        <p>{content.model}</p>
        <p>{content.frame}</p>
        <p>{content.leasingCompany}</p>
        <p>{state}</p>
        <time>{content.newDate}</time>
        <a onClick={() => navigate(`/vehicle/${content.id}/parts`)}>Partes: {part}</a>
        <button onClick={() => navigate(`/vehicle/${content.id}/update`)}>Editar vehículo</button>
        <button onClick={() => navigate(`/vehicle/${content.id}/delete`)}>Eliminar vehículo</button>
    </div>
}