import { useEffect, useState } from 'react'
import { retrieveNotes } from '../logic'

export default ({onLoggedOut}) => {
    const [notes, setNotes] = useState()

    useEffect(() => {
        try {
            retrieveNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch(error) {
            alert(error.message)
        }
    }, [])

    const logout = () => {
        delete sessionStorage.token

        onLoggedOut()        
    }

    return <div>
        <h1>home</h1>
        <button onClick={logout}>Logout</button>

        {notes? <ul>
            {notes.map(note => <li key={note.id}>{note.text}</li>)}
        </ul> : <p>no notes</p>}
    </div>
}