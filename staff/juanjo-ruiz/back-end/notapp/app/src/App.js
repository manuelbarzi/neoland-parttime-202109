import Home from './components/Home'
import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useState } from 'react'


export default function () {
  const navigate = useNavigate()

  const { token } = sessionStorage

  const [loggedIn, setLoggedIn] = useState(!!token)

  const handleLoggedOut = () => setLoggedIn(false)

  const handleLoggedIn = () => {
    setLoggedIn(true)

    navigate('/')
  }

  return <div>
    <Routes>
      <Route path="/" element={loggedIn ? <Home onLoggedOut={handleLoggedOut} /> : <Landing />} />
      <Route path="/register" element={loggedIn ? <Navigate to="/" /> : <Register />} />
      <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login onloggedIn={handleLoggedIn} />} />
    </Routes>
  </div>
}
