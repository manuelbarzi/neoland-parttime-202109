import { useState } from "react"
import Login from "./Login"
import Register from "./Register"
import PostRegister from "./PostRegister"
import Home from "./Home"
import { Routes, Route, useNavigate, Navigate } from "react-router-dom"

function App() {
    const [view, setView] = useState(sessionStorage.token ? "home" : "login") //al cambiar de vista se añade View
    const [token, setToken] = useState(sessionStorage.token ? sessionStorage.token : null)
    const navigate = useNavigate()

    const onRegister = () => setView("register")

    const onLogin = (token) => {
        setToken(token)
        setView("home")
    }
    const goToLogin = () => setView("login")

    const logout = () => {
        setToken(null)
        setView("login")
    }


    return <Routes>
        <Route path="*" element={token ? <Home token={token} onLoggedOut={logout} /> : <Navigate to="login" />} />
        <Route path="login" element={!token ? <Login onRegisterClick={onRegister} onLoggedIn={onLogin} /> : <Navigate to="/" />} />
        <Route path="register" element={!token ? (view !== 'register-success' ? <Register onLoginClick={goToLogin} onRegistered={onRegister} /> : <PostRegister onLoginClick={goToLogin} />) : <Navigate to="/" />} />
    </Routes>

    // if (view === 'login')
    //     return <Login
    //         onRegisterClick={onRegister}
    //         onLoggedIn={onLogin}
    //     />

    // if (view === 'register')
    //     return <Register
    //         onLoginClick={goToLogin}
    //         onRegistered={onRegister}
    //     />

    // else if (view === 'PostRegister')
    //     return <PostRegister
    //         onLoginClick={goToLogin} />

    // else if (view === 'home')
    //     return <Home token={token}
    //         logOut={logout}
    //     />

}

export default App
