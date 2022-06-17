import { registerUser } from '../logic'
import { useNavigate } from 'react-router-dom'

function Register({ onRegistered }) {
    const navigate = useNavigate()

    const register = event => {
        event.preventDefault()

        const { target: { username: { value: username }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(username, email, password)
                .then(() => onRegistered())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleGoBack = () => { navigate('/') }

    return <div>
        <a onClick={handleGoBack}>Go back</a>
        <h1> Create account</h1>
        <form onSubmit={register}>
            <input type="text" name="username" placeholder="username" />
            <input type="email" name="email" placeholder="e-mail" />
            <input type="password" name="password" placeholder="password" />
            <button>Sign up</button>
        </form>

    </div>
}

export default Register