import './Note.css'
import { deleteNote } from '../logic'

export default function ({ onNoteDeleted, note: { id, text, color, date, userId, userName } }) {

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

    return <div className={`Note Note--${color}`}>
        <p className="Note__text">{text}</p>
        <div className="Note__footer">
            <img src="https://icons-for-free.com/iconfiles/png/512/cross+delete+icon-1320196393721642367.png" className="Note__delete" onClick={handleDeleteNote} />
            <div>
                <strong>{userName}</strong>, <time>{date.toDateString()}</time>
            </div>
        </div>
    </div>
}

