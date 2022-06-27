import { authenticateNutritionist } from '../logic'
import { useContext} from 'react'  //para usar el feedback de response
import Context from './Context'
import './styles/Login.css'
import {AiOutlineLeft} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

function Login({ onLoggedIn }){

    const { setResponse } = useContext(Context)  //extraígo el método que cree en App de response

    const navigate = useNavigate()

    const login = event => {
        event.preventDefault()

        const { target: { email: { value:email}, password: { value:password} } } = event //extraígo datos

        //llamo a la lógica:
        try {
            authenticateNutritionist(email, password)
                .then(token => {
                    sessionStorage.token = token
                    
                    onLoggedIn()
                })
                .catch(error => setResponse({ level: 'error', message: error.message})) 
        } catch (error) {
                setResponse({ level: 'error', message:error.message}) //error síncrono
            
        }
    }

            return ( <div  >
            <div onClick={() => navigate("/")}> <AiOutlineLeft className="back-icon" /> </div>
            <form  className="container container-login" onSubmit={ login }>
            <input className="login-input" type="email" name="email" placeholder="e-mail" />
            <input className="login-input" type="password" name="password" placeholder="password" />
            <button className="login-button" href="/home">LOGIN</button>
            </form>
            </div>
            )
 }

 export default Login