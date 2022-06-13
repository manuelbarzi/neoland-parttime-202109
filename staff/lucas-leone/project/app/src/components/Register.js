import { registerUser } from "../logic";


export default function ({ onRegistered }) {
    const register = event => {
        event.preventDefault()

        const { target: { username: { value: username }, email: { value: email }, password: { value: password } } } = event


        try {
            registerUser(username, email, password)
                .then(() => {


                    onRegistered()

                })
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)

        }
    }

    return <form onSubmit={register}>
        <input type='text' name='username' placeholder='username' />
        <input type='email' name='email' placeholder='email' />
        <input type='password' name='password' placeholder='password' />
        <button>Register</button>
        <a href="/login">Login</a>
    </form>

}
