import { useNavigate } from 'react-router-dom'

function Landing() {
    const navigate = useNavigate()

    const handleGoToRegister = () => { navigate('register') }
    const handleGoToLogin = () => { navigate('login') }

    return <div>
        <h1>PROJECT</h1>
        <button onClick={handleGoToRegister}>Create account</button>
        <button onClick={handleGoToLogin}>Login</button>
    </div>
}
export default Landing