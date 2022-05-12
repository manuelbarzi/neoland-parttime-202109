import { authenticateUser } from '../logic'
import { useContext } from 'react'
import Context from './Context'
import './Login.css'

export default ({ onLoggedIn }) => {
    const { setFeedback } = useContext(Context)

    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token

                    onLoggedIn()
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <form className="Login" onSubmit={login}>
        <input type="email" name="email" placeholder="e-mail" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
        <a href="/register">Register</a>
    </form>
}