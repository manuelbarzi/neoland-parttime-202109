import { deleteNote } from '../logic'
import './Note.css'

export default ({ note: { id, text, color, userId, date, userName }, onDeleted }) => {

    const handleDelete = event => {
        event.preventDefault()
        event.stopPropagation()

        try {
            deleteNote(sessionStorage.token, id)
            .then(() => onDeleted())
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    return <div className={`Note h-52 w-52 px-6 Note--${color}`}>
        <p>{text}</p>
        <p>{userName}</p>
        <span><time>{date.toDateString()}</time></span>
        <button onClick={handleDelete}>Delete</button>
    </div>
}