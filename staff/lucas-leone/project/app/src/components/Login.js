import { authenticateUser } from "../logic"
import { useContext } from 'react'
import Context from './Context'


export default function ({ onLogged }) {
    const { setFeedback } = useContext(Context)
    const login = event => {
        event.preventDefault()

        const { target: { username: { value: username }, password: { value: password } } } = event


        try {
            authenticateUser(username, password)
                .then(token => {
                     sessionStorage.token = token

                    onLogged(username)

                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'error', message: error.message })

        }
    }

    return <form onSubmit={login}>
        <input type='text' name='username' placeholder='username' />
        <input type='password' name='password' placeholder='password' />
        <button>Login</button>
        <a href="/Register">Register</a>
    </form>

}
