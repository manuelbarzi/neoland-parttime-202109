import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate()

    return <div>
        <h1>🚀 NAME APP</h1>

        <p>El software para la gestión de los daños de su flota de vehículos</p>
        <button onClick={() => navigate("/register")}>Empieza ahora</button>
        <p>Si ya tienes sesión, <a onClick={() => navigate("/login")}>inicia sesión aquí</a></p>

    </div>
} 