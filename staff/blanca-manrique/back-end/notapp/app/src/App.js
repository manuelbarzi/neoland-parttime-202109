import { useState } from 'react'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import {validators} from 'commons'

const {validateToken} = validators

function App() {
  const navigate = useNavigate()

  try {
    validateToken(sessionStorage.token)
  } catch(error) {
    delete sessionStorage.token
  }
  const { token } = sessionStorage
  const [loggedIn, setLoggedIn] = useState(!!token)


  //funciones
  const login = () => navigate('/login')

  const home = () => {
    setLoggedIn(true) //token? true --> la ruta "/" me pinta <Home />
    navigate('/')
  }

  const logout = () => setLoggedIn(false) //token? false --> la ruta "/" me pinta <Landing />
  
  //renderizado
  return <Routes>
    <Route path='/*' element={loggedIn ? <Home onLoggedOut={logout} /> : <Landing />} />
    <Route path='register' element={loggedIn? <Navigate to="/" /> : <Register onRegisterIn={login}/>}/>
    <Route path='login' element={loggedIn? <Navigate to="/" /> : <Login onLoggedIn={home} />} />
  </Routes>
}

export default App
