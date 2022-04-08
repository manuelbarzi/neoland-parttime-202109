import { useEffect, useState } from 'react'
import { retrievePublicNotes } from '../logic'
import Modal from './Modal'
import './Feed.css'
import { Routes, Route, useNavigate } from 'react-router-dom'

function Feed({ refresh }) {
    const [notes, setNotes] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrievePublicNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [refresh])

    const handleCloseModal = () => navigate('/')

    return <div className="Feed">
        {notes ? <ul className="Feed__list">
            {notes.map(note => <li className={`Feed__item Feed__item--${note.color}`} key={note.id}>{note.text}</li>)}
        </ul> : <p>no notes</p>}

        <Routes>
            <Route path="n/:noteId" element={<Modal content={<h1>hola modal</h1>} onClose={handleCloseModal} />} />
        </Routes>
    </div>
}
export default Feed