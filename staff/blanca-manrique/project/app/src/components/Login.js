import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticateUser } from '../logic'
import Context from './Context'

function Login({ onLoggedIn }) {
    const { setFeedback } = useContext(Context)
    const navigate = useNavigate()

    const login = event => {
        event.preventDefault()

        const { target:
            { email: { value: email },
                password: { value: password }
            } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token
                    onLoggedIn()
                    setFeedback({level: 'success', message: 'User successfully logged in'})
                })
                .catch(error => {
                    setFeedback({ level: 'error', message: error.message })
                    if (error.message === 'token expired') delete sessionStorage.token
                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    const handleGoBack = () => { navigate('/') }

    return <div>
        <a onClick={handleGoBack}>Go back</a>
        <h1>Login to continue</h1>
        <form onSubmit={login}>
            <input type="text" name="email" placeholder="e-mail" />
            <input type="password" name="password" placeholder="password" />
            <button type="submit">Sign in</button>
        </form>
    </div>
}
export default Login