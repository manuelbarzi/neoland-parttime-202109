import { Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Landing from './Landing';
import Login from './Login';
import Home from './Home'
import RegisterNutritionist from './RegisterNutritionist';
import '../index.css';

import Context from './Context'
import Response from './Response'
import { validators } from 'commons'


const { validateToken } = validators


function App() {

  
  const [response, setResponse] = useState({ level: 'info', message: null })
  const navigate = useNavigate()

    try {
      validateToken(sessionStorage.token)
    } catch (error) {
      delete sessionStorage.token
    }

  const { token } = sessionStorage 
  const [loggedIn, setLoggedIn] = useState(!!token) 

  const handleLoggedOut = () => { //pasaré esta función en la prop de onLoggedOut en Home
    setLoggedIn(false) 
  }

  const handleLoggedIn = () => {//pasaré esta función en la prop de onLoggedIn en Login
    setLoggedIn(true)   //cambio al estado a true 
    navigate('/')
  }

  const handleRegistered = () => {
    navigate('/login') 
  }
  const clearResponse = () => setResponse({ message: null }) //quito contexto si no hay mensaje de feedback



  return (
    <div className="App">
      <Context.Provider value={{ setResponse }} >
          {/* si hay mensaje en response muestra el compo de response con el feedback */}
          {response.message && <Response level={response.level} message={response.message} onTimeout={clearResponse} />}
        
          <Routes>
            <Route path="/*" element={loggedIn ? <Home  onloggedOut={ handleLoggedOut } /> : <Landing />} />
            <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login onLoggedIn={ handleLoggedIn } />} />
            <Route path="/register-nutritionist" element={loggedIn ? <Navigate to="/" /> : <RegisterNutritionist onRegistered={ handleRegistered }/>} />
          </Routes>
        
      </Context.Provider>

    </div>
  );
}

export default App;
