import { useState } from 'react'
import authenticateUser from '../logic/authenticate-user'
import logger from '../logger.js'
import './Login.css'

function Login({ onLoggedIn, onRegisterClick }) {
    const [feedback, setFeedback] = useState(null)

    const login = event => {
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

    return <div className="container container--max-height">
        <div className="login container panel container--column container--padding-m">
            <form className="container container--column container--margin-m" onSubmit={login}>
                <input className="container panel__input login__input container--margin-m" type="text" name="username" placeholder="username" />
                <input className="container panel__input login__input container--margin-m" type="password" name="password" placeholder="password" />

                <button className="button login__button panel__button container container--margin-m">Login</button>

                {feedback ? <p>{feedback}</p> : null}
            </form>

            <a className="login__link" href="" onClick={goToRegister}>Register</a>
        </div>
    </div>
}

export default Login