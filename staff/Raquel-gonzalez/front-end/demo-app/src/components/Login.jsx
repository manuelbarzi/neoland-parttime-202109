import { useState } from 'react'
import logger from '../logger'
import authenticateUser from '../logic/authenticate-user'
import './Login.css'

function Login({onLoggedIn, onRegisterClick}) {
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
                .catch (error => setFeedback(error.message))
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const goToRegister = event => {
        event.preventDefault()
        onRegisterClick()
    }

    logger.debug('Login -> render')

    return <div className='login'>
        <h1 className='login__title'>My App</h1>
        <form className='login__form form' onSubmit={submit}>
            <input className='form__username input' type="text" name="username" placeholder="username" />
            <input className='form__password input' type="password" name="password" placeholder="password" />
            <button className='form__btn input'>Login</button>

            {feedback ? <p className='form__feedback'>{feedback}</p> : null}
        </form>

        <a className='login__btn' href="" onClick={goToRegister}>Register</a>

    </div>
}

export default Login