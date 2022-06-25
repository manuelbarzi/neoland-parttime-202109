import { Link } from 'react-router-dom'
import { authenticateUser } from '../logic'
import { useContext } from 'react'
import Context from './Context'

function Login({ onLoggedIn}) {
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
                .catch(error => {
                    setFeedback({ level: 'error', message: error.message })
                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <form onSubmit={login} >
        <input type="email" name="email" placeholder="email" required />
        <input type="password" name="password" placeholder="password" required />
        <button>LogIn</button>
        <p>New in RockUrAfro
            <Link to="/register">Register</Link>
        </p>
    </form>
}

export default Login