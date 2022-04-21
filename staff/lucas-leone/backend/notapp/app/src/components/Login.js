import { authenticateUser } from '../logic'
import './Login.css'

export default ({onLoggedIn}) => {
    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token

                    onLoggedIn()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <form  className='Login' onSubmit={login}>
        <input type="email" name="email" placeholder="e-mail" />
        <input type="password" name="password" placeholder="password" />
        <button className='login-click'>Login</button>
        <a className='Login-register'href="/register"> ---Register</a>
    </form>
}