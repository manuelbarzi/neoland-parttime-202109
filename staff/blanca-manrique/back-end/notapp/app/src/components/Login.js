import { authenticateUser } from '../logic'

function Login({onLoggedIn}){
    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event
        //const email = event.target.email.value
        
        try {
            authenticateUser(email, password)
                .then( token => {
                    sessionStorage.token = token
                    onLoggedIn()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
    <form onSubmit={login}>
        <input type="text" name="email" placeholder="e-mail" />
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
    </form>
    <a href="/register">Register</a>
</div>
}
export default Login