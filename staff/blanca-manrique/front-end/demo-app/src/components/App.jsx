import { useState } from 'react'
import logger from '../logger'
import Login from './Login'
import Register from './Register'
import PostRegister from './PostRegister'
import Home from './Home'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

function App() {
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [token, setToken] = useState(sessionStorage.token ? sessionStorage.token : null)
    const navigate = useNavigate()

    const goToRegister = () => navigate('register')

    const goToHome = token => {
        setToken(token)
        navigate('/')
    }

    const goToLogin = () => navigate('login')

    const goToPostRegister = () => setView('postregister')

    const logout = () => {
        setToken(null)
        navigate('login')
    }

    logger.debug('App -> render')

    return <Routes>
        <Route path='*' element={token ? <Home token={token} onLoggedOut={logout} /> : <Navigate to='login' />} />
        <Route path='login' element={!token ? <Login onRegisterClick={goToRegister} onLoggedIn={goToHome} /> : <Navigate replace to='/' />} />
        <Route path='register' element={!token? (view !== 'postregister' ? <Register onLoginClick={goToLogin} onRegisterIn={goToPostRegister} /> : <PostRegister onLoginClick={goToLogin} />) : <Navigate replace to='/' />} />
    </Routes>
}

export default App