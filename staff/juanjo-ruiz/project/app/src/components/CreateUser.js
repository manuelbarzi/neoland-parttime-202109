import { createUser } from "../logic"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import Context from "./Context"

export default function () {
    const { setFeedback } = useContext(Context)

    const navigate = useNavigate()

    const newUser = event => {
        event.preventDefault()

        const { target: { id: { value: id }, name: { value: name }, email: { value: email }, password: { value: password }, phone: { value: phone }, dischargeDate: { value: dischargeDate }, role: { value: role } } } = event

        try {
            createUser(sessionStorage.token, id, name, email, password, phone, dischargeDate, role)
                .then(() => {
                    setFeedback({ level: 'info', message: 'usuario creado' })

                    navigate('/users')
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <div>
        <a onClick={() => navigate('/users')}>Volver</a>
        <h2>Nuevo usuario</h2>
        <form onSubmit={newUser}>
            <input type="name" name="id" placeholder="id driver" required />
            <input type="name" name="name" placeholder="nombre" required />
            <input type="email" name="email" placeholder="correo electrónico" required />
            <input type="password" name="password" placeholder="contraseña" required />
            <input type="number" name="phone" placeholder="número de teléfono" />
            <input type="date" name="dischargeDate" required />
            <select name="role">
                <option value="driver">driver</option>
                <option value="admin">admin</option>
                <option value="owner">owner</option>
            </select>
            <button>Crear usuario</button>
        </form>
    </div>
}