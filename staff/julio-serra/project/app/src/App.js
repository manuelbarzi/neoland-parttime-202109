import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Register from './components/Register';
import Landing from './components/Landing';
import Login from './components/Login';
import Space from './components/Space';
import AllSpaces from './components/AllSpaces'

import './index.css';

export default function App() {

  const navigate = useNavigate()
  const { token } = sessionStorage
  const [loggedIn, setLoggedIn] = useState(!!token) //para convertirlo a booleano lo negamos 2 veces

  const handleLoggedIn = () => {
    setLoggedIn(true)
    navigate('/')
  }

  return (
    <>
      <Routes>
        <Route path='/*' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={loggedIn ? <Navigate to="/" /> : <Login onloggedIn={handleLoggedIn} />} />
        <Route path='/spaces/:spaceId' element={<Space />} />
        <Route path='/allspaces' element={<AllSpaces />} />
      </Routes>
    </>
  );
}

