import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { retrieveAllParts } from '../logic'
import Context from "./Context"
import PartItem from './PartItem'
import CreatePart from "./CreatePart"

export default function ({ content }) {
    const navigate = useNavigate()
    const { setFeedback } = useContext(Context)
    const { vehicleId } = useParams()
    const [title, setTitle] = useState()
    const [parts, setParts] = useState()
    const [addPart, setAddPart] = useState()
    const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

    useEffect(() => {
        if (content.title === 'lead')
            setTitle('Parte delantera')
        else if (content.title === 'rear')
            setTitle('Parte trasera')
        else if (content.title === 'right')
            setTitle('Parte derecha')
        else if (content.title === 'left')
            setTitle('Parte izquierda')
    }, [])

    useEffect(() => {
        try {
            retrieveAllParts(sessionStorage.token, vehicleId)
                .then(items => items.map(item => {
                    setParts(item)
                }))
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }, [])

    const handleCreatePart = event => {
        event.preventDefault()

        const asisX = event.clientX
        const asisY = event.clientY

        setCoordinates({ x: asisX, y: asisY })
        setAddPart(true)
    }
console.log(content)
    return <div>
        {addPart ?
            <CreatePart coordinates={coordinates} title={content.title}/>
            :
            <div>
                <h3>{title}</h3>
                <img src={content.image} onClick={handleCreatePart} />
                <h3>Partes</h3>
                {parts ?
                    <ul>
                        {parts.map(part => {
                            if (part.side === title) {
                                <li key={part.id}>
                                    <PartItem content={part} />
                                </li>
                            }
                        })}
                    </ul>
                    : <p>No hay partes abiertos</p>
                }
            </div>
        }
    </div >
}