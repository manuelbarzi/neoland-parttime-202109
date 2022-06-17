import { Routes, Route, useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Suppliers from './Suppliers'
import Orders from './Orders'

function Home({ onLoggedOut }) {
    const navigate = useNavigate()
    
    const logout = () => { //Nav
        delete sessionStorage.token
        onLoggedOut()
    }

    const handleReturnHome = () =>{
        navigate('/')
    }

    return <div>
        <Nav handleLogout={logout}/>
        
        <Routes >
            <Route path='suppliers/*' element={<Suppliers onReturnClick={handleReturnHome}  />} />
            <Route path='orders/*' element={<Orders onReturnClick={handleReturnHome}  />} />
        </Routes>

    </div>
}
export default Home