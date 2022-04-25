import './Note.css'
import { deleteNote, updateNote, createNote } from '../logic'
import { extractUserIdFromToken } from '../utils'

export default function ({ onNoteDeleted, controls, onNoteSaved, note: { id, text, color, date, public: _public, userId, userName } }) {

    const handleSaveNote = event => {
        event.preventDefault()

        const { target: { text: { value: text }, color: { value: color }, public: { checked: _public } } } = event

        try {
            if (!id)
                createNote(sessionStorage.token, text, color, _public)
                    .then(() => onNoteSaved())
                    .catch(error => alert(error.message))
            else
                updateNote(sessionStorage.token, id, text, color, _public)
                    .then(() => onNoteSaved())
                    .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleDeleteNote = event => {
        event.preventDefault()

        try {
            deleteNote(sessionStorage.token, id)
                .then(() => onNoteDeleted())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

    }

    if (id)
        controls = controls && extractUserIdFromToken(sessionStorage.token) === userId

    return <div className={`Note Note--${color}`}>
        {controls ? <form onSubmit={handleSaveNote}>
            <textarea className="Note__Save__text" name='text' defaultValue={text}></textarea>
            <div className='Note__Save__footer'>
                {id && <img src="https://icons-for-free.com/iconfiles/png/512/cross+delete+icon-1320196393721642367.png" className="Note__delete" onClick={handleDeleteNote} />}

                <select name='color' defaultValue={color}>
                    <option value='red'>red</option>
                    <option value='blue'>blue</option>
                    <option value='pink'>pink</option>
                    <option value='yellow'>yellow</option>
                    <option value='green'>green</option>
                </select>

                <div>
                    <label for='public'>Private</label>
                    <input type='checkbox' name='public'></input>
                </div>

                <button type='submit'>Save</button>
            </div>
        </form> : <p>{text}</p>}

        {id && <div className="Note__footer">
            <strong>{userName}</strong>, <time>{date.toDateString()}</time>
        </div>}
    </div>
}

