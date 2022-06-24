import { createList } from "../logic"
import { useContext } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import Context from './Context'

//list: {id, name, description, sections},

export default ({ onSaved }) => {

    const { setFeedback } = useContext(Context)
    const navigate = useNavigate()
    const handleSave = event => {
        event.preventDefault()

        const { target: { name: { value: name }, description: { value: description } } } = event

        try {
            createList(sessionStorage.token, name, description)
                .then(() => {
                    onSaved()
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }

    }
    const handleGoBack = () => {
        navigate(`/`)
    }


    return <div>
        <button onClick={handleGoBack}>x</button>
        <h1>New List</h1>
        <form onSubmit={handleSave}>
            <input type="text" name="name" ></input>
            <textarea name="description" ></textarea>
            <button type="submit">Save</button>
        </form>

    </div>


}