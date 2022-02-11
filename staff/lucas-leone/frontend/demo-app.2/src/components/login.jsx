import { useState } from 'react'
import authenticateUser from '../logic/authenticate-user'
import logger from '../logger'



function Login ({ onLoggedIn, onRegisterClick}) {
    const [feedback, setFeedback] = useState(null)
    const login =event =>{
        event.preventDefault()

        const username = event.target.username.value
        const password = event.target.password.value

        try {
            authenticateUser(username, password )
               .then(token => {
                   sessionStorage.token = token
                   onLoggedIn(token)
               })
            .catch (error => setFeedback(error.message))
            } catch(error){
                setFeedback(error.message)
            }

        }
    const goToRegister = event => {
        event.preventDefault()

        onRegisterClick()
    }


    logger.debug('Login -> render')
        return <div className='contenedor' >
            <form className='contenedor_credentials' onSubmit={login}>
                <input type="text" name="username" placeholder="username" />
                <input type="password" name="password" placeholder="password" />

                <button>Login</button>

                {feedback ? <p>{feedback}</p> : null}
            </form>

            <a href="" onClick={goToRegister}>Register</a>
        </div>
    
}

export default Login