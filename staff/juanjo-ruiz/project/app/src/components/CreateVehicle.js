import { createVehicle } from "../logic"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import Context from "./Context"

export default function () {
    const navigate = useNavigate()
    const { setFeedback } = useContext(Context)

    const newVehicle = event => {
        event.preventDefault()

        const { target: { lisense: { value: lisense }, brand: { value: brand }, model: { value: model }, frame: { value: frame } } } = event

        try {
            createVehicle(sessionStorage.token, lisense, brand, model, frame)
                .then(() => {
                    setFeedback({ level: 'info', message: 'vehículo creado' })

                    navigate('/vehicles')
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <div>
        <a onClick={() => navigate('/vehicles')}>Volver</a>
        <h2>Nuevo vehículo</h2>
        <form onSubmit={newVehicle}>
            <input type="name" name="lisense" placeholder="matrícula" required />
            <input type="name" name="brand" placeholder="marca" required />
            <input type="name" name="model" placeholder="modelo" required />
            <input type="name" name="frame" placeholder="número de bastidor" required />
            <button>Crear vehículo</button>
        </form>
    </div>
}