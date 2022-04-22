import './CreateNote.css'
import { createNote } from '../logic'

export default ({ onCreated }) => {
    const handleCreateNote = event => {
        event.preventDefault()
   
        const { target: {
            text: { value: text },
            color: { value: color },
            public: { checked: _public }
        }} = event
        try {
            createNote(sessionStorage.token, text, color, _public)
                .then(() => onCreated())
                .catch(error => console.error(error.message))
        } catch(error) {
            alert(error.message)
        }
    }

    return <div className="CreateNote">
        <h3>Create a note</h3>
        
        <form className="CreateNote__form" onSubmit={handleCreateNote}>
            <div className='form__inputset form__inputset-column'>
            <label htmlFor="text">Your note text:</label>
            <textarea name="text" ></textarea>
            </div>
            
            <div className='form__inputset form__inputset-column'>
            <label htmlFor="text">Pick a color:</label>
            <select name="color">
            <option defaultValue disabled >--Choose a color--</option>
                <option value="white">white</option>
                <option value="yellow">yellow</option>
                <option value="red">red</option>
                <option value="pink">pink</option>
                <option value="purple">purple</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                
            </select>
            </div>
            
            <div className='form__inputset form__inputset-row'>
            <label htmlFor="public">public</label>
            <input id="public" type="checkbox" name="public"></input>
            </div>
            

            <button className='form__submit'>Create</button>
        </form>
    </div>
}