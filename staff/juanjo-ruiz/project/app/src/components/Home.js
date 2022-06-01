import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import Vehicles from './Vehicles'
import Users from './Users'

export default function ({ onLoggedOut }) {
    const navigate = useNavigate()

    const handleLogout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const handleShowVehicles = () => navigate('/vehicles')

    const handleShowUsers = () => navigate('/users')

    return <div>
        <h1><Link to="/">home</Link></h1>
        <button onClick={handleLogout}>cerrar sesión</button>

        <button>Añadir vehículos</button>
        <button onClick={handleShowVehicles}>Vehículos</button>
        <button onClick={handleShowUsers}>Users</button>

        <div>
            <Routes>
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </div>
    </div>
}