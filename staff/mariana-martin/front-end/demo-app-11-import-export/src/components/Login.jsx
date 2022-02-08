
import { useState } from 'react'
import authenticateUser from '../logic/authenticate-user'
import logger from '../logger'


function Login({ onLoggedIn, onRegisterClick }) { //paso props en {}

    const [feedback, setFeedback] = useState(null)

    const login = event => {    //ya no es método de clase, ya es función en Login
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        try {
            authenticateUser(username, password, (error, token) => {
                if (error) {
                   setFeedback(error.message)

                    return
                }

                sessionStorage.token = token

                onLoggedIn(token)
            })
        } catch (error) {
            setFeedback(error.message)
        }
         }

        const goToRegister = event => {
            event.preventDefault()
    
           onRegisterClick()
        }


        logger.debug('Login --> render')

        return <div className="container">
            <div className="container">
                <form className="container" onSubmit={login}>
                    <input className="container" type="text" name="username" placeholder="username" />
                    <input className="container" type="password" name="password" placeholder="password" />

                    <button className="container__btn">Login</button>

                    {feedback ? <p>{feedback}</p> : null}
                    
                </form>

                <a className="login" href="" onClick={goToRegister}>Register</a>
            </div>
        </div>
        
}

export default Login
