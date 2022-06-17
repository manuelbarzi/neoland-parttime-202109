import './styles/RegisterNutritionist.css'
import { registerNutritionist } from '../logic'
import Context from './Context'
import { useContext } from 'react'

function RegisterNutritionist({ onRegistered }){

    const { setResponse } = useContext(Context)

    const register = event => {  //extraigo los campos del evento al hacer onSubit llamo a esta función
        event.preventDefault()
        const { target : { name: { value: name }, email: {value: email}, password: { value: password }}} = event

        //ahora llamo a mi lógica, primero un try si hay errores síncronos:
        try {
            registerNutritionist(name, email, password)
                .then(() => {
                    setResponse({ level: 'info', message: 'Nutritionist successfully registered'})

                    onRegistered()

                .catch(error => setResponse({level: 'error', message: error.message}))
                })
        } catch (error) {
            alert(error.message)
                
        }
    }

                        //cuando se haga submit llamaré al callback register 
    return <form className="container-register" onSubmit={ register }>
        <input className="register-input" type="text" name="name" placeholder="name"/>
        <input className="register-input" type="email" name="email" placeholder="e-mail"/>
        <input className="register-input" type="password" name="password" placeholder="password"/>
        <button className="register-button">Register as a Nutritionist</button>
    </form>
}

export default RegisterNutritionist