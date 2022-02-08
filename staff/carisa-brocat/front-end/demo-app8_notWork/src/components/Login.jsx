import { useState } from 'react'
import logger from '../logger'
import authenticateUser from '../logic/authenticate-user'

function Login({ onLoggedIn, onRegisterClick }) {
    const [feedback, setFeedback] = useState(null)

    const submit = event => {
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        try {
            authenticateUser(username, password)
                .then(token => {
                    sessionStorage.token = token

                    onLoggedIn(token)
                })
                .catch(error => setFeedback(error.message))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const goToRegister = event => {
        event.preventDefault()

        onRegisterClick()
    }

    logger.debug('Login -> render')

    return <div>
        {/* creando formulario de login */}
        <form onSubmit={submit}>
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <button>Login</button>

            {feedback ? <p>{feedback}</p> : null}
        </form>

        <a href="" onClick={goToRegister}>Register</a>
    </div>
}

export default Login