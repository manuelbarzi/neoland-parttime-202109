import { useState } from 'react'
import logger from '../logger'
import Login from './Login'
import Register from './Register'
import Registered from './Registered'
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
        // setView('home')
        navigate('/')
    }

    const goToRegistered = () => setView('registered')

    const goToLogin = () => //setView('login')
        navigate('login')

    const loggedOut = () => {
        //setView('login')
        setToken(null)
        navigate('login')
    }

    logger.debug('App -> render')

    // if (view === 'login')
    //     return <Login
    //         onRegisterClick={goToRegister}
    //         onLoggedIn={goToHome}
    //     />

    // else if (view === 'register')
    //     return <Register onLoginClick={goToLogin}
    //         onRegistered={gotToRegistered}
    //     />

    // else if (view === 'registered')
    //     return <Registered
    //         onRegisteredLoginClick={goToLogin}
    //     />

    // else if (view === 'home')
    //     return <Home
    //         token={token}
    //         onLoggedOut={loggedOut}
    //     />

    return <Routes>
        <Route path='*' element={token ? <Home token={token} onLoggedOut={loggedOut} /> : <Navigate to='login' />} />
        <Route path='login' element={!token ? <Login onRegisterClick={goToRegister} onLoggedIn={goToHome}/> : <Navigate to='/'/>}  />
        <Route path='register' element={!token? (view !== 'registered' ? <Register onLoginClick={goToLogin} onRegistered={goToRegistered}/> : <Registered onLoginClick={goToLogin} />) : <Navigate to='/'/> }/>
    </Routes>
}

export default App
