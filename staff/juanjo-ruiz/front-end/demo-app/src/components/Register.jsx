import { useState } from 'react'
import registerUser from '../logic/register-user'

function Register({ onRegistered, onLoginClick }) {
    const [feedback, setFeedback] = useState(null)

    const onRegisterUser = event => {
        event.preventDefault()

        const name = event.target.name.value
        const city = event.target.city.value
        const username = event.target.username.value
        const password = event.target.password.value

        try {
            registerUser(name, city, username, password)
                .then(() => onRegistered())
                .catch(error => setFeedback(error.message))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const showLogin = event => {
        event.preventDefault()

        onLoginClick()
    }

    return <div className="container">
        <form className="form form-container" onSubmit={onRegisterUser}>
            <h2 className="title title-form">Registrate</h2>

            <input className="input input-form" type="text" name="name" placeholder="nombre" requerid />
            <input className="input input-form" type="text" name="city" placeholder="ciudad" requerid />
            <input className="input input-form" type="text" name="username" placeholder="usuario" requerid />
            <input className="input input-form" type="password" name="password" placeholder="contraseña" requerid />

            <button className="button button-form">Registrate</button>

            {feedback ? <p>{feedback}</p> : null}
        </form>

        <p><a href="" onClick={showLogin}>Inicia sesión</a> si ya estas registrado</p>
    </div>
}

export default Register
