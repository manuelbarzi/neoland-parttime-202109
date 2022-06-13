import { useNavigate, Routes, Route, Link } from 'react-router-dom'
import Nav from './Nav'
import Vehicles from './Vehicles'
import Users from './Users'
import CreateUser from './CreateUser'
import UserDetail from './UserDetail'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'

export default function ({ onLoggedOut }) {
    const navigate = useNavigate()

    const handleLogout = () => {
        delete sessionStorage.token

        onLoggedOut()
    }

    const handleShowUser = userId => navigate(`/user/${userId}`)

    return <div>
        <h1><Link to="/">Home</Link></h1>
        <button onClick={handleLogout}>cerrar sesión</button>

        <Nav />

        <Routes>
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/users" element={<Users onDetailUser={handleShowUser} />} />
            <Route path="/user/:userId" element={<UserDetail />} />
            <Route path="/user" element={<CreateUser />} />
            <Route path="/user/:userId/update" element={<UpdateUser />} />
            <Route path="/user/:userId/delete" element={<DeleteUser />} />
        </Routes>
    </div>
}