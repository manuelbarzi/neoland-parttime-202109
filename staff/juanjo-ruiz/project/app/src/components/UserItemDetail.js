import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'

export default function ({ content }) {
    const navigate = useNavigate()
    const [state, setState] = useState()

    useEffect(() => {
        if (content.active === true) {
            setState('Activo')
        } else {
            setState('Desactivado')
        }
    }, [])
    
    return <div>
        <p>{content.businessId}</p>
        <p>{content.name}</p>
        <p>{content.email}</p>
        <time>{content.newDate}</time>
        <p>{content.role}</p>
        <p>{state}</p>
        <button onClick={() => navigate(`/user/${content.id}/update`)}>Editar usuario</button>
        <button onClick={() => navigate(`/user/${content.id}/delete`)}>Eliminar usuario</button>
    </div>
}