import { authenticateNutritionist } from '../logic'
import { useContext} from 'react'  //para usar el feedback de response
import Context from './Context'
import './styles/Login.css'

function Login({ onLoggedIn }){

    const { setResponse } = useContext(Context)  //extraígo el método que cree en App de response

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

            return <form className="example" onSubmit={ login }>
            <input className="input" type="email" name="email" placeholder="e-mail" />
            <input type="password" name="password" placeholder="password" />
            <button href="/home">Login</button>
            </form>
 }

 export default Login