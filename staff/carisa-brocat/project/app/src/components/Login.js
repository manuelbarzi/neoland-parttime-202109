import { Link } from 'react-router-dom'
import { authenticateUser } from '../logic'

function Login({ onLoggedIn}) {

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
                    console.log(error.message)

                    alert(error.message)
                })
        } catch (error) {
            console.log(error.message)

            alert(error.message)
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