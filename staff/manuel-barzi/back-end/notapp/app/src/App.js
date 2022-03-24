import Landing from './components/Landing'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useState } from 'react'

function App() {
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
      <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login onLoggedIn={handleLoggedIn} />} />
    </Routes>
  </div>
}

export default App;
