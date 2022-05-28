import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { validators } from 'commons'
import { useState } from 'react'
import Landing from './Landing'
import Register from './Register'
import LoginAdmin from './LoginAdmin'
import LoginUser from './LoginUser'
import Home from './Home'

const { validateToken } = validators

function App() {
    const navigate = useNavigate()

    try {
        validateToken(sessionStorage.token)
    } catch (error) {
        delete sessionStorage.token
    }

    const { token } = sessionStorage

    const [loggedIn, setLoggedIn] = useState(!!token)

    const handleLoggedOut = () => setLoggedIn(false)

    const handleLoggedIn = () => {
        setLoggedIn(true)

        navigate('/')
    }

    const handleRegistered = () => navigate('/login-admin')

    return <Routes>
        <Route path="/*" element={loggedIn ? <Home onLoggedOut={handleLoggedOut} /> : <Landing />} />
        <Route path="/register" element={loggedIn ? <Navigate to="/" /> : <Register onRegistered={handleRegistered} />} />
        <Route path="/login-admin" element={loggedIn ? <Navigate to="/" /> : <LoginAdmin onLoggedIn={handleLoggedIn}/>} />
        <Route path="/login-user" element={loggedIn ? <Navigate to="/" /> : <LoginUser onLoggedIn={handleLoggedIn}/>} />
    </Routes>
}

export default App;