import { authenticateUser } from '../logic'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ onLoggedIn }) {
    const [feedback, setFeedback] = useState()
    const navigate = useNavigate()

    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event
        //const email = event.target.email.value

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token
                    onLoggedIn()
                })
                .catch(error => setFeedback(error.message))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const handleGoBack = () => { navigate('/') }

    return <div>
        <a onClick={handleGoBack}>Go back</a>
        <h1>Login to continue</h1>
        <form onSubmit={login}>
            <input type="text" name="email" placeholder="e-mail" />
            <input type="password" name="password" placeholder="password" />
            <button>Sign in</button>
            {feedback ? <p>feedback</p> : null}
        </form>

    </div>
}
export default Login