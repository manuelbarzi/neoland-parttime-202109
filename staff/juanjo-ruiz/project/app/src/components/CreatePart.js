import { createPart } from "../logic"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useState } from "react"
import Context from "./Context"

export default function ({ coordinates, title }) {
    const { setFeedback } = useContext(Context)
    const navigate = useNavigate()
    const { vehicleId, viewId } = useParams()
    const [image, setImage] = useState()

    const handleAddImage = event => {
        event.preventDefault()

        const file = event.target.files[0]

        const fileReader = new FileReader

        fileReader.readAsDataURL(file)

        fileReader.onload = event => {
            setImage(event.target.result)
        }
    }

    const newPart = event => {
        event.preventDefault()

        const { target: { description: { value: description } } } = event

        try {
            createPart(sessionStorage.token, vehicleId, title, description, image, coordinates)
                .then(() => {
                    setFeedback({ level: 'info', message: 'parte creado' })

                    navigate(`/vehicle/${vehicleId}/view/${viewId}`)
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <div>
        <h2>Nuevo parte</h2>
        <form onSubmit={newPart}>
            <textarea type="name" name="description" placeholder="Descripción del accidente" required ></textarea>
            <input type="file" name="img" onChange={handleAddImage} required />
            {image && <img src={image} />}
            <button>Crear parte</button>
        </form>
    </div>
}