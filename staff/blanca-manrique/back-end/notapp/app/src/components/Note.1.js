import './Note.css'
import { deleteNote } from '../logic'

function Note({ note: { id, text, color, date, userId, userName } }) {

    const handleDeleteNote = () => {
        try {
            deleteNote(sessionStorage.token, id)
                .then(()=> alert('nota borrada')) //si todo ha ido bien(he borrado la nota) llamo a un callback que refresque 
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className={`Note Note--${color}`}>
        <span onClick={handleDeleteNote}>🗑️</span>
        <div>
            <p>{text}</p>
            <div className="Note__footer">
                <strong>{userName}</strong>, <time>{date.toDateString()}</time>
            </div>
        </div>
    </div>
}
export default Note