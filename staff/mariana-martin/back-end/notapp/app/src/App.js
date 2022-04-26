

//importamos el componentes:
import './App.css'
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'  //lo importo para hacer los paths
import { useState } from 'react'
import { validators } from 'commons'
import Context from './components/Context';
import Feedback from './components/Feedback'


const { validateToken } = validators


function App() {

  const navigate = useNavigate() //para cambios de ruta
  const [feedback, setFeedback] = useState({ level:'info', message: null})

      try {
        validateToken(sessionStorage.token)
      } catch (error) {
        delete sessionStorage.token
      }

  const { token } = sessionStorage  //si se borra sessionStorage token serà undefined( doblemente negado es false)

  const [loggedIn, setLoggedIn] = useState(!!token) //!!negar 2 veces se convierte boolean

  const handleLoggedOut = () => setLoggedIn(false) //forzar cambio de estado,

  const handleLoggedIn = () => {
    setLoggedIn(true)

    navigate('/')
  }

  const handleRegistered = () => navigate('/login')

  const clearFeedback = () => setFeedback({ message: null })

  return ( <Context.Provider value={{ setFeedback }}>
    {feedback.message && <Feedback level={feedback.level} message={feedback.message} onTimeout={clearFeedback}/>}

    <div className="App">

      <Routes>
        <Route path="/*" element={loggedIn ? <Home onLoggedOut={handleLoggedOut} /> : <Landing />} />
        <Route path="/register" element={loggedIn ? <Navigate to="/" /> : <Register onRegistered={handleRegistered} />} />
        <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login onLoggedIn={handleLoggedIn} />} />
      </Routes>

    </div>
    </Context.Provider>
  );
  
}

export default App;
