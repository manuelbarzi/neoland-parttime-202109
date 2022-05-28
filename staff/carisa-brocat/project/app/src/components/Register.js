import { Link } from 'react-router-dom'
import { registerUser } from '../logic'

function Register({ onRegistered }) {

    const register = event => {
        event.preventDefault()

        const nickname = event.target.nickname.value
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerUser(nickname, email, password)
                .then(() => {
                    onRegistered()
                })
                .catch(error => {
                    console.log(error.message)
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <form className="Register" onSubmit={register} >
        <input type="text" name="nickname" placeholder="nickname" required />
        <input type="email" name="email" placeholder="email" required />
        <input type="password" name="password" placeholder="password" required />
        <button type="submit">Register</button>
        <p>Do you alreday have an account
            <Link to="/login">LogIn</Link>
        </p>
    </form>
}

export default Register