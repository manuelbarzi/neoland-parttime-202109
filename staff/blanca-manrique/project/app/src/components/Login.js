import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticateUser } from '../logic'
import Context from './Context'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi"
import './Login.css'

function Login({ onLoggedIn }) {
    const { setFeedback } = useContext(Context)
    const navigate = useNavigate()

    const login = event => {
        event.preventDefault()

        const { target:
            { email: { value: email },
                password: { value: password }
            } } = event

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
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    const handleGoBack = () => { navigate('/') }

    return <div className='Form'>
        <div className='Form__header'>
            <HiOutlineArrowLeft className='Form__iconBack' onClick={handleGoBack} />
            <h1 className='Form__title'>Login to continue</h1>
        </div>
        <form className='Form__body' onSubmit={login}>
            <input className='Form__bodyInput' type="text" name="email" placeholder="e-mail" />
            <input className='Form__bodyInput' type="password" name="password" placeholder="password" />
            <button type="submit" className='Form__btn btn-hover'>Sign in <HiOutlineArrowRight className='Form__btn-icon btn-hover'/></button>
        </form>
    </div>
}
export default Login