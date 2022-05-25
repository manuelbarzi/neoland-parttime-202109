import { registerCompany } from '../logic'

export default function ({onRegistered}) {
    const register = event => {
        event.preventDefault()
        
        const { target: { businessName: { value: businessName } }, cif: { value: { cif } }, name: { value: { name } }, email: { value: { email } }, password: { value: { password } }, role: { value: { role } } } = event

        try {
            registerCompany(businessName, cif, name, email, password, role)
                .then(() => {
                    alert('admin registrado')
                    
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
        <p>Ya tienes cuenta,<a href="/login"> inicia sesión</a></p>
    </form>
}
