import { useEffect, useState } from 'react'
import { retrieveNotes } from '../logic'
import './MyNotes.css'
import Modal from './Modal'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Note from './Note'
import Item from './Item'

export default ({ refresh }) => {
    const [notes, setNotes] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        refreshNotes()
    }, [refresh])

    const refreshNotes = () => {
        try {
            retrieveNotes(sessionStorage.token)
                .then(notes => setNotes(notes))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCloseModal = () => {
        refreshNotes()

        navigate('/my-notes')
    }

    const handleGoToNote = noteId => navigate(`/my-notes/${noteId}`)


    return <div className="MyNotes">
        {
            notes ?
                <ul className="MyNotes__list">
                    {notes.map(note => <li key={note.id} onClick={() => handleGoToNote(note.id)}><Note note={note} /></li>)}
                </ul>
                : <p>no notes</p>
        }

        <Routes>
            <Route path="n/:noteId" element={<Modal content={<Item onNoteSaved={handleCloseModal} onNoteDeleted={handleCloseModal} />} onClose={handleCloseModal} />} />
        </Routes>
    </div>
}