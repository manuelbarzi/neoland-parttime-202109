import { useNavigate, useParams } from "react-router-dom"
import { useState, useContext } from 'react'
import Context from "./Context"
import { addViewsVehicle } from "../logic"

export default function () {
    const navigate = useNavigate()
    const { setFeedback } = useContext(Context)
    const { vehicleId } = useParams()
    const [imageB64, setImageB64] = useState([])

    const handleUploadB64 = event => {

        const file = event.target.files[0]
        const name = event.target.name

        const fileReader = new FileReader

        fileReader.readAsDataURL(file)

        fileReader.onload = event => {
            setImageB64(imageB64.concat({ title: name, image: event.target.result }))
        }
    }

    const handleAddViews = () => {
        imageB64.map(image => {
                try {
                    addViewsVehicle(sessionStorage.token, vehicleId, image.title, image.image)
                        .then(() => {
                            setFeedback({ level: 'info', message: 'vehículo creado' })
                            navigate('/vehicles')
                        })
                        .catch(error => setFeedback({ level: 'error', message: error.message }))
                } catch (error) {
                    setFeedback({ level: 'error', message: error.message })
                }
            })
    }


    return <div>
        <a onClick={() => navigate('/vehicle')}>Volver</a>
        <h2>Añade las imágenes de este vehículo</h2>
        <form>
            <h4>Parte frontal</h4>
            <input type="file" name="imageLead" onChange={handleUploadB64} />
            {/* {imageB64 && <img src={imageB64[0].image} />} */}
            <h4>Parte derecha</h4>
            <input type="file" name="imageRight" onChange={handleUploadB64} />
            {/* <img src={imageB64.image[1]} /> */}
            <h4>Parte trasera</h4>
            <input type="file" name="imageRear" onChange={handleUploadB64} />
            {/* <img src={imageB64.image[2]} /> */}
            <h4>Parte izquierda</h4>
            <input type="file" name="imageLeft" onChange={handleUploadB64} />
            {/* <img src={imageB64.image[3]} /> */}
            <button onClick={handleAddViews}>Añadir imágenes</button>
        </form>
    </div>
}