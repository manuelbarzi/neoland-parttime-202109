import Register from './Register';
import Home from './Home';
import Login from './Login';
import Landing from './Landing';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { validators } from 'commons';
const { validateToken } = validators

function App() {
  const navigate = useNavigate()

  const { token } = sessionStorage

  try {
    validateToken(token)
  } catch (error) {
    delete sessionStorage.token
  }

  const handleRegistered = () => navigate('/login')

  const handleLogIn = () => {
    navigate('/')
  }

  const handleLogOut = () => {
    delete sessionStorage.token

    navigate('/login')
  }

  return <Routes>
    <Route path="/*" element={token ? <Home onLoggedOut={handleLogOut} /> : <Landing />} />
    <Route path="/register" element={token ? <Navigate to="/" /> : <Register onRegistered={handleRegistered} />} />
    <Route path="/login" element={token ? <Navigate to="/" /> : <Login onLoggedIn={handleLogIn} />} />
  </Routes>
}

export default App;
