import { deleteNote, updateNote } from '../logic'
import './Note.css'

export default ({ note: { id, text, color, userId, date, public: _public, userName }, onDeleted, controls = false }) => {

    const handleSave = event => {
        event.preventDefault()

        const { target: { text: { value: text } } } = event

        try {
            updateNote(sessionStorage.token, id, text, color, _public)
            .then(() => alert('note updated'))
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
    return <div className={`relative Note h-52 w-52 px-4 Note--${color}`}>

        {controls ? <form onSubmit={handleSave}>
            <textarea className={`padding-0 border-0 Note--${color}`} name="text" defaultValue={text}></textarea>
            <button type='submit'>Save</button>
            <button onClick={handleDelete}>Delete</button>
        </form> : <p>{text}</p>}

        <div className='absolute bottom-1 right-3 text-xs flex flex-row gap-2'>
            <span>{userName}</span>
            <span><time>{date.toDateString()}</time></span>
        </div>

    </div>
}