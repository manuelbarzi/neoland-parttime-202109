import { useNavigate } from "react-router-dom"

export default function ({ content }) {
    const navigate = useNavigate()
    
    return <div>
        <p>{content.active}</p>
        <p>{content.lisense}</p>
        <p>{content.brand}</p>
        <p>{content.model}</p>
        <p>{content.frame}</p>
        <p>{content.parts}</p>
        <time>{content.newDate}</time>
        <button onClick={() => navigate(`/vehicle/${content.id}/update`)}>Editar vehículo</button>
        <button onClick={() => navigate(`/vehicle/${content.id}/delete`)}>Eliminar vehículo</button>
    </div>
}