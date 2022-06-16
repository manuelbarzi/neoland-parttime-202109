import { createVehicle } from "../logic"
import { useNavigate } from "react-router-dom"

export default function () {
    const navigate = useNavigate()

    const newVehicle = event => {
        event.preventDefault()

        const { target: { lisense: { value: lisense }, brand: { value: brand }, model: { value: model }, frame: { value: frame } } } = event

        try {
            createVehicle(sessionStorage.token, lisense, brand, model, frame)
                .then(() => {
                    alert('Vehículo creado')

                    navigate('/vehicles')
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
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