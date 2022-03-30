//Hacer el componente de Registro
//importar lógica:

import { registerUser } from '../logic'   //la carpeta logic porque esta en el index

function Register() {
    const register = event => {

        event.preventDefault()
        const { target: { name: { value: name }, email: { value: email}, password: {value: password }}} =event //extraigo los campos

        try {
            registerUser(name, email, password)
                .then(() => console.log('user registered!'))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
                                //llamo al register
        return <form onSubmit= {register}>  
            <input type="text" name="name" placeholder="name..."/>
            <input type="email" name="email" placeholder="e-mail"/>
            <input type="password" name="password" placeholder="password..."/>
            <button> Register </button>

            <a href="/login">Login</a>
        </form>
}

export default Register