import './Create.css'
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


    return <div className='Create'>
        <button onClick={handleGoBack}>x</button>
        <h1 className='Create__tiltle'>New List</h1>
        <form className='Create__form' onSubmit={handleSave}>
            <input className='Create__input' type="text" name="name" placeholder='Name' ></input>
            <textarea className='Create__input' name="description" placeholder='Description' ></textarea>
            <button className='Create__submit' type="submit">Save</button>
        </form>

    </div>


}