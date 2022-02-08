import { useState } from 'react' //importo de las dependencias
import logger from '../logger'
import Login from './Login'
import Register from './Register'
import RegisterSuccess from './RegisterSuccess'
import Home from './Home'
import ChangeUser from './ChangeUser'
import './Fav.css'

function App() {
    
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login',) //setea
    const [token, setToken] = useState(sessionStorage.token ? sessionStorage.token : null)

//los métodos se ponen como función interna :

    const goToRegister = () => setView('register')

    const goToHome = token => {  //esta es una función multilínea porque tiene más de 1 instrucción:
        setToken(token)
        setView('home')
      
    }

    const goToLogin = () => setView( 'login')

    const goToRegisterSuccess = () => setView('register-success' )

    const logout = () => {
        setToken(null)
        setView ('login')
    }

    const goToChangeUser = () => setView( 'changeuser' )


    logger.debug('App -> render')

        if (view === 'login')
            return <Login
                onRegisterClick={goToRegister}
                onLoggedIn={goToHome}
            />
        else if (view === 'register')
            return <Register
                onLoginClick={goToLogin}
                onRegistered={goToRegisterSuccess}
            />
        else if (view === 'register-success')
            return <RegisterSuccess onLoginClick={goToLogin} />
        else if (view === 'home')
            return <Home token={token} onLoggedOut={logout} 
                onClicked={goToChangeUser}/>

            else if (view === 'changeuser')
            return <ChangeUser 
                token={token}
                onModify={goToLogin}
                goBack={goToHome}
            />
}

export default App

