import { useState } from 'react'
import logger from '../logger'
import Login from './Login'
import Register from './Register'
import RegisterSuccess from './RegisterSuccess'
import Home from './Home'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

function App() {
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [token, setToken] = useState(sessionStorage.token ? sessionStorage.token : null)
    const navigate = useNavigate()

    const goToRegister = () => //setView('register')
        navigate('register')

    const goToHome = token => {
        setToken(token)
        //setView('home')
        navigate('/')
    }

    const goToLogin = () => //setView('login')
        navigate('login')

    const goToRegisterSuccess = () => setView('register-success')

    const logout = () => {
        setToken(null)
        //setView('login')
        navigate('login')
    }

    logger.debug('App -> render')

    // if (view === 'login')
    //     return <Login
    //         onRegisterClick={goToRegister}
    //         onLoggedIn={goToHome}
    //     />
    // else if (view === 'register')
    //     return <Register
    //         onLoginClick={goToLogin}
    //         onRegistered={goToRegisterSuccess}
    //     />
    // else if (view === 'register-success')
    //     return <RegisterSuccess onLoginClick={goToLogin} />
    // else if (view === 'home')
    //     return <Home token={token} onLoggedOut={logout} />

    return <Routes>
        <Route path="*" element={token? <Home token={token} onLoggedOut={logout} /> : <Navigate to="login" />} />
        {/* <Route path="/search" element={token? <Home token={token} onLoggedOut={logout} /> : <Navigate to="login" />} /> */}
        <Route path="login" element={!token ? <Login onRegisterClick={goToRegister} onLoggedIn={goToHome} /> : <Navigate to="/" />} />
        <Route path="register" element={!token ? (view !== 'register-success' ? <Register onLoginClick={goToLogin} onRegistered={goToRegisterSuccess} /> : <RegisterSuccess onLoginClick={goToLogin} />) : <Navigate to="/" />} />
    </Routes>
}

export default App