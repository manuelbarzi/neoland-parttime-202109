import './Note.css'
import { deleteNote, updateNote, createNote } from '../logic'
import { extractUserIdFromToken } from '../utils'

function Note({ onDeleted, onSaved, controls, note: { id, text, color, public: _public, date, userId, userName } }) {
    const handleDeleteNote = event => {
        event.preventDefault() //para evitar borrar y que intente hacer un PATCH 
        try {
            deleteNote(sessionStorage.token, id)
                .then(() => onDeleted())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleSave = event => {
        event.preventDefault()

        const { target: { text: { value: text }, color: { value: color }, public: { checked: _public } } } = event

        try {
            if (!id)
                createNote(sessionStorage.token, text, color, _public)
                    .then(() => onSaved())
                    .catch(error => alert(error.message))
            else
                updateNote(sessionStorage.token, id, text, color, _public)
                    .then(() => onSaved())
                    .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    if (id)
        controls = controls && extractUserIdFromToken(sessionStorage.token) === userId

    return <div className={`Note Note--${color}`}>
        {controls ?
            <form onSubmit={handleSave}>

                <textarea className="Note__text" name="text" defaultValue={text}></textarea>

                <select name="color" defaultValue={color}>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="yellow">yellow</option>
                </select>

                <input type="checkbox" name="public" defaultChecked={_public}></input>

                <button type="submit">Save</button>
                {id && <span onClick={handleDeleteNote}>🗑️</span>}
                {/* <span onClick={handleSave}>✍🏼</span> */}
            </form>
            :
            <p>{text}</p>
        }
        {id && <div className="Note__footer">
            <strong>{userName}</strong>, <time>{date.toDateString()}</time>
        </div>}
    </div >
} //abro el modal para completar los campos
export default Note