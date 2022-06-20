import { createPart } from "../logic"
import { useNavigate, useParams } from "react-router-dom"
import { useContext } from "react"
import Context from "./Context"

export default function () {
    const { setFeedback} = useContext(Context)
    const navigate = useNavigate()
    const { vehicleId } = useParams()

    const newPart = event => {
        event.preventDefault()

        const { target: { descripcition: { value: descripcition }, image: { value: image } } } = event

        try {
            createPart(sessionStorage.token, vehicleId, descripcition, image)
                .then(() => {
                    setFeedback({level: 'info', message: 'parte creado'})

                    navigate(`/vehicle/${vehicleId}/parts`)
                })
                .catch(error => setFeedback({level: 'error', message: error.message}))
        } catch (error) {
            setFeedback({level: 'error', message: error.message})
        }
    }

    return <div>
        <a onClick={() => navigate(`/vehicle/${vehicleId}/parts`)}>Volver</a>
        <h2>Nuevo parte</h2>
        <form onSubmit={newPart}>
            <input type="name" name="description" placeholder="Descripción del accidente" required />
            <input type="file" name="image" required />
            <button>Crear parte</button>
        </form>
    </div>
}