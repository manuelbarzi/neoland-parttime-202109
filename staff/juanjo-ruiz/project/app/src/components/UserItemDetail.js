import { useNavigate } from "react-router-dom"

export default function ({ content }) {
    const navigate = useNavigate()

    return <div>
        <p>{content.name}</p>
        <p>{content.email}</p>
        <p>{content.date}</p>
        <p>{content.role}</p>
        <p>{content.active}</p>
        <button onClick={() => navigate(`/user/${content.id}/update`)}>Editar usuario</button>
        <button onClick={() => navigate(`/user/${content.id}/delete`)}>Eliminar usuario</button>
    </div>
}