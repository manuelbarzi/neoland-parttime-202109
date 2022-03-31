import { createNote } from '../logic'
import './CreateNote.css'

export default ({ onCreated }) => {
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
        <form className="form" onSubmit={handleCreateNote}>
            <textarea className="text" name="text"></textarea>
            <div className="form-option">
                <select className="select" name="color">
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="yellow">yellow</option>
                </select>

                <input className="check" type="checkbox" name="public"></input>
            </div>
            <button className="button">Create</button>
        </form>
    </div>
}