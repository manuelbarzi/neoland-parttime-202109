import { useState, useEffect } from 'react'
import { retrieveNotes } from '../logic'
import './MyNotes.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Note from './Note'
import Modal from './Modal'
import Item from './Item'

function MyNotes({refresh}) {
    const [notes, setNotes] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        refreshMyNotes()
    }, [refresh])

    const refreshMyNotes = () => {
        try {
            retrieveNotes(sessionStorage.token)
            .then(notes => setNotes(notes))
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }
    
    const handleOpenItem = noteId => {
        navigate(`${noteId}`)
    }

    const handleCloseModal = () => {
        refreshMyNotes()
        navigate('/my-notes')
    }

    return <div className="MyNotes">
        <h1>My Notes</h1>
        {notes ? <ul className="MyNotes__list">
        {notes.map(note =>
                <li key={note.id} onClick={() => handleOpenItem(note.id)} >
                    <Note note={note} />
                </li>)}
        </ul> : <p>no notes</p>}

        <Routes>
            <Route path=":noteId" element={<Modal content={<Item onSaved={handleCloseModal} onDeleted={handleCloseModal}/>} onClose={handleCloseModal} />} />
        </Routes>
    </div>

}
export default MyNotes