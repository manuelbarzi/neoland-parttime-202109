import './Note.css'
import { updateNote, deleteNote, createNote } from '../logic'
import { extractUserIdFromToken } from '../utils'
import { useContext } from 'react'
import Context from './Context'

export default ({ note: { id, text, color, date, public: _public, userId, userName }, controls, onSaved, onDeleted }) => {
    const { setFeedback } = useContext(Context)

    const handleSave = event => {
        event.preventDefault()

        const { target: { text: { value: text }, color: { value: color }, public: { checked: _public } } } = event

        try {
            if (!id)
                createNote(sessionStorage.token, text, color, _public)
                    .then(() => {
                        setFeedback({ level: 'info', message: 'Note created' })

                        onSaved()
                    })
                    .catch(error => setFeedback({ level: 'error', message: error.message }))
            else
                updateNote(sessionStorage.token, id, text, color, _public)
                    .then(() => {
                        setFeedback({ level: 'info', message: 'Note updated' })

                        onSaved()
                    })
                    .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    const handleDelete = event => {
        event.preventDefault()

        try {
            deleteNote(sessionStorage.token, id)
                .then(() => {
                    setFeedback({ level: 'info', message: 'Note deleted' })

                    onDeleted()
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    if (id)
        controls = controls && extractUserIdFromToken(sessionStorage.token) === userId

    return <div className={`Note Note--${color}`}>
        {controls ? <form onSubmit={handleSave}>
            <textarea className="Note__text" name="text" defaultValue={text}></textarea>

            <select name="color" defaultValue={color}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
            </select>

            <input type="checkbox" name="public" defaultChecked={_public}></input>

            <button type="submit">Save</button>
            {id && <button onClick={handleDelete}>Delete</button>}
        </form> : <p>{text}</p>}
        {id && <div className="Note__footer">
            <strong>{userName}</strong>, <time>{date.toDateString()}</time>
        </div>}
    </div>
}