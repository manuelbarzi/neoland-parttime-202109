import { deleteNote } from '../logic'
import './Note.css'

export default ({ note: { id, text, color, date, userId, userName }, onDeleted }) => {

    const handleDelete = () => {
        try {
            deleteNote(sessionStorage.token, id)
                .then(() => onDeleted())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className={`Note Note--${color}`}>
        <button className="Note__paperBin" onClick={handleDelete}>🗑</button>
        <p>{text}</p>
        <div className="Note__footer">
            <strong>{userName}</strong>, <time>{date.toDateString()}</time>
        </div>
    </div>
}
