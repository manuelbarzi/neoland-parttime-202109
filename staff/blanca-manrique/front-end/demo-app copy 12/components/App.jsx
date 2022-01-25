const { useState } = React

function App() {
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [token, setToken] = useState(sessionStorage.token ? sessionStorage.token : null)

    const goToRegister = () => setView('register')

    const goToHome = token => {
        setToken(token)
        setView('home')
    }

    const goToLogin = () => setView('login')

    const goToPostRegister = () => setView('postregister')

    const logout = () => {
        setToken(null)
        setView('login')
    }

    logger.debug('App -> render')

    if (view === 'login')
        return <Login
            onRegisterClick={goToRegister}
            onLoggedIn={goToHome}
        />

    else if (view === 'register')
        return <Register
            onLoginClick={goToLogin}
            onRegisterIn={goToPostRegister}
        />

    else if (view === 'postregister')
        return <PostRegister onLoginClick={goToLogin} />

    else if (view === 'home')
        return <Home
            token={token}
            onLoggedOut={logout}
        />
}
