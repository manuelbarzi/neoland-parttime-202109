import { useNavigate } from "react-router-dom";

export default function () {
    const navigate = useNavigate()

    return <div>
        <h1>APP</h1>

        <p>El software para la gestión de daños de su flota de vehículos</p>
        <button onClick={() => navigate("/register")}>Empieza ahora</button>

        <p>Si eres admin, <a onClick={() => navigate("/login-admin")}>inicia sesión</a> aquí</p>
        <p>Si eres driver, <a onClick={() => navigate("/login-user")}>inicia sesión</a> aquí</p>

    </div>
} 