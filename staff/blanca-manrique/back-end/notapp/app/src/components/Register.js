import { registerUser } from '../logic'

function Register({ onRegisterIn}) {
    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, email, password)
                .then(() => onRegisterIn())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <form onSubmit={register}>
            <input type="text" name="name" placeholder="name" />
            <input type="email" name="email" placeholder="e-mail" />
            <input type="password" name="password" placeholder="password" />
            <button>Register</button>
        </form>
        <a href="/login">Login</a>
    </div>
}

export default Register