import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function ({ content }) {
    const navigate = useNavigate()
    const [state, setState] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        if (content.active === true) {
            setState('Activo')
        } else {
            setState('Desactivado')
        }
    }, [])

    useEffect(() => {
        content.views.map(image => {
            setImage(image)
        })
    })

    return <div>
        <p>{content.businessId}</p>
        <p>{content.name}</p>
        <p>{content.email}</p>
        <time>{content.newDate}</time>
        <p>{content.role}</p>
        <p>{state}</p>
        <img src={image} />
        <button onClick={() => navigate(`/user/${content.id}/update`)}>Editar usuario</button>
        <button onClick={() => navigate(`/user/${content.id}/delete`)}>Eliminar usuario</button>
    </div>
}