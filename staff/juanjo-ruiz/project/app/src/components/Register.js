import { registerCompany } from '../logic'
import { useNavigate } from 'react-router-dom'

export default function ({ onRegistered }) {
    const navigate = useNavigate()

    const register = event => {
        event.preventDefault()

        const { target: { businessName: { value: businessName }, cif: { value: cif }, name: { value: name }, email: { value: email }, password: { value: password } } } = event

        try {
            registerCompany(businessName, cif, name, email, password)
                .then(() => {
                    alert('Bienvenido al fin de tus problemas')

                    onRegistered()
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <form onSubmit={register}>
        <input type="text" name="businessName" placeholder="Introduce el nombre de la empresa" />
        <input type="text" name="cif" placeholder="Introduce el cif" />
        <input type="text" name="name" placeholder="Introduce tu nombre" />
        <input type="email" name="email" placeholder="Introduce tu correo electrónico" />
        <input type="password" name="password" placeholder="Elige una contraseña" />
        <button>Registrate</button>
        <p>Ya tienes cuenta,<a onClick={() => navigate('/')}> inicia sesión</a></p>
    </form>
}
