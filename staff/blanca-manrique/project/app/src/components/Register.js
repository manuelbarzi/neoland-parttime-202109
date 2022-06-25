import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../logic'
import Context from './Context'

function Register({ onRegistered }) {
    const { setFeedback } = useContext(Context)
    const navigate = useNavigate()

    const register = event => {
        event.preventDefault()

        const { target:
            { username: { value: username },
                email: { value: email },
                password: { value: password }
            } } = event

        try {
            registerUser(username, email, password)
                .then(() => {
                    onRegistered()
                    setFeedback({level: 'success', message: 'User successfully registered'})
                })
                .catch(error => {
                    setFeedback({ level: 'error', message: error.message })
                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
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
            <button type="submit">Sign up</button>
        </form>

    </div>
}

export default Register