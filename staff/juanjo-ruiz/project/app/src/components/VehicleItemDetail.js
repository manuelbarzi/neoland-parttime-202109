import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function ({ content }) {
    const navigate = useNavigate()

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

    return <div>
        <p>{content.lisense}</p>
        <p>{content.brand}</p>
        <p>{content.model}</p>
        <p>{content.frame}</p>
        <time>{content.newDate}</time>
        <p>{state}</p>
        <a onClick={() => navigate(`/vehicle/${content.id}/parts`)}>Partes: {part}</a>
        <button onClick={() => navigate(`/vehicle/${content.id}/update`)}>Editar vehículo</button>
        <button onClick={() => navigate(`/vehicle/${content.id}/delete`)}>Eliminar vehículo</button>
    </div>
}