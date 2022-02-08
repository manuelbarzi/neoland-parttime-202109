import {useState} from 'react'
import logger from '../logger'
import Login from './Login'
import Register from './Register'
import Registered from './Registered'
import Home from './Home'

function App (){
const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
const [token, setToken] = useState(sessionStorage.token ? sessionStorage.token : null)

const goToRegister = () => setView('register')

const goToHome = token => {
    setToken(token)
    setView('home')
}

const gotToRegistered = () => setView('registered')

const goToLogin = () => setView('login')

const loggedOut = () => {
    setView('login')
    setToken(null)
}

logger.debug('App -> render')

if (view === 'login')
            return <Login
                onRegisterClick={goToRegister}
                onLoggedIn={goToHome}
            />

        else if (view === 'register')
            return <Register onLoginClick={goToLogin}
                onRegistered={gotToRegistered}
            />

        else if (view === 'registered')
            return <Registered
                onRegisteredLoginClick={goToLogin}
            />

        else if (view === 'home')
            return <Home
                token={token}
                onLoggedOut={loggedOut}
            />
}

export default App
