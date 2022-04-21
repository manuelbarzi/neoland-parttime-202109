import './Login.css'
import { authenticateUser } from '../logic';

export default function Login({ onLoggedIn}){

    const login = event => {
        const { target: { email: { value: email}, password: {value: password}}} =event

        try {
            authenticateUser(email, password)
            .then(token => {
                sessionStorage.token = token

                onLoggedIn()
            })
            .catch(error => alert( error.message ))
        } catch (error) {
            alert(error.message)
            
        }
    }

    return <form className="container" onSubmit={login}>
        <input className="input" type="email" name="email" placeholder="email" />
        <input className="input" type="password" name="password" placeholder="password" />
      
        <button className="button">Login</button>

        <a href="/register">Register</a>
    </form>
}