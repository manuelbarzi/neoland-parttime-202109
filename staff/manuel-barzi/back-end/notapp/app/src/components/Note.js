import './Note.css'
import { updateNote } from '../logic'

export default ({ note: { id, text, color, date, public: _public, userId, userName }, controls = false, onSaved }) => {
    const handleSave = event => {
        event.preventDefault()

        const { target: { text: { value: text } } } = event

        try {
            updateNote(sessionStorage.token, id, text, color, _public)
                .then(() => onSaved())
                .catch(error => alert(error.message))
        } catch(error) {
            alert(error.message)
        }
    }

    return <div className={`Note Note--${color}`}>
        {controls? <form onSubmit={handleSave}>
            <textarea className="Note__text" name="text" defaultValue={text}></textarea>
            <button type="submit">Save</button>
        </form> : <p>{text}</p>}
        <div className="Note__footer">
            <strong>{userName}</strong>, <time>{date.toDateString()}</time>
        </div>
    </div>
}