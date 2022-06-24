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
    console.log(content.views)

    return <div>
        <h6></h6>
        {content.views.length ? <img src={content.views[0].image} /> : <p>No hay fotos </p>}
        <h6></h6>
        {content.views.length ? <img src={content.views[1].image} /> : <p>No hay fotos </p>}
        <h6></h6>
        {content.views.length ? <img src={content.views[2].image} /> : <p>No hay fotos </p>}
        <h6></h6>
        {content.views.length ? <img src={content.views[3].image} /> : <p>No hay fotos </p>}
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