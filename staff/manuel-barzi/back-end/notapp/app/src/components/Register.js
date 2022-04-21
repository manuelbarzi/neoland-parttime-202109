import { registerUser } from '../logic'
import './Register.css'
import Context from './Context'
import { useContext } from 'react'

export default function ({ onRegistered }) {
    const { setFeedback } = useContext(Context)

    const register = event => {
        event.preventDefault()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registerUser(name, email, password)
                .then(() => {
                    setFeedback({ level: 'info', message: 'User successfully registered'})

                    onRegistered()
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <form className="Register" onSubmit={register}>
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="e-mail" />
        <input type="password" name="password" placeholder="password" />
        <button>Register</button>
        <a href="/login">Login</a>
    </form>
}