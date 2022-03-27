import Register from './components/Register'
import Landing from './components/Landing'
import Login from './components/Login'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './index.css';


function App() {

  const { token } = sessionStorage
  const { loggedIn, setLoggedin } = useState(!!token) //para convertirlo a Boolen lo negamos 2 veces
  const handleLogout = () => setLoggedin(false) // ?¿
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={loggedIn ? <Home onLogout={handleLogout} /> : <Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
