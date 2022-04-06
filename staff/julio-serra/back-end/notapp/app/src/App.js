import Register from './components/Register'
import Landing from './components/Landing'
import Login from './components/Login'
import Home from './components/Home'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { validators } from 'commons'
import './index.css';

const { validateToken } = validators

function App() {
  const navigate = useNavigate()

  try {
    validateToken(sessionStorage.token)
  } catch (error) {
    delete sessionStorage.token
  }

  const { token } = sessionStorage

  const [ loggedIn, setLoggedIn ] = useState(!!token) //para convertirlo a Booleano lo negamos 2 veces
  
  const handleLoggedOut = () => setLoggedIn(false) // ?¿
  
  const handleLoggedIn = () => {
    setLoggedIn(true)
    navigate('/')
  }

  return (
    <>
      <Routes>
        <Route path="/*" element={loggedIn ? <Home onLoggedOut={handleLoggedOut} /> : <Landing />} />
        <Route path="/register" element={loggedIn ? <Navigate to="/" /> : <Register />} />
        <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login onloggedIn={handleLoggedIn} />} />
      </Routes>
    </>
  );
}

export default App;
