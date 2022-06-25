import { useNavigate, useParams } from "react-router-dom"

export default function ({ content }) {
    const navigate = useNavigate()
    const { vehicleId } = useParams()

    return <div>
        <p>{content.newDate}</p>
        <p>{content.description}</p>
        <p>{content.state}</p>
        <img src={content.image} />

        <button onClick={() => navigate(`/vehicle/${vehicleId}/part/${content.id}/delete`)}>Eliminar parte</button>
    </div>
}