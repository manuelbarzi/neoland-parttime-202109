import { authenticateUser } from '../logic'

export default ({ onLoggedIn }) => {
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

    return <form onSubmit={login}>
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>

        <a href="/register">Register</a>
    </form>
}