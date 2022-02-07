const { useState } = React

function App(){
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')

    const [token, setToken] = useState(sessionStorage.token ? sessionStorage.token : null) 

    const goToRegister = () => setView('register')

    const goToHome = token => {
        setToken(token)
        setView('home')
    }

    const goToLogin = () =>setView('login')
    const goToRegisterSuccess = () => setView('PostRegister')

    const logout = () =>{
        setToken(null)
        setView('login')
    }

    logger.debug('App -> Render')

    if (view === 'login')
        return <Login
            onRegisterClick={goToRegister}
            onRegistered={goToHome}
        />
    else if (view === 'register')
        return <Register   
            onLoginClick={goToLogin}
            onRegistered={goToPostRegister}
        />
    else if (view === 'PostRegister')
        return <PostRegister 
            onLoginClick={goToLogin}
        />
    else if (view === 'home')
        return <Home 
            token={token}
            onLoggedOut={logout}
        />

} 

