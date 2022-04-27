import { registerUser } from '../logic'

export default function() {
    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, email, password)
                .then(() => console.log('user registered'))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <form onSubmit={register}>
        <input type="text" name="name" placeholder="name"></input>
        <input type="email" name="email" placeholder="email"></input>
        <input type="password" name="password" placeholder="password"></input>

        <button>Register</button>

        <a href="/login">Login</a>
    </form>
}