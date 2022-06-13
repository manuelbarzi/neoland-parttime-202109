import { authenticateUser } from "../logic";


export default function ({ onLogged }) {
    const login = event => {
        event.preventDefault()

        const { target: { username: { value: username }, password: { value: password } } } = event


        try {
            authenticateUser(username, password)
                .then(token => {
                     sessionStorage.token = token

                    onLogged()

                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)

        }
    }

    return <form onSubmit={login}>
        <input type='text' name='username' placeholder='username' />
        <input type='password' name='password' placeholder='password' />
        <button>Login</button>
        <a href="/Register">Register</a>
    </form>

}
