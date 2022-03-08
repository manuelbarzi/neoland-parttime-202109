import { registerUser } from '../logic'

function Register() {

    const register = event => {
        event.preventDefault()
        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event //extraer los campos
        try {
            registerUser(name, email, password)
            .then(() => console.log('User Registered'))
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }


    return <form style={{gap: "0.5rem", display: "flex"}} onSubmit={register}>
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <button>Submit</button>
    </form>
} 

export default Register