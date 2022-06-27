import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../logic'
import Context from './Context'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi"
import './Register.css'

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
                    setFeedback({ level: 'success', message: 'User successfully registered' })
                })
                .catch(error => {
                    setFeedback({ level: 'error', message: error.message })
                })
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    const handleGoBack = () => { navigate('/') }

    return <div className='Form'>
        <div className='Form__header'>
            <HiOutlineArrowLeft className='Form__iconBack' onClick={handleGoBack} />
            <h1 className='Form__title'> Create account</h1>
        </div>
        <form className='Form__body' onSubmit={register}>
            <input className='Form__bodyInput' type="text" name="username" placeholder="username" />
            <input className='Form__bodyInput' type="email" name="email" placeholder="e-mail" />
            <input className='Form__bodyInput' type="password" name="password" placeholder="password" />
            <button type="submit" className='Form__btn btn-hover'>Sign up <HiOutlineArrowRight className='Form__btn-icon btn-hover'/></button>
        </form>

    </div>
}

export default Register