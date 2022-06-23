import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticateUser } from '../logic'
import Feedback from './Feedback'

function Login({ onLoggedIn }) {
    const [feedback, setFeedback] = useState()
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

            {feedback ? <Feedback level={feedback.level} message={feedback.message} /> : null}

            <button type="submit">Sign in</button>
        </form>

    </div>
}
export default Login