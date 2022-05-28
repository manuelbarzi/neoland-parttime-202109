import Register from './Register';
import Home from './Home';
import Login from './Login';
import Landing from './Landing';
import Quiz from './Quiz';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useState } from 'react'
import { validateToken } from 'commons/src/validators';

function App() {
  const navigate = useNavigate()

  try {
    validateToken(token)
  } catch (error) {
    delete sessionStorage.token
  }

  const { token } = sessionStorage

  const handleRegistered = () => navigate('/login')

  const handleLogIn = () => {
      navigate('/')
  }

  return <Routes>
    <Route path="/" element={token ? <Home /> : <Landing />} />
    <Route path="/register" element={<Register onRegistered={handleRegistered} />} />
    <Route path="/login" element={<Login onLoggedIn={handleLogIn} />} />
    <Route path="/quiz" element={<Quiz goToHome={handleLogIn}/>} />
  </Routes>
}

export default App;
