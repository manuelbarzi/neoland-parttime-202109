
import { useNavigate } from 'react-router-dom'
import { updateList, deleteSection } from '../logic'
import { useContext } from 'react'
import Context from './Context'
//list: {id, name, description, sections},

export default ({ list: { id, name, description, sections, price}, refresh}) => {
    const { setFeedback } = useContext(Context)
    const navigate = useNavigate()


    const handleSave = event => {
        event.preventDefault()

        const { target: { name: { value: name }, description: { value: description }, price: { value: price } } } = event

        try {
            updateList(sessionStorage.token, id, name, description, price)
                .then(() => {
                    navigate(`/`)
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }

    }

    const handleUpdateSection = (sectionId) => {
        navigate(`/list/${id}/section/${sectionId}`)

    }

    const handleNewSection =() =>{
        navigate(`/list/${id}/section`)
        
    }

    const handleDeleteSection =(sectionId)=>{

        try {
            deleteSection(sessionStorage.token, id , sectionId)
                .then(() => {
                    refresh()
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }



    return <div>
        <h1>Update List</h1>
        <form onSubmit={handleSave}>
            <input type="text" name="name" defaultValue={name} ></input>
            <textarea name="description" defaultValue={description} ></textarea>
            <input type="number" name="price" defaultValue={price} ></input>
            <button type="submit">Save</button>
        </form>
        <ul>
            {sections.map(section =>
                <li>{section.name}
                    <button onClick={() => handleUpdateSection(section.id)}>Edit</button>
                    <button onClick={() => handleDeleteSection(section.id)}>Delete</button>  </li>
            )}
        </ul>
        <button onClick={handleNewSection}>+</button>
    </div>


}