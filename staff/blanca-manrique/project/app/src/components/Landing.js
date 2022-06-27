import { useNavigate } from 'react-router-dom'
import './Landing.css'
import { GiCargoCrate } from "react-icons/gi"


function Landing() {
    const navigate = useNavigate()

    const handleGoToRegister = () => { navigate('register') }
    const handleGoToLogin = () => { navigate('login') }

    return <div className='Landing'>
        <div className='Landing__title'>
            <h1 className='Landing__name'>CARGO</h1>
            <GiCargoCrate className='Landing__icon' />
        </div>
        <div className='Landing__btns'>
            <button className='btn btn-register' onClick={handleGoToRegister}>Register</button>
            <button className='btn btn-login' onClick={handleGoToLogin}>Login</button>
        </div>
    </div>
}
export default Landing