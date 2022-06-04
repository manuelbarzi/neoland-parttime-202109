import { createUser } from "../logic"
import { useNavigate } from "react-router-dom"

export default function () {
    const navigate = useNavigate()

    const addUser = event => {
        event.preventDefualt()

        const { target: { name: { value: name }, email: { value: email }, password: { value: password }, role: { value: role } } } = event

        try {
            createUser(sessionStorage.token, name, email, password, role)
                .then(() => {
                    alert('ususario creado')
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div>
        <a onClick={() => navigate('/users')}>Volver</a>
        <h2>Nuevo usuario</h2>
        <form onSubmit={addUser}>
            <input type="name" name="name" placeholder="name" required />
            <input type="email" name="email" placeholder="email" required />
            <input type="password" name="password" placeholder="password" required />
            <select name="role">
                <option value="driver">driver</option>
                <option value="admin">admin</option>
            </select>
            <button>Añadir</button>
        </form>
    </div>
}