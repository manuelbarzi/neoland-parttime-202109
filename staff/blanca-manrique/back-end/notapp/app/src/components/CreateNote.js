import './CreateNote.css'
import { createNote } from '../logic'

function CreateNote({ onCreated }) {
    const handleCreateNote = event => {
        event.preventDefault()

        const { target: {
            text: { value: text },
            color: { value: color },
            public: { checked: _public }
        } } = event

        try {
            createNote(sessionStorage.token, text, color, _public)
                .then(() => onCreated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="CreateNote">
        <form onSubmit={handleCreateNote}>
            <textarea name="text"></textarea>

            <select name="color">
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
            </select>

            <input type="checkbox" name="public"></input>

            <button>Create</button>
        </form>
    </div>
}
export default CreateNote