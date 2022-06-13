import { useNavigate } from "react-router-dom"

export default function () {
    const navigate = useNavigate()

    return <div>
        <button onClick={() => navigate('/vehicles')}>Vehículos</button>
        <button onClick={() => navigate('/users')}>Usuarios</button>
    </div>
}