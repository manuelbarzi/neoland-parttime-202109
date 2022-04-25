import { updateNote } from '../logic'

function ModifyNote({ onUpdated }) {
    const handleModifyNote = event => {
        event.preventDefault()

        const { target: {
            text: { value: text },
            color: { value: color },
            public: { checked: _public }
        } } = event

        try { // vamos a tener que traer por props la note
            updateNote(sessionStorage.token, text, color, _public)
                .then(() => onUpdated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="ModifyNote">
        <form onSubmit={handleModifyNote}>
            <textarea name="text"></textarea>

            <select name="color">
                <option value="yellow">yellow</option>
                <option value="green">green</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
            </select>

            <input type="checkbox" name="public"></input>

            <button>Update</button>
        </form>
    </div>
}
export default ModifyNote