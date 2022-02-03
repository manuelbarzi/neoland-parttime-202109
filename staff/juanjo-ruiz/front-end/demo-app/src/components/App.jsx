import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import PostRegister from './PostRegister'
import Home from './Home'
import ModifyData from './ModifyData'
import Favorites from './Favorites'
import ShoppingCart from './ShoppingCart'
import '../index.css'

function App() {
    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [token, setToken] = useState(sessionStorage.token ? sessionStorage.token : null)


    const goToRegister = () => setView('register')

    const goToHome = token => {
        setToken(token)
        setView('login')
    }

    const goToLogin = () => setView('login')

    const goToPostregister = () => setView('postregister')

    const goToModify = () => setView('modify')

    const goToFavorites = () => setView('favorites')

    const goToShoppingcart = () => setView('shoppingcart')

    const logout = () => {
        setToken(null)
        setView('login')
    }

    if (view === 'login')
        return <Login
            onRegisterClick={goToRegister}
            onLoggedIn={goToHome}
        />
    else if (view === 'register')
        return <Register
            onLoginClick={goToLogin}
            onRegistered={goToPostregister}
        />
    else if (view === 'postregister')
        return <PostRegister onLoginClick={goToHome}
        />
    else if (view === 'home')
        return <Home
            token={token}
            onModifyClick={goToModify}
            onLoggedOut={logout}
            onClickedFav={goToFavorites}
            onClickedCart={goToShoppingcart}
        />
    else if (view === 'modify')
        return <ModifyData
            token={token}
            onModifyed={goToHome}
        />
    else if (view === 'favorites')
        return <Favorites
            onClickedHome={goToHome}
        />
    else if (view === 'shoppingcart')
        return <ShoppingCart
            onClickedHome={goToHome}
        />
}

export default App
