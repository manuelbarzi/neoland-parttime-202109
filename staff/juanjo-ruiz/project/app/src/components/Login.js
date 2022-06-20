import { authenticateUser } from "../logic"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import Context from "./Context"

export default function ({ onLoggedIn }) {
    const navigate = useNavigate()
    const { setFeedback } = useContext(Context)

    const login = event => {
        event.preventDefault()

        const { target: { email: { value: email }, password: { value: password } } } = event

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token

                    onLoggedIn()
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <div>
        <h2>Accede a tu cuenta de Driver</h2>
        <form onSubmit={login}>
            <a onClick={() => navigate("/")}>Volver</a>
            <input type="email" name="email" placeholder="Introduce tu correo electrónico" />
            <input type="password" name="password" placeholder="Introduce tu contraseña" />
            <button>Inicia sesión</button>

            <p>Aún no estas registrado,<a onClick={() => navigate("/register")}>hazlo aquí</a></p>
        </form>
    </div>
}