import { useNavigate } from 'react-router-dom'

export default function ({ onLoggedOut }) {
    const navigate = useNavigate()

    const handleLogout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    return <div>
        <h1>name</h1>
        <button onClick={handleLogout}>cerrar sesión</button>

        <button onClick={() => navigate('/vehicles')}>Vehículos</button>
        <button onClick={() => navigate('/users')}>Usuarios</button>

    </div>
}