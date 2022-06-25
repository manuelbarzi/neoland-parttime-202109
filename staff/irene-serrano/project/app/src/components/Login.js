import './Login.css'
import {authenticateUser} from '../logic'
import { useState, useContext } from 'react'
import { useNavigate }  from 'react-router-dom'
import Feedback from './Feedback'


export default function ({onLoggedIn}){
    const [feedback, setFeedback] = useState()
    const navigate = useNavigate()

    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token
                    onLoggedIn()
                })
                .catch(error => {
                    setFeedback({ level: 'error', message: error.message })
                    if (error.message === 'token expired') delete sessionStorage.token
                })
        } catch (error){
            setFeedback({ level: 'error', message: error.message })
        }
    }
    
    return <div className='Login'>
        <a onClick={() => navigate("/")}>back</a>
        <h2 className='Login__title'>Log in</h2>
        <form  className='Login__form' onSubmit={login}>
            <input className='form__input' type="email" name="email" placeholder="Email" />
            <input className='form__input' type="password" name="password" placeholder="Password" />

            {feedback? <Feedback level={feedback.level} message={feedback.message} />: null}

            <button className="Login__button-primary-full" type="submit" >Submit</button>
        </form>
    </div>
}