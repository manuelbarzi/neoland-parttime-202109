import { useState } from 'react'
import logger from '../logger'
import Login from './login'
import Register from './Register'
import RegisterSuccess from './RegisterSuccess'
import Home from './Home'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'


function App() {
    const [view, setView] = useState(sessionStorage.token ? 'home' : "login")

    const [token, setToken] = useState(sessionStorage.token ? sessionStorage.token : null)
    const navigate= useNavigate()

    const goToRegister = () => navigate('register')

    const goToHome = token => {
        setToken(token)
        navigate('/')
    }

    const goToLogin = () => 
    
    navigate('login')

    const goToRegisterSuccess = () => setView('register-success')

    const logout = () => {
        setToken(null)
        navigate('login')
    }

    logger.debug('App -> render')

//     if (view === 'login')
//         return <Login

//             onRegisterClick={goToRegister}
//             onLoggedIn={goToHome}
//         />

//     else if (view === 'register')
//         return <Register
//             onLoginClick={goToLogin}
//             onRegistered={goToRegisterSuccess}
//         />

//     else if (view === 'postregister')
//         return <PostRegister
//             onPostRegisterClick={goToLogin}
//         />
//     else if (view === 'home')
//         return <Home token={token}
//             onLoggedOut={logout}
            

//         />
//     // else if (view === 'changeuser')
//     //     return <ChangeUser token={token}
//     //         onModifyed={() => setState({ view: 'login' })}
//     //     />

// }

return <Routes>
<Route path="*" element={token? <Home token={token} onLoggedOut={logout} /> : <Navigate to="login" />} />
<Route path="login" element={!token ? <Login onRegisterClick={goToRegister} onLoggedIn={goToHome} /> : <Navigate to="/" />} />
<Route path="register" element={!token ? (view !== 'register-success' ? <Register onLoginClick={goToLogin} onRegistered={goToRegisterSuccess} /> : <RegisterSuccess onLoginClick={goToLogin} />) : <Navigate to="/" />} />
</Routes>



}

export default App
