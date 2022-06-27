import { Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import Landing from '../src/components/Landing';
import Login from '../src/components/Login';
import Home from '../src/components/Home'
import RegisterNutritionist from '../src/components/RegisterNutritionist';
import '../index.css';

import Context from '../src/components/Context'
import Response from '../src/components/Response'
import { validators } from 'commons'
// import MyPatients from './MyPatients';
// import PatientForm from './PatientForm';
// import ErrorPageCompo from './ErrorPageCompo'

const { validateToken } = validators


function App() {

  //estado de contexto para dar feedback(response) de peticiones a manera global
  const [response, setResponse] = useState({ level: 'info', message: null })
  const navigate = useNavigate()

  try {
    validateToken(sessionStorage.token)
  } catch (error) {
    delete sessionStorage.token
  }

  const { token } = sessionStorage 
  const [loggedIn, setLoggedIn] = useState(!!token) //convierto a boolean  para evaluar si esta o no loggeado

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
  const clearResponse = () => setResponse({ message: null }) //quito contexto si no hay mensaje de feddback



  return (
    <div className="App">
      <Context.Provider value={{ setResponse }} >
        {/* si hay mensaje en response muestra el compo de response con el feedback */}
        {response.message && <Response level={response.level} message={response.message} onTimeout={clearResponse} />}
       
        <Routes>
          <Route path="/*" element={loggedIn ? <Home  onLoggedOut={ handleLoggedOut } /> : <Landing />} />
          <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <Login onLoggedIn={ handleLoggedIn } />} />
          <Route path="/register-nutritionist" element={loggedIn ? <Navigate to="/" /> : <RegisterNutritionist onRegistered={ handleRegistered }/>} />
          {/* <Route path="/my-patients/*" element={<MyPatients /> }  />
          <Route path="/register-patient" element={<PatientForm /> }  /> 
          <Route path="*" element={ <ErrorPageCompo /> } />  */}
        </Routes>
       

      </Context.Provider>

    </div>
  );
}

export default App;
