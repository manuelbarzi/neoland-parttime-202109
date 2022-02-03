import { useState } from 'react'
import authenticateUser from '../logic/authenticate-user'
import '../index.css'

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

    const onRegister = event => {
        event.preventDefault()

        onRegisterClick()
    }

    return <div className="container">
        <form className="form form-container" onSubmit={login}>
            <h2 className="title title-form">Inicia Sesión</h2>

            <input className="input input-form" type="text" name="username" placeholder="usuario" />
            <input className="input input-form" type="password" name="password" placeholder="contraseña" />

            <button className="button button-form">Inicia Sesión</button>

            {feedback ? <p className="feedback-error">{feedback}</p> : null}
        </form>

        <p><a href="" onClick={onRegister}>Registrate</a> si aún no tienes cuenta </p>
    </div>
}

export default Login