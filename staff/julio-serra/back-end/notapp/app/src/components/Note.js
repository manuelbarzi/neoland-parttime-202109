import { deleteNote, updateNote, createNote } from '../logic'
import './Note.css'
import { extractUserIdFromToken } from '../utils'

export default ({ note: { id, text, color, userId, date, public: _public, userName }, onDeleted, controls, onSaved }) => {

    const handleSave = event => {
        event.preventDefault()

        const { target: { text: { value: text }, color: { value: color }, public: { checked: _public } } } = event

        try {
            if (!id)
                createNote(sessionStorage.token, text, color, _public)
                    .then(() => onSaved())
                    .catch(error => alert(error.message))
            updateNote(sessionStorage.token, id, text, color, _public)
                .then(() => onSaved())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

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

    if (id)
        controls = controls && extractUserIdFromToken(sessionStorage.token) === userId


    return <div className={`relative Note h-52 w-52 px-4 Note--${color}`}>

        {controls ? <form onSubmit={handleSave}>
            <textarea className={`p-0 mt-2 border-0 Note--${color}`} name="text" defaultValue={text}></textarea>

            <select name="color" defaultValue={color}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
            </select>

            <p className="flex items-center gap-2">
                <input type="checkbox" name="public" defaultChecked={_public}></input>
                <label>Public?</label>
            </p>

            <button type='submit'>Save</button>
            {id && <button onClick={handleDelete}>Delete</button>}
        </form> : <p>{text}</p>}

        {id && <div className='absolute bottom-1 right-3 text-xs flex flex-row gap-2'>
            <span>{userName}</span>
            <span><time>{date.toDateString()}</time></span>
        </div>}

    </div>
}